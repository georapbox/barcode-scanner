/*
 Local Express proxy to forward UPC API requests and add CORS headers.
 Usage:
   set UPC_API_KEY=your_key  (Windows PowerShell: $env:UPC_API_KEY="your_key")
   npm install
   npm run start:proxy

 The client should call the proxy at http://localhost:8787 (default). The
 repo's `src/js/constants.js` will default ITEM_INFO_PROXY_URL to this host
 when running on localhost.
*/

import express from 'express';
import fetch from 'node-fetch'; // `node-fetch` is a CommonJS module, so you can use `import`
import fs from 'fs/promises'; // Promises API of `fs`
import path from 'path';

const app = express();
const PORT = process.env.PORT || 8788;
const UPC_API_BASE = 'https://api.spoonacular.com';
const API_KEY2 = process.env.UPC_API_KEY2 || '';
const INGREDIENTS_FILE = process.env.INGREDIENTS_FILE || path.resolve('ingredients.json');
// Optional: allow server to verify Firebase ID tokens and read per-user
// ingredients from Firestore. We initialize firebase-admin lazily so the
// module is not required unless the environment is configured.
let admin = null;
let firestore = null;
async function initFirebaseAdmin() {
  if (admin) return;
  try {
    // dynamic import so projects without firebase-admin don't fail at startup
    const mod = await import('firebase-admin');
    admin = mod.default || mod;

    if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
      const svc = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
      admin.initializeApp({ credential: admin.credential.cert(svc) });
      console.log('firebase-admin initialized from FIREBASE_SERVICE_ACCOUNT_JSON');
    } else if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
      admin.initializeApp();
      console.log('firebase-admin initialized using GOOGLE_APPLICATION_CREDENTIALS');
    } else {
      // no credentials supplied
      console.log('firebase-admin not initialized: no service account provided');
      admin = null;
      return;
    }

    firestore = admin.firestore();
  } catch (err) {
    console.warn(
      'Could not initialize firebase-admin. To enable per-user storage install firebase-admin and provide credentials. Error:',
      String(err)
    );
    admin = null;
    firestore = null;
  }
}

function maskUrlApiKey(url) {
  try {
    return url.replace(/([?&]apiKey=)[^&]+/i, '$1****');
  } catch {
    return url;
  }
}

// Helper to mask API keys in logs (show first 4 and last 4 chars).
function maskKey(k) {
  if (!k) {
    return '<none>';
  }
  if (k.length <= 8) {
    return '****';
  }
  return `${k.slice(0, 4)}...${k.slice(-4)}`;
}

// Log which key will be used (masked) so developers can confirm behavior.
console.log(`UPC proxy: using API key: ${maskKey(API_KEY2)}`);

app.use(express.json());

// CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

// GET /recipes/from-file
// Reads ingredients from a JSON file and calls Spoonacular's
// GET /recipes/findByIngredients endpoint. Query params can override
// defaults: number, ranking, ignorePantry.

app.get('/recipes/from-file', async (req, res) => {
  try {
    // Prefer user-specific ingredients when client provides an Authorization
    // Firebase ID token (Bearer) or a dev X-Local-Uid header. Otherwise fall
    // back to reading the configured ingredients file.
    const authHeader = req.headers && (req.headers.authorization || req.headers['authorization']);
    const localUid = req.headers && (req.headers['x-local-uid'] || req.headers['X-Local-Uid']);

    let ingredientsList = null;

    // Attempt Firestore per-user read if credentials available
    if ((process.env.FIREBASE_SERVICE_ACCOUNT_JSON || process.env.GOOGLE_APPLICATION_CREDENTIALS)) {
      await initFirebaseAdmin();
    }

    if (admin && firestore && authHeader) {
      try {
        const token = String(authHeader).replace(/^Bearer\s+/i, '').trim();
        if (token) {
          const decoded = await admin.auth().verifyIdToken(token);
          const uid = decoded && decoded.uid;
          if (uid) {
            const ref = firestore.collection('userIngredients').doc(uid).collection('items');
            const snapshot = await ref.orderBy('addedAt', 'desc').get();
            const items = snapshot.docs.map(d => {
              const data = d.data() || {};
              return (data.title || null);
            }).filter(Boolean);
            if (items.length > 0) ingredientsList = items;
          }
        }
      } catch (e) {
        console.warn('Failed to fetch per-user ingredients from Firestore:', String(e));
        // fallthrough to file-based handling below
      }
    }

    // If no Firestore list yet, but user provided X-Local-Uid (dev mode), read and filter file
    if (!ingredientsList && localUid) {
      try {
        const content = await fs.readFile(INGREDIENTS_FILE, 'utf8');
        const parsed = JSON.parse(content);
        let all = [];
        if (Array.isArray(parsed)) {
          all = parsed;
        } else if (parsed && Array.isArray(parsed.ingredients)) {
          all = parsed.ingredients;
        }
        // parsed items may be strings or objects
        const filtered = all
          .map(it => (typeof it === 'string' ? { title: it } : it || {}))
          .filter(it => it && it.userId === localUid)
          .map(it => it.title)
          .filter(Boolean);
        if (filtered.length > 0) ingredientsList = filtered;
      } catch (e) {
        // file missing or invalid, will be handled below
      }
    }

    // Final fallback: read the ingredients file (existing behavior)
    if (!ingredientsList) {
      // Read ingredients file (supports array or object with `ingredients` key)
      const content = await fs.readFile(INGREDIENTS_FILE, 'utf8');
      let parsed;
      try {
        parsed = JSON.parse(content);
      } catch {
        return res.status(400).json({ error: 'invalid ingredients JSON' });
      }

      ingredientsList = [];
      if (Array.isArray(parsed)) {
        ingredientsList = parsed;
      } else if (parsed && parsed.ingredients) {
        if (Array.isArray(parsed.ingredients)) {
          ingredientsList = parsed.ingredients;
        } else if (typeof parsed.ingredients === 'string') {
          ingredientsList = parsed.ingredients
            .split(',')
            .map(s => s.trim())
            .filter(Boolean);
        }
      } else {
        return res
          .status(400)
          .json({ error: 'ingredients JSON must be an array or have an `ingredients` property' });
      }

      if (ingredientsList.length === 0) {
        return res.status(400).json({ error: 'no ingredients found in file' });
      }
    }

    const ingredientsParam = encodeURIComponent(ingredientsList.join(','));
    const number = Number(req.query.number) || 10;
    const ranking = Number(req.query.ranking) || 1;
    const ignorePantry =
      req.query.ignorePantry == null
        ? true
        : req.query.ignorePantry === 'true' || req.query.ignorePantry === true;

    let targetUrl = `${UPC_API_BASE}/recipes/findByIngredients?ingredients=${ingredientsParam}&number=${number}&ranking=${ranking}&ignorePantry=${ignorePantry}`;
    if (API_KEY2) {
      // Spoonacular expects `apiKey` query param
      targetUrl += `&apiKey=${encodeURIComponent(API_KEY2)}`;
    }

    // Prepare headers
    const headers = { Accept: 'application/json' };

    // Log masked target URL
    console.log('RecipeDB Proxy -> upstream:', maskUrlApiKey(targetUrl));

    const upstreamRes = await fetch(targetUrl, { method: 'GET', headers });
    const text = await upstreamRes.text();

    // Log upstream JSON response pretty-printed when possible
    try {
      const contentType = upstreamRes.headers.get('content-type') || '';
      if (contentType.toLowerCase().includes('application/json')) {
        const parsedBody = JSON.parse(text);
        console.log(
          'RecipeDB Proxy <- upstream response (JSON):\n' + JSON.stringify(parsedBody, null, 2)
        );
      } else {
        try {
          const parsedBody = JSON.parse(text);
          console.log(
            'RecipeDB Proxy <- upstream response (parsed):\n' + JSON.stringify(parsedBody, null, 2)
          );
        } catch {
          console.log('RecipeDB Proxy <- upstream response (text):', text);
        }
      }
    } catch {
      console.log('RecipeDB Proxy <- upstream response (raw):', text);
    }

    // Forward response
    const contentType = upstreamRes.headers.get('content-type');
    if (contentType) {
      res.set('Content-Type', contentType);
    }
    return res.status(upstreamRes.status).send(text);
  } catch (err) {
    console.error('RecipeDB error', err);
    return res.status(500).json({ error: 'recipe_proxy_error', details: String(err) });
  }
});

app.listen(PORT, () => {
  console.log(`UPC proxy listening on http://localhost:${PORT}`);
});

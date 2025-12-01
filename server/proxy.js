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

const express = require('express');
const fetch = global.fetch || require('node-fetch');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8787;
const UPC_API_BASE = 'https://api.upcdatabase.org';
const API_KEY = process.env.UPC_API_KEY || '';
const INGREDIENTS_FILE = process.env.INGREDIENTS_FILE || path.join(__dirname, 'ingredients.json');

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
console.log(`UPC proxy: using API key: ${maskKey(API_KEY)}`);

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

async function proxyRequest(targetUrl, method, req, res) {
  try {
    const headers = { Accept: 'application/json' };
    if (API_KEY) {
      headers['Authorization'] = `Bearer ${API_KEY}`;
    }

    const fetchOptions = {
      method: method || 'GET',
      headers
    };

    // Log outbound request details (mask the Authorization header)
    try {
      const loggedHeaders = { ...headers };
      if (loggedHeaders['Authorization']) {
        const token = String(loggedHeaders['Authorization']).replace(/^Bearer\s+/i, '');
        loggedHeaders['Authorization'] = `Bearer ${maskKey(token)}`;
      }
      console.log('Proxy -> upstream:', targetUrl, JSON.stringify(loggedHeaders));
    } catch {
      // never fail the request because logging threw
    }

    const fetchRes = await fetch(targetUrl, fetchOptions);
    const text = await fetchRes.text();

    // Log upstream response body for debugging and save item title when present.
    try {
      const contentType = fetchRes.headers.get('content-type') || '';
      if (contentType.toLowerCase().includes('application/json')) {
        const parsed = JSON.parse(text);
        console.log('Proxy <- upstream response (JSON):\n' + JSON.stringify(parsed, null, 2));
        // If the response contains a title field, save it to ingredients.json
        if (parsed && typeof parsed.title === 'string' && parsed.title.trim()) {
          saveTitleToIngredients(parsed.title.trim()).catch(err =>
            console.warn('Failed to save title to ingredients.json', err)
          );
        }
      } else {
        // Not JSON according to content-type, still try to parse safely
        try {
          const parsed = JSON.parse(text);
          console.log('Proxy <- upstream response (parsed):\n' + JSON.stringify(parsed, null, 2));
          if (parsed && typeof parsed.title === 'string' && parsed.title.trim()) {
            saveTitleToIngredients(parsed.title.trim()).catch(err =>
              console.warn('Failed to save title to ingredients.json', err)
            );
          }
        } catch {
          console.log('Proxy <- upstream response (text):', text);
        }
      }
    } catch {
      console.log('Proxy <- upstream response (raw):', text);
    }

    res.status(fetchRes.status);
    // pass content-type if present
    const contentType = fetchRes.headers.get('content-type');
    if (contentType) {
      res.set('Content-Type', contentType);
    }
    return res.send(text);
  } catch (err) {
    console.error('Proxy error', err);
    return res.status(500).json({ error: 'proxy_error', details: String(err) });
  }
}

async function saveTitleToIngredients(title) {
  try {
    let current = { ingredients: [] };
    try {
      const data = await fs.readFile(INGREDIENTS_FILE, 'utf8');
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        // old format: array
        current.ingredients = parsed.map(String);
      } else if (parsed && Array.isArray(parsed.ingredients)) {
        current.ingredients = parsed.ingredients.map(String);
      }
    } catch {
      // file may not exist or contain invalid JSON — start fresh
      current = { ingredients: [] };
    }

    // Append if not already present
    if (!current.ingredients.includes(title)) {
      current.ingredients.push(title);
      await fs.writeFile(INGREDIENTS_FILE, JSON.stringify(current, null, 2), 'utf8');
      console.log(`Saved title to ingredients.json: ${title}`);
    } else {
      // Already present; do nothing
    }
  } catch (err) {
    // swallow errors but log
    console.warn('Error saving title to ingredients file', err);
  }
}

// GET /product/:id
app.get('/product/:id', (req, res) => {
  const id = req.params.id;
  const target = `${UPC_API_BASE}/product/${encodeURIComponent(id)}`;
  return proxyRequest(target, 'GET', req, res);
});

// GET /products/:id
app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  const target = `${UPC_API_BASE}/products/${encodeURIComponent(id)}`;
  return proxyRequest(target, 'GET', req, res);
});

// POST /products/:id
app.post('/products/:id', (req, res) => {
  const id = req.params.id;
  const target = `${UPC_API_BASE}/products/${encodeURIComponent(id)}`;
  return proxyRequest(target, 'POST', req, res);
});

// GET /search
app.get('/search', (req, res) => {
  const q = req.query.q;
  if (!q) {
    return res.status(400).json({ error: 'missing q parameter' });
  }
  const target = `${UPC_API_BASE}/search?q=${encodeURIComponent(q)}`;
  return proxyRequest(target, 'GET', req, res);
});

app.listen(PORT, () => {
  console.log(`UPC proxy listening on http://localhost:${PORT}`);
});

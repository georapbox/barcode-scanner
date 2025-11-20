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
const app = express();
const PORT = process.env.PORT || 8787;
const UPC_API_BASE = 'https://api.upcdatabase.org';
const API_KEY = process.env.UPC_API_KEY || '';

app.use(express.json());

// CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

async function proxyRequest(targetUrl, method, req, res) {
  try {
    const headers = { Accept: 'application/json' };
    if (API_KEY) headers['Authorization'] = `Bearer ${API_KEY}`;

    const fetchOptions = {
      method: method || 'GET',
      headers
    };

    const fetchRes = await fetch(targetUrl, fetchOptions);
    const text = await fetchRes.text();

    res.status(fetchRes.status);
    // pass content-type if present
    const contentType = fetchRes.headers.get('content-type');
    if (contentType) res.set('Content-Type', contentType);
    return res.send(text);
  } catch (err) {
    console.error('Proxy error', err);
    return res.status(500).json({ error: 'proxy_error', details: String(err) });
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
  if (!q) return res.status(400).json({ error: 'missing q parameter' });
  const target = `${UPC_API_BASE}/search?q=${encodeURIComponent(q)}`;
  return proxyRequest(target, 'GET', req, res);
});

app.listen(PORT, () => {
  console.log(`UPC proxy listening on http://localhost:${PORT}`);
});

/**
 * Firebase Cloud Function to proxy UPC Database API requests
 * This keeps your API key secret and adds CORS headers
 */

const functions = require('firebase-functions');

const UPC_API_BASE = 'https://api.upcdatabase.org';
const API_KEY = functions.config().upc?.apikey || '';

// Helper to mask API keys in logs
function maskKey(k) {
  if (!k || k.length <= 8) return '****';
  return `${k.slice(0, 4)}...${k.slice(-4)}`;
}

console.log(`UPC Function: using API key: ${maskKey(API_KEY)}`);

/**
 * Main cloud function - handles all UPC API requests
 */
exports.upc = functions.https.onRequest(async (req, res) => {
  // Set CORS headers
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(204).send('');
  }

  try {
    // Parse the request path to determine which UPC endpoint to call
    // Examples: /product/123, /products/123, /search?q=cola
    const path = req.path || '/';
    const query = req.query || {};
    
    let targetUrl = '';
    
    // Determine target URL based on path
    if (path.startsWith('/product/')) {
      const id = path.replace('/product/', '');
      targetUrl = `${UPC_API_BASE}/product/${encodeURIComponent(id)}`;
    } else if (path.startsWith('/products/')) {
      const id = path.replace('/products/', '');
      targetUrl = `${UPC_API_BASE}/products/${encodeURIComponent(id)}`;
    } else if (path === '/search' && query.q) {
      targetUrl = `${UPC_API_BASE}/search?q=${encodeURIComponent(query.q)}`;
    } else {
      return res.status(400).json({ error: 'Invalid path' });
    }

    // Make request to UPC API
    const headers = {
      'Accept': 'application/json'
    };
    
    if (API_KEY) {
      headers['Authorization'] = `Bearer ${API_KEY}`;
    }

    const method = req.method === 'POST' ? 'POST' : 'GET';
    
    const response = await fetch(targetUrl, { method, headers });
    const data = await response.json();

    // Return the response
    res.status(response.status).json(data);
    
  } catch (error) {
    console.error('UPC Function error:', error);
    res.status(500).json({ 
      error: 'proxy_error', 
      message: error.message 
    });
  }
});


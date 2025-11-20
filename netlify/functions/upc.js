// Netlify Function to proxy requests to the UPC Database API and add CORS headers.
// Place this file in `netlify/functions/upc.js` and deploy to Netlify. Set the
// environment variable `UPC_API_KEY` in your Netlify site settings (not in source).

export async function handler(event) {
  const UPC_API_BASE = 'https://api.upcdatabase.org';
  const API_KEY = process.env.UPC_API_KEY || '';

  // Allow CORS from anywhere (adjust origin for production if needed)
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers };
  }

  try {
    const q = event.queryStringParameters || {};
    const barcode = q.barcode;
    const search = q.q;

    let targetUrl = '';
    let method = event.httpMethod || 'GET';

    if (barcode) {
      // Prefer the /product/{id} endpoint as in examples, fall back to /products/{id}
      targetUrl = `${UPC_API_BASE}/product/${encodeURIComponent(barcode)}`;
    } else if (search) {
      targetUrl = `${UPC_API_BASE}/search?q=${encodeURIComponent(search)}`;
    } else {
      return { statusCode: 400, body: JSON.stringify({ error: 'missing barcode or q parameter' }), headers };
    }

    const fetchOptions = {
      method,
      headers: {
        'Accept': 'application/json'
      }
    };

    if (API_KEY) {
      fetchOptions.headers['Authorization'] = `Bearer ${API_KEY}`;
    }

    const res = await fetch(targetUrl, fetchOptions);
    const text = await res.text();

    // Pass through status and content-type
    const contentType = res.headers.get('content-type') || 'application/json';

    const responseHeaders = { ...headers, 'Content-Type': contentType };

    return {
      statusCode: res.status,
      headers: responseHeaders,
      body: text
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'proxy error', details: String(err) })
    };
  }
}

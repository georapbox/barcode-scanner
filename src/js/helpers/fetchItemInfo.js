import { ITEM_INFO_API_URL, ITEM_INFO_API_KEY, ITEM_INFO_PROXY_URL } from '../constants.js';
import { log } from '../utils/log.js';

const trimSlash = s => s.replace(/\/+$/, '');

/**
 * Try GET /products/{id} then fallback to POST /products/{id} if not found.
 * Also export a `searchItem` helper that calls GET /search?q={query}.
 *
 * @param {string} barcode
 * @returns {Promise<Object|null>}
 */
export async function fetchItemInfo(barcode) {
  if (!barcode || !/^[0-9]{12,14}$/.test(barcode)) {
    return null;
  }

  if (!ITEM_INFO_API_URL) {
    log.info('Item info API URL not configured; skipping lookup.');
    return null;
  }
  // Determine whether to use a proxy. Preference order:
  // 1) `ITEM_INFO_PROXY_URL` (build-time/env)
  // 2) Use configured proxy URL (defaults to /upc)
  // 3) Otherwise call the public API directly
  const isBrowser = typeof window !== 'undefined' && window?.location;
  let finalProxyUrl = ITEM_INFO_PROXY_URL || '';

  const useProxy = finalProxyUrl && finalProxyUrl.length > 0;
  const base = trimSlash(useProxy ? finalProxyUrl : ITEM_INFO_API_URL);
  const headers = {};
  // If calling the API directly (no proxy), send Authorization header.
  if (!useProxy && ITEM_INFO_API_KEY) {
    headers['Authorization'] = `Bearer ${ITEM_INFO_API_KEY}`;
  }

  // Try endpoints in this order to support both API styles:
  // 1) GET /product/{id} (example in your message)
  // 2) GET /products/{id}
  // 3) POST /products/{id} (fallback)

  // Helper to attempt a request and return parsed JSON or null
  async function attempt(url, opts = {}) {
    try {
      const res = await fetch(url, { headers, ...opts });
      if (!res.ok) {
        return { status: res.status, json: null };
      }
      try {
        const data = await res.json();
        return { status: res.status, json: data };
      } catch (e) {
        log.warn('Non-JSON response from item API', e);
        return { status: res.status, json: null };
      }
    } catch (err) {
      log.warn('Request failed', err);
      return { status: 0, json: null };
    }
  }

  // 1) GET /product/{id}
  const urlProduct = `${base}/product/${encodeURIComponent(barcode)}`;
  const tryGetProduct = await attempt(urlProduct, { method: 'GET' });
  if (tryGetProduct.json) return tryGetProduct.json;

  // 2) GET /products/{id}
  const urlProducts = `${base}/products/${encodeURIComponent(barcode)}`;
  const tryGetProducts = await attempt(urlProducts, { method: 'GET' });
  if (tryGetProducts.json) return tryGetProducts.json;

  // 3) POST /products/{id}
  const tryPostProducts = await attempt(urlProducts, { method: 'POST' });
  if (tryPostProducts.json) return tryPostProducts.json;

  return null;
}

/**
 * Search endpoint: GET /search?q={query}
 * Returns parsed JSON or null.
 *
 * @param {string} query
 * @returns {Promise<Object|null>}
 */
export async function searchItem(query) {
  if (!query) return null;

  // Prefer proxy when available (same logic as fetchItemInfo)
  const isBrowser = typeof window !== 'undefined' && window?.location;
  let finalProxyUrl = ITEM_INFO_PROXY_URL || '';

  // Removed explicit localhost check; ITEM_INFO_PROXY_URL defaults to /upc

  const useProxy = finalProxyUrl && finalProxyUrl.length > 0;
  const base = trimSlash(useProxy ? finalProxyUrl : ITEM_INFO_API_URL);

  const headers = {};
  if (!useProxy && ITEM_INFO_API_KEY) {
    headers['Authorization'] = `Bearer ${ITEM_INFO_API_KEY}`;
  }

  const url = `${base}/search?q=${encodeURIComponent(query)}`;

  try {
    const res = await fetch(url, { method: 'GET', headers });
    if (!res.ok) {
      log.warn('Search request failed', res.status);
      return null;
    }
    return await res.json();
  } catch (err) {
    log.error('Search request error', err);
    return null;
  }
}

/**
 * Removes an ingredient from the user's list via the proxy.
 *
 * @param {string} title
 * @returns {Promise<void>}
 */
export async function removeIngredient(title) {
  if (!title) return;

  let finalProxyUrl = ITEM_INFO_PROXY_URL || '';
  const useProxy = finalProxyUrl && finalProxyUrl.length > 0;
  
  // If no proxy configured, we can't remove from the server-side list
  if (!useProxy) return;

  const url = `${trimSlash(finalProxyUrl)}/user/ingredients`;
  
  const headers = { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  // Add Authorization header if available (Firebase token)
  // Note: The key might be different depending on where it's stored.
  // Based on recipes.html, it seems to be 'barcode-scanner/idToken'.
  const token = localStorage.getItem('barcode-scanner/idToken');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    await fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify({ title })
    });
  } catch (err) {
    log.error('Error removing ingredient', err);
  }
}

/**
 * Removes all ingredients from the user's list via the proxy.
 *
 * @returns {Promise<void>}
 */
export async function removeAllIngredients() {
  let finalProxyUrl = ITEM_INFO_PROXY_URL || '';
  const useProxy = finalProxyUrl && finalProxyUrl.length > 0;
  
  // If no proxy configured, we can't remove from the server-side list
  if (!useProxy) return;

  const url = `${trimSlash(finalProxyUrl)}/user/ingredients/all`;
  
  const headers = { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  const token = localStorage.getItem('barcode-scanner/idToken');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    await fetch(url, {
      method: 'DELETE',
      headers
    });
  } catch (err) {
    log.error('Error removing all ingredients', err);
  }
}

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
  // 2) If running in browser on localhost, default to `http://localhost:8787` (dev proxy)
  // 3) Otherwise call the public API directly
  const isBrowser = typeof window !== 'undefined' && window?.location;
  let finalProxyUrl = ITEM_INFO_PROXY_URL || '';

  if (!finalProxyUrl && isBrowser) {
    const host = window.location.hostname;
    if (host === 'localhost' || host === '127.0.0.1') {
      finalProxyUrl = 'http://localhost:8787';
    }
  }

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

  if (!finalProxyUrl && isBrowser) {
    const host = window.location.hostname;
    if (host === 'localhost' || host === '127.0.0.1') {
      finalProxyUrl = 'http://localhost:8787';
    }
  }

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

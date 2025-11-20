import { ITEM_INFO_API_URL, ITEM_INFO_API_KEY } from '../constants.js';
import { log } from '../utils/log.js';

/**
 * Fetch item information from configured API using the barcode.
 *
 * The API is expected to accept a `barcode` query parameter and return JSON.
 * If `ITEM_INFO_API_URL` is empty the function returns null (disabled).
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

  try {
    const url = new URL(ITEM_INFO_API_URL);
    url.searchParams.set('barcode', barcode);

    const headers = {};
    if (ITEM_INFO_API_KEY) {
      headers['Authorization'] = `Bearer ${ITEM_INFO_API_KEY}`;
    }

    const res = await fetch(url.toString(), { headers });

    if (!res.ok) {
      log.warn('Item info API returned non-OK response', res.status);
      return null;
    }

    const data = await res.json();
    return data;
  } catch (err) {
    log.error('Error fetching item info', err);
    return null;
  }
}

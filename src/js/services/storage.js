import { set, get } from 'idb-keyval';

const STORAGE_PREFIX = 'barcode-scanner/';
const SETTINGS_STORAGE_KEY = 'settings';
const HISTORY_STORAGE_KEY = 'history';

/**
 * Gets an item from the storage.
 *
 * @param {string} key - The key to get the item from.
 * @returns {Promise<[ error: any, value: any ]>} The item and an error if occurred.
 */
const getItem = async key => {
  try {
    return [null, await get(key)];
  } catch (error) {
    return [error, void 0];
  }
};

/**
 * Sets an item in the storage.
 *
 * @param {string} key - The key to set the item to.
 * @param {any} data - The data to set.
 * @returns {Promise<[ error: any ]>} An error if occurred.
 */
const setItem = async (key, data) => {
  try {
    await set(key, data);
    return [null];
  } catch (error) {
    return [error];
  }
};

/**
 * Gets the settings from the storage.
 *
 * @returns {Promise<[ error: any, value: any ]>} The settings and an error if occurred.
 */
export const getSettings = async () => {
  return getItem(STORAGE_PREFIX + SETTINGS_STORAGE_KEY);
};

/**
 * Sets the settings in the storage.
 *
 * @param {any} data - The settings to set.
 * @returns {Promise<[ error: any ]>} An error if occurred.
 */
export const setSettings = async data => {
  return setItem(STORAGE_PREFIX + SETTINGS_STORAGE_KEY, data);
};

/**
 * Gets the history from the storage.
 *
 * @returns {Promise<[ error: any, value: any ]>} The history and an error if occurred.
 */
export const getHistory = async () => {
  return getItem(STORAGE_PREFIX + HISTORY_STORAGE_KEY);
};

/**
 * Sets the history in the storage.
 *
 * @param {any} data - The history to set.
 * @returns {Promise<[ error: any ]>} An error if occurred.
 */
export const setHistory = async data => {
  const result = await setItem(STORAGE_PREFIX + HISTORY_STORAGE_KEY, data);

  // Fire-and-forget: attempt to sync the history to a server-side endpoint
  // that will write it to a JSON file (server must expose `/recipes/save-ingredients`).
  (async () => {
    try {
      // If running locally (localhost/127.0.0.1) the recipe server runs on port 8788
      // so post to that port. Otherwise post to the same origin.
      let serverPath = '/recipes/save-ingredients';
      if (typeof window !== 'undefined' && window.location) {
        const host = window.location.hostname;
        if (host === 'localhost' || host === '127.0.0.1') {
          serverPath = `${window.location.protocol}//${host}:8788/recipes/save-ingredients`;
        } else {
          serverPath = `${window.location.origin}/recipes/save-ingredients`;
        }
      }

      // Best-effort POST; do not block the main flow
      const ingredientsToSend = (data || []).map(item =>
        typeof item === 'string' ? item : item.value || item.title || JSON.stringify(item)
      );

      await fetch(serverPath, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ingredients: ingredientsToSend })
      });
      // optional: console.log('History synced to server');
    } catch (err) {
      // Don't throw; syncing is best-effort
      console.warn('Failed to sync history to server', err);
    }
  })();

  return result;
};

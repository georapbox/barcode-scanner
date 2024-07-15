import { set, get } from 'idb-keyval';

const STORAGE_PREFIX = 'barcode-scanner/';
const SETTINGS_STORAGE_KEY = 'settings';
const HISTORY_STORAGE_KEY = 'history';

/**
 * Gets an item from the storage.
 *
 * @param {string} key - The key to get the item from.
 * @returns {Promise<{ value: any, error: any }>} The item and an error if occurred.
 */
const getItem = async key => {
  try {
    return {
      value: await get(key),
      error: void 0
    };
  } catch (error) {
    return {
      value: void 0,
      error
    };
  }
};

/**
 * Sets an item in the storage.
 *
 * @param {string} key - The key to set the item to.
 * @param {any} data - The data to set.
 * @returns {Promise<{ error: any }>} An error if occurred.
 */
const setItem = async (key, data) => {
  try {
    await set(key, data);

    return {
      error: void 0
    };
  } catch (error) {
    return { error };
  }
};

/**
 * Gets the settings from the storage.
 *
 * @returns {Promise<{ value: any, error: any }>} The settings and an error if occurred.
 */
export const getSettings = async () => {
  return getItem(STORAGE_PREFIX + SETTINGS_STORAGE_KEY);
};

/**
 * Sets the settings in the storage.
 *
 * @param {any} data - The settings to set.
 * @returns {Promise<{ error: any }>} An error if occurred.
 */
export const setSettings = async data => {
  return setItem(STORAGE_PREFIX + SETTINGS_STORAGE_KEY, data);
};

/**
 * Gets the history from the storage.
 *
 * @returns {Promise<{ value: any, error: any }>} The history and an error if occurred.
 */
export const getHistory = async () => {
  return getItem(STORAGE_PREFIX + HISTORY_STORAGE_KEY);
};

/**
 * Sets the history in the storage.
 *
 * @param {any} data - The history to set.
 * @returns {Promise<{ error: any }>} An error if occurred.
 */
export const setHistory = async data => {
  return setItem(STORAGE_PREFIX + HISTORY_STORAGE_KEY, data);
};

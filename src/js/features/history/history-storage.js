import { getItem, setItem } from '../../shared/storage/key-value-storage.js';

const HISTORY_KEY = 'barcode-scanner/history';

/**
 * Gets the history from the storage.
 *
 * @returns {Promise<[ error: any, value: any ]>} The history and an error if occurred.
 */
export const getHistory = async () => {
  return getItem(HISTORY_KEY);
};

/**
 * Sets the history in the storage.
 *
 * @param {any} data - The history to set.
 * @returns {Promise<[ error: any ]>} An error if occurred.
 */
export const setHistory = async data => {
  return setItem(HISTORY_KEY, data);
};

import { getItem, setItem } from '../../shared/storage/key-value-storage.js';

const SETTINGS_KEY = 'barcode-scanner/settings';

/**
 * Gets the settings from the storage.
 *
 * @returns {Promise<[ error: any, value: any ]>} The settings and an error if occurred.
 */
export const getSettings = async () => {
  return getItem(SETTINGS_KEY);
};

/**
 * Sets the settings in the storage.
 *
 * @param {any} data - The settings to set.
 * @returns {Promise<[ error: any ]>} An error if occurred.
 */
export const setSettings = async data => {
  return setItem(SETTINGS_KEY, data);
};

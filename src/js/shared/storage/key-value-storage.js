import { set, get } from 'idb-keyval';

/**
 * Gets an item from the storage.
 *
 * @param {string} key - The key to get the item from.
 * @returns {Promise<[ error: any, value: any ]>} The item and an error if occurred.
 */
export const getItem = async key => {
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
export const setItem = async (key, data) => {
  try {
    await set(key, data);
    return [null];
  } catch (error) {
    return [error];
  }
};

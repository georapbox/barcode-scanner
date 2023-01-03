import { set, get } from 'idb-keyval';

const STORAGE_PREFIX = 'barcode-scanner/';
const SETTINGS_STORAGE_KEY = 'settings';
const HISTORY_STORAGE_KEY = 'history';

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

export const getSettings = async () => {
  return getItem(STORAGE_PREFIX + SETTINGS_STORAGE_KEY);
};

export const setSettings = async data => {
  return setItem(STORAGE_PREFIX + SETTINGS_STORAGE_KEY, data);
};

export const getHistory = async () => {
  return getItem(STORAGE_PREFIX + HISTORY_STORAGE_KEY);
};

export const setHistory = async data => {
  return setItem(STORAGE_PREFIX + HISTORY_STORAGE_KEY, data);
};

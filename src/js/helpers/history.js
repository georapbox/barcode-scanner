import { getHistory, setHistory, getSettings } from '../services/storage.js';

/**
 * Renders the history list. If there are no items in history, it will show a message.
 *
 * @param {Array<string>} data - Hidsoty data as an array of strings
 */
export function renderHistoryList(data) {
  const historyList = document.getElementById('historyList');
  const emptyHistoryBtn = document.getElementById('emptyHistoryBtn');

  historyList.innerHTML = '';

  if (!Array.isArray(data) || data.length === 0) {
    historyList.innerHTML = '<li>There are no saved items in history.</li>';
    emptyHistoryBtn.hidden = true;
  } else {
    emptyHistoryBtn.hidden = false;

    data.forEach(item => {
      const li = document.createElement('li');
      li.setAttribute('data-value', item);

      let historyItem;

      try {
        new URL(item);
        historyItem = document.createElement('a');
        historyItem.href = item;
        historyItem.setAttribute('target', '_blank');
        historyItem.setAttribute('rel', 'noreferrer noopener');
      } catch {
        historyItem = document.createElement('span');
      }

      historyItem.textContent = item;
      historyItem.setAttribute('title', item);

      const actionsEl = document.createElement('div');
      actionsEl.className = 'history-modal__actions';

      const copyBtn = document.createElement('custom-clipboard-copy');
      copyBtn.title = 'Copy to clipboard';
      copyBtn.setAttribute('only-icon', '');
      copyBtn.setAttribute('value', item);
      actionsEl.appendChild(copyBtn);

      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.className = 'history-modal__delete-action';
      removeBtn.title = 'Remove from history';
      removeBtn.setAttribute('data-action', 'delete');
      removeBtn.innerHTML = /* html */ `
          <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
          </svg>
        `;
      actionsEl.appendChild(removeBtn);

      li.appendChild(historyItem);
      li.appendChild(actionsEl);
      historyList.appendChild(li);
    });
  }
}

/**
 * Adds an item to the history.
 * If the item is already in history, it will not be added.
 *
 * @param {string} item - Item to add to history
 */
export async function addToHistory(item) {
  const { value: settings } = await getSettings();

  if (!item || !settings?.addToHistory) {
    return;
  }

  const { value: history = [], error: getHistoryError } = await getHistory();

  if (!getHistoryError && !history.find(h => h === item)) {
    const data = [...history, item];

    const { error: setHistoryError } = await setHistory(data);

    if (!setHistoryError) {
      renderHistoryList(data);
    }
  }
}

/**
 * Removes an item from the history.
 *
 * @param {string} item - Item to remove from history
 */
export async function removeFromHistory(item) {
  if (!item) {
    return;
  }

  const { value: history = [], error: getHistoryError } = await getHistory();

  if (!getHistoryError) {
    const data = history.filter(el => el !== item);
    const { error: setHistoryError } = await setHistory(data);

    if (!setHistoryError) {
      renderHistoryList(data);
    }
  }
}

/**
 * Removes all items from the history.
 */
export async function emptyHistory() {
  const { error: setHistoryError } = await setHistory([]);

  if (!setHistoryError) {
    renderHistoryList([]);
  }
}

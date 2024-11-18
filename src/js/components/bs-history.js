import { getHistory, setHistory, getSettings } from '../services/storage.js';

const styles = /* css */ `
  :host {
    display: block;
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none !important;
  }

  ul {
    max-width: 31.25rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul li {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 0.75rem;
    word-break: break-all;
    border-bottom: 1px solid var(--border);
    color: var(--text-main);
    text-decoration: none;
  }

  ul li:last-of-type {
    border-bottom: none;
  }

  ul li a {
    text-decoration: none;
    color: var(--links);
  }

  ul li a:hover {
    text-decoration: underline;
  }

  .actions {
    display: flex;
    gap: 0.25rem;
  }

  .actions button,
  .actions custom-clipboard-copy::part(button) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem 0.5rem;
    margin: 0;
    border: 0;
    border-radius: var(--border-radius);
    background-color: transparent !important;
    line-height: 1;
    font-size: 1rem;
    color: var(--text-main);
    cursor: pointer;
  }

  .actions custom-clipboard-copy::part(button--success) {
    color: var(--success-color);
  }

  .actions .delete-action {
    color: var(--error-color);
    margin-right: -0.5rem;
  }
`;

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>${styles}</style>
  <ul id="historyList"></ul>
`;

class BSHistory extends HTMLElement {
  #historyListEl = null;

  constructor() {
    super();

    if (!this.shadowRoot) {
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  async connectedCallback() {
    this.#historyListEl = this.shadowRoot?.getElementById('historyList');

    this.#render((await getHistory())[1] || []);

    this.#historyListEl?.addEventListener('click', this.#handleHistoryListClick);
  }

  disconnectedCallback() {
    this.#historyListEl?.removeEventListener('click', this.#handleHistoryListClick);
  }

  /**
   * Adds an item to the history.
   * If the item is already in history, it will not be added.
   *
   * @param {string} item - Item to add to history
   */
  async add(item) {
    const [, settings] = await getSettings();

    if (!item || !settings?.addToHistory) {
      return;
    }

    const [getHistoryError, history = []] = await getHistory();

    if (!getHistoryError && Array.isArray(history) && !history.find(h => h === item)) {
      const data = [...history, item];

      const [setHistoryError] = await setHistory(data);

      if (!setHistoryError) {
        this.#render(data);
      }
    }
  }

  /**
   * Removes an item from the history.
   *
   * @param {string} item - Item to remove from history
   */
  async remove(item) {
    if (!item) {
      return;
    }

    const [getHistoryError, history = []] = await getHistory();

    if (!getHistoryError && Array.isArray(history)) {
      const data = history.filter(el => el !== item);
      const [setHistoryError] = await setHistory(data);

      if (!setHistoryError) {
        this.#render(data);
      }
    }
  }

  /**
   * Removes all items from the history.
   */
  async empty() {
    const [setHistoryError] = await setHistory([]);

    if (!setHistoryError) {
      this.#render([]);
    }
  }

  /**
   * Renders the history list. If there are no items in history, it will show a message.
   *
   * @param {Array<string>} data - Hidsoty data as an array of strings
   */
  #render(data) {
    if (!this.#historyListEl) {
      return;
    }

    const emptyHistoryBtn = document.getElementById('emptyHistoryBtn'); // TODO: Find better way to get this element

    this.#historyListEl.replaceChildren();

    if (!Array.isArray(data) || data.length === 0) {
      this.#historyListEl.innerHTML = '<li>There are no saved items in history.</li>';
      emptyHistoryBtn?.setAttribute('hidden', '');
    } else {
      emptyHistoryBtn?.removeAttribute('hidden');

      data.forEach((item, index) => {
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
        historyItem.setAttribute('id', `historyItem-${index}`);

        const actionsEl = document.createElement('div');
        actionsEl.className = 'actions';

        const copyBtn = document.createElement('custom-clipboard-copy');
        copyBtn.setAttribute('id', `copyHistoryItem-${index}`);
        copyBtn.setAttribute('aria-label', 'Copy to clipboard');
        copyBtn.setAttribute('aria-labelledby', `copyHistoryItem-${index} historyItem-${index}`);
        copyBtn.setAttribute('only-icon', '');
        copyBtn.setAttribute('value', item);
        actionsEl.appendChild(copyBtn);

        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'delete-action';
        removeBtn.setAttribute('data-action', 'delete');
        removeBtn.setAttribute('id', `removeHistoryItem-${index}`);
        removeBtn.setAttribute('aria-label', 'Remove from history');
        removeBtn.setAttribute(
          'aria-labelledby',
          `removeHistoryItem-${index} historyItem-${index}`
        );
        removeBtn.innerHTML = /* html */ `
          <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
          </svg>
        `;
        actionsEl.appendChild(removeBtn);

        li.appendChild(historyItem);
        li.appendChild(actionsEl);
        this.#historyListEl.appendChild(li);
      });
    }
  }

  /**
   * Handles the click event on the history list.
   *
   * @param {Event} evt - The event object
   */
  #handleHistoryListClick = evt => {
    const target = evt.target;

    // Handle delete action
    if (target.closest('[data-action="delete"]')) {
      const value = target.closest('li').dataset.value;

      if (window.confirm(`Delete history item ${value}?`)) {
        this.remove(value);
        return;
      }
    }
  };

  static defineCustomElement(elementName = 'bs-history') {
    if (typeof window !== 'undefined' && !window.customElements.get(elementName)) {
      window.customElements.define(elementName, BSHistory);
    }
  }
}

BSHistory.defineCustomElement();

export { BSHistory };

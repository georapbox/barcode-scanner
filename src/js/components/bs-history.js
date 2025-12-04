import { getHistory, setHistory } from '../services/storage.js';
import { getUserScans, deleteAllUserScans, deleteScan } from '../services/firebase-scans.js';
import { isFirebaseConfigured } from '../services/firebase-config.js';
import { isAuthenticated } from '../services/firebase-auth.js';
import { log } from '../utils/log.js';
import { toastify } from '../helpers/toastify.js';

const styles = /* css */ `
  :host {
    --empty-history-button-color: #ffffff;

    display: block;
    box-sizing: border-box;
  }

  @media (prefers-color-scheme: dark) {
    :host {
      --empty-history-button-color: #000000;
    }
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
    max-width: 36.25rem;
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
    border-bottom: 1px solid var(--border);
    color: var(--text-main);
  }

  ul li:last-of-type {
    border-bottom: none;
  }

  ul li a {
    color: var(--links);
  }

  ul li a,
  ul li span {
    word-break: break-all;
  }

  @supports (-webkit-line-clamp: 1) and (display: -webkit-box) and (-webkit-box-orient: vertical) {
    ul li a,
    ul li span {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    }
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

  .actions custom-clipboard-copy::part(button--error) {
    color: var(--danger-color);
  }

  .actions .delete-action {
    color: var(--danger-color);
    margin-right: -0.5rem;
  }

  footer {
    position: sticky;
    bottom: 0;
    padding: 0.75rem;
    background-color: var(--dialog-background);
  }

  footer > button {
    width: 100%;
    padding: 0.625rem;
    border: 0;
    border-radius: var(--border-radius);
    background-color: var(--danger-color);
    color: var(--empty-history-button-color);
    font-size: 1rem;
    cursor: pointer;
  }

  ul:empty + footer > button {
    display: none;
  }

  ul:not(:empty) + footer > div {
    display: none;
  }

  /* Product info styles */
  ul li strong {
    font-weight: 600;
    color: var(--text-main);
  }

  ul li small {
    font-size: 0.85em;
    opacity: 0.7;
  }

  ul li span[style*="cursor: pointer"] {
    text-decoration: underline;
    text-decoration-style: dotted;
  }

  ul li span[style*="cursor: pointer"]:hover {
    opacity: 0.8;
  }
`;

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>${styles}</style>
  <ul id="historyList"></ul>
  <footer>
    <div>There are no saved items in history.</div>
    <div style="display:flex;gap:0.5rem;">
      <button type="button" id="emptyHistoryBtn">Empty history</button>
    </div>
  </footer>
`;

class BSHistory extends HTMLElement {
  #historyListEl = null;
  #emptyHistoryBtn = null;
  
  // Notify a short warning before expiry (ms). 3s works for 5s test items.
  #PRE_NOTIFY_THRESHOLD_MS = 3000;

  // Default expiry (30 days / 1 month) in ms
  static #DEFAULT_EXPIRY_MS = 30 * 24 * 60 * 60 * 1000;

  // Read optional test expiry seconds from URL: ?testExpireSeconds=5
  static #getDefaultExpiryMs() {
    try {
      const params = new URLSearchParams(window.location.search);
      const s = params.get('testExpireSeconds');
      const n = s ? Number(s) : NaN;
      if (!Number.isNaN(n) && n > 0) {
        return n * 1000;
      }
      // Convenience test mode: `?testMode=1` or `?testMode=true` sets expiry to 5s
      const testMode = params.get('testMode');
      if (testMode === '1' || String(testMode).toLowerCase() === 'true') {
        return 10 * 1000;
      }
      // Auto-detect local dev environment: treat localhost/file protocol as test mode (10s)
      if (typeof window !== 'undefined') {
        try {
          const host = window.location.hostname;
          const protocol = window.location.protocol;
          const isLocalHost = host === 'localhost' || host === '127.0.0.1' || host === '::1';
          const isFile = protocol === 'file:';
          if (isLocalHost || isFile) {
            return 10 * 1000;
          }
        } catch (e) {
          // ignore
        }
      }
    } catch (e) {
      // ignore
    }
    return BSHistory.#DEFAULT_EXPIRY_MS;
  }

  constructor() {
    super();

    if (!this.shadowRoot) {
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  async connectedCallback() {
    this.#historyListEl = this.shadowRoot?.getElementById('historyList');
    this.#emptyHistoryBtn = this.shadowRoot?.getElementById('emptyHistoryBtn');
    

    // Always load from local storage first (this persists across logout)
    const [, rawHistory = []] = await getHistory();
    
    let historyData = [];
    
    // Try to load from Firestore if configured and user is authenticated
    if (isFirebaseConfigured() && isAuthenticated()) {
      try {
        const { error, scans } = await getUserScans();
        if (!error && scans) {
          // Convert Firestore scans to history format
          const firestoreScans = scans.map(scan => ({
            value: scan.value || '',
            addedAt: scan.scannedAt ? scan.scannedAt.getTime() : Date.now(),
            expiresAt: scan.scannedAt ? scan.scannedAt.getTime() + BSHistory.#getDefaultExpiryMs() : Date.now() + BSHistory.#getDefaultExpiryMs(),
            notified: false,
            preNotified: false,
            title: scan.title || '',
            brand: scan.brand || '',
            description: scan.description || '',
            format: scan.format || '',
            firestoreId: scan.id || null
          }));
          
          log.info(`Loaded ${firestoreScans.length} scans from Firestore`);
          
          // Merge Firestore scans with local storage
          // Firestore is the source of truth, but keep local scans too
          const localNormalized = (rawHistory || []).map(item => {
            if (!item) return null;
            if (typeof item === 'string') {
              const addedAt = Date.now();
              return {
                value: item,
                addedAt,
                expiresAt: addedAt + BSHistory.#getDefaultExpiryMs(),
                notified: false,
                preNotified: false
              };
            }
            return {
              value: item.value ?? (item?.barcode ?? ''),
              addedAt: item.addedAt ?? Date.now(),
              expiresAt: item.expiresAt ?? (item.addedAt ? item.addedAt + BSHistory.#getDefaultExpiryMs() : Date.now() + BSHistory.#getDefaultExpiryMs()),
              notified: Boolean(item.notified),
              preNotified: Boolean(item.preNotified),
              title: item.title || '',
              brand: item.brand || '',
              description: item.description || '',
              format: item.format || '',
              firestoreId: item.firestoreId || null
            };
          }).filter(Boolean);
          
          // Merge: combine Firestore and local, removing duplicates
          const mergedMap = new Map();
          
          // Add Firestore scans first (source of truth)
          firestoreScans.forEach(scan => {
            mergedMap.set(scan.value, scan);
          });
          
          // Add local scans that aren't in Firestore
          localNormalized.forEach(scan => {
            if (!mergedMap.has(scan.value)) {
              mergedMap.set(scan.value, scan);
            }
          });
          
          historyData = Array.from(mergedMap.values());
        }
      } catch (err) {
        log.error('Error loading from Firestore:', err);
      }
    }
    
    // If Firestore didn't work or user not authenticated, use local storage only
    if (historyData.length === 0) {
      const normalized = (rawHistory || []).map(item => {
        if (!item) return null;
        if (typeof item === 'string') {
          const addedAt = Date.now();
          return {
            value: item,
            addedAt,
            expiresAt: addedAt + BSHistory.#getDefaultExpiryMs(),
            notified: false,
            preNotified: false
          };
        }

        // Already an object: ensure required fields exist
        return {
          value: item.value ?? (item?.barcode ?? ''),
          addedAt: item.addedAt ?? Date.now(),
          expiresAt: item.expiresAt ?? (item.addedAt ? item.addedAt + BSHistory.#getDefaultExpiryMs() : Date.now() + BSHistory.#getDefaultExpiryMs()),
          notified: Boolean(item.notified),
          preNotified: Boolean(item.preNotified),
          title: item.title || '',
          brand: item.brand || '',
          description: item.description || '',
          format: item.format || '',
          firestoreId: item.firestoreId || null
        };
      }).filter(Boolean);

      historyData = normalized;

      // Persist normalized history so storage uses the new format
      await setHistory(normalized);
    }

    this.#renderHistoryList(historyData || []);

    // If test mode or explicit test expiry seconds set, show an informative toast for quick testing
    try {
      const params = new URLSearchParams(window.location.search);
      const s = params.get('testExpireSeconds');
      const tm = params.get('testMode');
      if (s || tm) {
        const secs = s ? String(Number(s)) : '10';
        try { toastify(`Test expiry active: items expire in ${secs} second${secs === '1' ? '' : 's'}`, { variant: 'warning' }); } catch (e) { /* ignore */ }
      }
    } catch (e) {
      // ignore
    }

    this.#historyListEl?.addEventListener('click', this.#handleHistoryListClick);
    this.#emptyHistoryBtn?.addEventListener('click', this.#handleEmptyHistoryClick);

    this.#startCountdownTimer();
  }

  disconnectedCallback() {
    this.#historyListEl?.removeEventListener('click', this.#handleHistoryListClick);
    this.#emptyHistoryBtn?.removeEventListener('click', this.#handleEmptyHistoryClick);

    

    this.#stopCountdownTimer();
  }

  /**
   * Adds an item to the history.
   * If the item is already in history, it will not be added.
   *
   * @param {string} item - Item to add to history
   * @return {Promise<null|Error>} - Returns null if successful, or an error if there was an issue
   */
  async add(item) {
    if (!item) {
      return;
    }

    const errPayload = {
      type: 'add',
      message: 'Error adding barcode to history'
    };

    const [getHistoryError, history = []] = await getHistory();

    if (getHistoryError || !Array.isArray(history)) {
      this.#emitEvent('bs-history-error', errPayload);
      return getHistoryError;
    }

    // Normalize current history (strings -> objects)
    const normalized = (history || []).map(h =>
      typeof h === 'string'
        ? { value: h, addedAt: Date.now(), expiresAt: Date.now() + BSHistory.#getDefaultExpiryMs(), notified: false, preNotified: false }
        : { value: h.value ?? h.barcode ?? '', addedAt: h.addedAt ?? Date.now(), expiresAt: h.expiresAt ?? (h.addedAt ? h.addedAt + BSHistory.#getDefaultExpiryMs() : Date.now() + BSHistory.#getDefaultExpiryMs()), notified: Boolean(h.notified), preNotified: Boolean(h.preNotified) }
    );

    const value = typeof item === 'string' ? item : item.value;

    const existing = normalized.find(h => h.value === value);
    // If item already exists
    if (existing) {
      // If running in test mode (short expiry), refresh the existing item's expiry so tests can reuse same value
      try {
        const defaultExpiry = BSHistory.#getDefaultExpiryMs();
        if (defaultExpiry < BSHistory.#DEFAULT_EXPIRY_MS) {
          existing.expiresAt = Date.now() + defaultExpiry;
          existing.notified = false;
          existing.preNotified = false;
          const [setErr] = await setHistory(normalized);
          if (!setErr) {
            // Update UI countdown if present
            const li = this.#historyListEl?.querySelector(`li[data-value="${value}"]`);
            if (li) {
              const countdownEl = li.querySelector('.history-countdown');
              if (countdownEl) {
                countdownEl.dataset.expiresAt = String(existing.expiresAt);
                countdownEl.textContent = this.#formatRemaining(existing.expiresAt - Date.now());
              }
            }

            this.#emitEvent('bs-history-success', {
              type: 'add',
              message: 'Barcode expiry refreshed for testing'
            });
            // Run immediate countdown check to possibly trigger pre-notify quickly
            this.#updateCountdowns();
          }
          return null;
        }
      } catch (e) {
        // fallback to not updating existing item
        return;
      }

      // Not in test mode: don't add duplicate
      return;
    }

    const addedAt = Date.now();
    const newItem = {
      value,
      addedAt,
      expiresAt: addedAt + BSHistory.#getDefaultExpiryMs(),
      notified: false,
      preNotified: false
    };

    const data = [...normalized, newItem];
    const [setHistoryError] = await setHistory(data);

    if (setHistoryError) {
      log.error('Error setting history', setHistoryError);
      this.#emitEvent('bs-history-error', errPayload);
      return setHistoryError;
    }

    this.#historyListEl?.insertBefore(
      this.#createHistoryItemElement(newItem),
      this.#historyListEl.firstElementChild
    );

    this.#emitEvent('bs-history-success', {
      type: 'add',
      message: 'Barcode added to history'
    });

    // Update countdowns and check notifications immediately
    this.#updateCountdowns();

    return null;
  }

  /**
   * Removes an item from the history.
   *
   * @param {string} item - Item to remove from history
   * @return {Promise<null|Error>} - Returns null if successful, or an error if there was an issue
   */
  async remove(item) {
    if (!item) {
      return;
    }

    const errPayload = {
      type: 'remove',
      message: 'Error removing barcode from history'
    };

    // If Firebase is configured and user is authenticated, delete from Firestore
    if (isFirebaseConfigured() && isAuthenticated()) {
      const historyItem = this.#historyListEl?.querySelector(`li[data-value="${item}"]`);
      const firestoreId = historyItem?.dataset.firestoreId;
      
      if (firestoreId) {
        const { error } = await deleteScan(firestoreId);
        if (error) {
          log.error('Error deleting scan from Firestore:', error);
          // Continue to delete from local storage anyway
        }
      }
    }

    const [getHistoryError, history = []] = await getHistory();

    if (getHistoryError || !Array.isArray(history)) {
      this.#emitEvent('bs-history-error', errPayload);
      return getHistoryError;
    }

    // history may contain objects; filter by value
    const data = (history || []).filter(el => (typeof el === 'string' ? el !== item : el.value !== item));
    const [setHistoryError] = await setHistory(data);

    if (setHistoryError) {
      log.error('Error setting history', setHistoryError);
      this.#emitEvent('bs-history-error', errPayload);
      return setHistoryError;
    }

    const historyItem = this.#historyListEl?.querySelector(`li[data-value="${item}"]`);

    historyItem?.remove();

    this.#emitEvent('bs-history-success', {
      type: 'remove',
      message: 'Barcode removed from history'
    });

    // Update countdowns/UI
    this.#updateCountdowns();

    return null;
  }

  /**
   * Removes all items from the history.
   *
   * @return {Promise<null|Error>} - Returns null if successful, or an error if there was an issue
   */
  async empty() {
    const errPayload = {
      type: 'empty',
      message: 'Error emptying history'
    };

    // If Firebase is configured and user is authenticated, delete all from Firestore
    if (isFirebaseConfigured() && isAuthenticated()) {
      const { error, deletedCount } = await deleteAllUserScans();
      if (error) {
        log.error('Error deleting all scans from Firestore:', error);
        // Continue to delete from local storage anyway
      } else {
        log.info(`Deleted ${deletedCount} scans from Firestore`);
      }
    }

    const [setHistoryError] = await setHistory([]);

    if (setHistoryError) {
      log.error('Error setting history', setHistoryError);
      this.#emitEvent('bs-history-error', errPayload);
      return setHistoryError;
    }

    this.#historyListEl?.replaceChildren();

    this.#emitEvent('bs-history-success', {
      type: 'empty',
      message: 'History emptied successfully'
    });

    // ensure countdown timer sees empty list
    this.#updateCountdowns();

    return null;
  }

  

  /**
   * Renders the history list. If there are no items in history, it will show a message.
   *
   * @param {Array<string>} data - History data as an array of strings
   */
  #renderHistoryList(data) {
    if (!this.#historyListEl) {
      return;
    }

    this.#historyListEl.replaceChildren();
    const fragment = document.createDocumentFragment();
    [...data].reverse().forEach(item => fragment.appendChild(this.#createHistoryItemElement(item)));
    this.#historyListEl.appendChild(fragment);
  }

  /**
   * Creates a history item element.
   * If the item is a URL, it will be an anchor element, otherwise a span element.
   *
   * @param {string} item - The history item to create an element for
   * @returns {HTMLLIElement} The history item element
   */
  #createHistoryItemElement(item) {
    const li = document.createElement('li');

    // `item` is expected to be an object with { value, addedAt, expiresAt }
    const value = typeof item === 'string' ? item : item.value || '';
    const expiresAt = item?.expiresAt || Date.now() + BSHistory.#getDefaultExpiryMs();
    const firestoreId = item?.firestoreId || null;
    const title = item?.title || '';
    const brand = item?.brand || '';
    const description = item?.description || '';

    li.setAttribute('data-value', value);
    if (firestoreId) {
      li.setAttribute('data-firestore-id', firestoreId);
    }

    // Store product details for click event
    if (title) li.setAttribute('data-title', title);
    if (brand) li.setAttribute('data-brand', brand);
    if (description) li.setAttribute('data-description', description);

    // Make the item clickable to show details
    let historyItem;
    try {
      new URL(value);
      historyItem = document.createElement('a');
      historyItem.href = value;
      historyItem.setAttribute('target', '_blank');
      historyItem.setAttribute('rel', 'noreferrer noopener');
    } catch {
      historyItem = document.createElement('span');
      historyItem.style.cursor = title ? 'pointer' : 'default';
      
      // Add click event to show details
      if (title || brand || description) {
        historyItem.addEventListener('click', () => {
          const details = [];
          if (title) details.push(`Product: ${title}`);
          if (brand) details.push(`Brand: ${brand}`);
          if (description) details.push(`Details: ${description}`);
          details.push(`Barcode: ${value}`);
          
          alert(details.join('\n'));
        });
      }
    }

    // Show title if available, with barcode below
    if (title) {
      historyItem.innerHTML = `<strong>${title}</strong><br><small>${value}</small>`;
    } else {
      historyItem.textContent = value;
    }

    // countdown element
    const countdownEl = document.createElement('span');
    countdownEl.className = 'history-countdown';
    countdownEl.setAttribute('aria-live', 'polite');
    countdownEl.dataset.expiresAt = String(expiresAt);
    countdownEl.textContent = this.#formatRemaining(expiresAt - Date.now());

    li.appendChild(historyItem);
    li.appendChild(countdownEl);

    const actionsEl = document.createElement('div');
    actionsEl.className = 'actions';

    const copyEl = document.createElement('custom-clipboard-copy');
    const copyBtn = copyEl.shadowRoot?.querySelector('button');
    copyEl.setAttribute('only-icon', '');
    copyEl.setAttribute('value', value);
    copyBtn?.setAttribute('aria-label', `Copy to clipboard ${value}`);
    actionsEl.appendChild(copyEl);

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'delete-action';
    removeBtn.setAttribute('data-action', 'delete');
    removeBtn.setAttribute('aria-label', `Remove from history ${value}`);
    removeBtn.innerHTML = /* html */ `
      <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
      </svg>
    `;
    actionsEl.appendChild(removeBtn);

    li.appendChild(actionsEl);

    return li;
  }

  /**
   * Handles the click event on the history list.
   *
   * @param {Event} evt - The event object
   */
  #handleHistoryListClick = async evt => {
    const target = evt.target;

    if (target.closest('[data-action="delete"]')) {
      const value = target.closest('li').dataset.value;

      if (window.confirm(`Delete history item ${value}?`)) {
        this.remove(value);
      }
    }
  };

  // --- Countdown and notification helpers ---

  #countdownTimerId = null;

  #startCountdownTimer() {
    if (this.#countdownTimerId) return;
    // update every 1 second for accurate short-lived tests
    this.#countdownTimerId = setInterval(() => this.#updateCountdowns(), 1000);
    // run once immediately
    this.#updateCountdowns();
  }

  #stopCountdownTimer() {
    if (this.#countdownTimerId) {
      clearInterval(this.#countdownTimerId);
      this.#countdownTimerId = null;
    }
  }

  async #updateCountdowns() {
    try {
      const [, history = []] = await getHistory();
      const normalized = (history || []).map(h =>
        typeof h === 'string'
          ? { value: h, addedAt: Date.now(), expiresAt: Date.now() + BSHistory.#getDefaultExpiryMs(), notified: false, preNotified: false }
          : { value: h.value ?? h.barcode ?? '', addedAt: h.addedAt ?? Date.now(), expiresAt: h.expiresAt ?? (h.addedAt ? h.addedAt + BSHistory.#getDefaultExpiryMs() : Date.now() + BSHistory.#getDefaultExpiryMs()), notified: Boolean(h.notified), preNotified: Boolean(h.preNotified) }
      );

      const now = Date.now();

      // Update countdown UI
      const countdownEls = this.shadowRoot?.querySelectorAll('.history-countdown') || [];
      countdownEls.forEach(el => {
        const expiresAt = Number(el.dataset.expiresAt) || now;
        el.textContent = this.#formatRemaining(expiresAt - now);
      });
      // Check for items that are nearing expiry and those that reached expiry
      let updated = false;

      // Count items that will hit pre-notify threshold and haven't been pre-notified yet
      const nearExpiryCount = normalized.filter(h => h && ((h.expiresAt || 0) - now) > 0 && ((h.expiresAt || 0) - now) <= this.#PRE_NOTIFY_THRESHOLD_MS && !h.preNotified).length;

      for (const it of normalized) {
        if (!it) continue;
        const timeLeft = (it.expiresAt || 0) - now;

        // Pre-notify when small threshold is reached (only once)
        if (timeLeft > 0 && timeLeft <= this.#PRE_NOTIFY_THRESHOLD_MS && !it.preNotified) {
          this.#notifyItemWillExpire(it, timeLeft, nearExpiryCount);
          it.preNotified = true;
          updated = true;
        }

        // Notify when expired (only once)
        if (timeLeft <= 0 && !it.notified) {
          this.#notifyItemExpired(it);
          it.notified = true;
          updated = true;
        }
      }

      if (updated) {
        await setHistory(normalized);
      }
    } catch (err) {
      // non-fatal
    }
  }

  async #notifyItemWillExpire(item, timeLeft, nearExpiryCount = 1) {
    try {
      const title = 'Item will expire soon';
      let body = `${item.value} will expire in ${this.#formatRemaining(timeLeft)}.`;
      if (Number.isFinite(nearExpiryCount) && nearExpiryCount > 0) {
        if (nearExpiryCount === 1) {
          body += ' You have one more item that will expire soon; the next notification will be when it expires.';
        } else if (nearExpiryCount > 1) {
          body += ` You have ${nearExpiryCount} items that will expire soon.`;
        }
      }

      try { toastify(body, { variant: 'warning' }); } catch (e) { /* ignore */ }

      if ('Notification' in window) {
        if (Notification.permission === 'default') {
          await Notification.requestPermission();
        }

        if (Notification.permission === 'granted') {
          new Notification(title, { body });
        }
      }
    } catch (err) {
      // non-fatal
    }
  }

  #formatRemaining(ms) {
    if (ms <= 0) return 'Expired';
    const seconds = Math.floor(ms / 1000);
    const days = Math.floor(seconds / (24 * 3600));
    if (days > 0) return `${days} day${days === 1 ? '' : 's'} left`;
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    if (hours > 0) return `${hours} hour${hours === 1 ? '' : 's'} left`;
    const minutes = Math.floor((seconds % 3600) / 60);
    if (minutes > 0) return `${minutes} min left`;
    return 'Less than a minute';
  }

  async #notifyItemExpired(item) {
    try {
      const title = 'Item may have expired';
      const body = `${item.value} may have reached its expiry date.`;

      // In-app toast
      try { toastify(body, { variant: 'warning' }); } catch (e) { /* ignore */ }

      // Browser notification (request permission when needed)
      if ('Notification' in window) {
        if (Notification.permission === 'default') {
          await Notification.requestPermission();
        }

        if (Notification.permission === 'granted') {
          new Notification(title, { body });
        }
      }
    } catch (err) {
      // non-fatal
    }
  }

  /**
   * Handles the click event on the empty history button.
   */
  #handleEmptyHistoryClick = async () => {
    if (window.confirm('Empty history? This action cannot be undone.')) {
      this.empty();
    }
  };

  /**
   * Dispatches a custom event with the given name.
   *
   * @param {string} eventName - The name of the event to dispatch.
   * @param {Nullable<any>} detail - The detail object to include with the event.
   */
  #emitEvent(eventName, detail = null) {
    const options = { bubbles: true, composed: true, detail };
    const evt = new CustomEvent(eventName, options);

    this.dispatchEvent(evt);
  }

  static defineCustomElement(elementName = 'bs-history') {
    if (typeof window !== 'undefined' && !window.customElements.get(elementName)) {
      window.customElements.define(elementName, BSHistory);
    }
  }
}

BSHistory.defineCustomElement();

export { BSHistory };

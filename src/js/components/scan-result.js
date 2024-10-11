import { isWebShareSupported } from '@georapbox/web-share-element/dist/is-web-share-supported.js';
import { getSettings } from '../services/storage.js';
import { NO_BARCODE_DETECTED } from '../constants.js';

const styles = /* css */ `
  :host {
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

  .result {
    position: relative;
    width: 100%;
    border: 1px solid var(--focus);
    border-radius: 6px;
    margin: 1.5rem 0 0 0;
    padding: 1rem;
    background-color: var(--background-alt);
    text-align: center;
  }

  .result__item {
    word-wrap: break-word;
    word-break: break-word;
  }

  a.result__item {
    color: var(--links);
    text-decoration: none;
  }

  a.result__item:hover {
    text-decoration: underline;
  }

  .result__item--no-barcode {
    color: var(--error-color);
  }

  .result__actions {
    display: flex;
    align-items: center;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  .result web-share button,
  .result custom-clipboard-copy::part(button) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    margin: 0.75rem 0 0 0;
    padding: 0.25rem;
    background-color: transparent;
    border: 0;
    border-radius: var(--border-radius);
    color: inherit;
    line-height: 1;
    font-family: inherit;
    font-size: 0.9rem;
    cursor: pointer;
  }
`;

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>${styles}</style>

  <div class="result">
    <div class="result__actions">
      <custom-clipboard-copy></custom-clipboard-copy>

      <web-share>
        <button slot="button" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
          </svg>
          Share
        </button>
      </web-share>
    </div>
  </div>
`;

class ScanResult extends HTMLElement {
  constructor() {
    super();

    if (!this.shadowRoot) {
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  get value() {
    return this.getAttribute('value');
  }

  set value(value) {
    this.setAttribute('value', value);
  }

  static get observedAttributes() {
    return ['value'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'value' && oldValue !== newValue) {
      this.#handleValueChange(this.value);
    }
  }

  connectedCallback() {
    this.#upgradeProperty('value');

    if (!isWebShareSupported()) {
      const webShareEl = this.shadowRoot.querySelector('web-share');

      if (webShareEl) {
        webShareEl.hidden = true;
      }
    }
  }

  async #handleValueChange(value) {
    const baseEl = this.shadowRoot.querySelector('.result');
    const resultActionsEl = baseEl?.querySelector('.result__actions');
    const oldResultItem = baseEl?.querySelector('.result__item');
    let resultItem;

    if (oldResultItem) {
      oldResultItem.remove();
    }

    try {
      const [, settings] = await getSettings();

      new URL(value);
      resultItem = document.createElement('a');
      resultItem.href = value;
      window.requestAnimationFrame(() => resultItem.focus());

      if (!settings?.openWebPageSameTab) {
        resultItem.setAttribute('target', '_blank');
        resultItem.setAttribute('rel', 'noreferrer noopener');
      }

      if (settings?.openWebPage) {
        resultItem.click();
      }
    } catch {
      resultItem = document.createElement('span');
    }

    resultItem.className = 'result__item';
    resultItem.classList.toggle('result__item--no-barcode', value === NO_BARCODE_DETECTED);
    resultItem.textContent = value;

    baseEl?.insertBefore(resultItem, resultActionsEl);

    const isValidValue = value !== NO_BARCODE_DETECTED;
    const clipboarCopyEl = baseEl?.querySelector('custom-clipboard-copy');
    const webShareEl = baseEl?.querySelector('web-share');

    if (clipboarCopyEl && isValidValue) {
      clipboarCopyEl.setAttribute('value', value);
      clipboarCopyEl.hidden = false;
    } else {
      clipboarCopyEl.hidden = true;
      clipboarCopyEl.removeAttribute('value');
    }

    if (webShareEl && isWebShareSupported() && isValidValue) {
      webShareEl.setAttribute('share-text', value);
      webShareEl.hidden = false;
    } else {
      webShareEl.hidden = true;
      webShareEl.removeAttribute('share-text');
    }
  }

  /**
   * This is to safe guard against cases where, for instance, a framework may have added the element to the page and
   * set a value on one of its properties, but lazy loaded its definition. Without this guard, the upgraded element would
   * miss that property and the instance property would prevent the class property setter from ever being called.
   *
   * https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
   *
   * @param {string} prop - The property to upgrade.
   */
  #upgradeProperty(prop) {
    const instance = this;
    if (Object.prototype.hasOwnProperty.call(instance, prop)) {
      const value = instance[prop];
      delete instance[prop];
      instance[prop] = value;
    }
  }

  static defineCustomElement(elementName = 'scan-result') {
    if (typeof window !== 'undefined' && !window.customElements.get(elementName)) {
      window.customElements.define(elementName, ScanResult);
    }
  }
}

ScanResult.defineCustomElement();

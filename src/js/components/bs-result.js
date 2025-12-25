import { isWebShareSupported } from '@georapbox/web-share-element/dist/is-web-share-supported.js';
import { getSettings } from '../services/storage.js';
import { dateTimeFormatter } from '../utils/datetime-formatter.js';

const styles = /* css */ `
  :host {
    --color-flash: #ffff99;

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
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    position: relative;
    width: 100%;
    padding: 0.5rem;
  }

  .result__item {
    word-wrap: break-word;
    word-break: break-word;
    white-space: pre-line;
  }

  a.result__item {
    color: var(--links);
  }

  .result__datetime {
    font-size: 0.8rem;
    color: var(--text-muted);
    margin-block-start: 0.25rem;
  }

  .result__datetime:empty {
    display: none !important;
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

  .result custom-clipboard-copy::part(button--success) {
    color: var(--success-color);
  }

  .result custom-clipboard-copy::part(button--error) {
    color: var(--danger-color);
  }

  .flash {
    animation: flash 0.4s ease-out;
  }

  @keyframes flash {
    0% {
      background-color: #ffff99;
    }
    100% {
      background-color: transparent;
    }
  }
`;

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>${styles}</style>

  <div class="result" part="result">
    <div class="result__content">
      <div class="result__datetime"></div>
    </div>

    <div class="result__actions">
      <custom-clipboard-copy only-icon></custom-clipboard-copy>

      <web-share>
        <button slot="button" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
          </svg>
        </button>
      </web-share>
    </div>
  </div>
`;

class BSResult extends HTMLElement {
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

    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      const baseEl = this.shadowRoot.querySelector('.result');

      baseEl?.animate(
        [{ backgroundColor: 'var(--color-flash)' }, { backgroundColor: 'transparent' }],
        { duration: 400, easing: 'ease-out' }
      );
    }

    if (!isWebShareSupported()) {
      const webShareEl = this.shadowRoot.querySelector('web-share');

      if (webShareEl) {
        webShareEl.hidden = true;
      }
    }
  }

  async #handleValueChange(value) {
    const baseEl = this.shadowRoot.querySelector('.result');
    const resultContentEl = baseEl?.querySelector('.result__content');
    const resultDatetimeEl = baseEl?.querySelector('.result__datetime');
    const oldResultEl = baseEl?.querySelector('.result__item');
    let resultEl;

    if (oldResultEl) {
      oldResultEl?.remove();
    }

    try {
      const [, settings] = await getSettings();

      new URL(value);
      resultEl = document.createElement('a');
      resultEl.href = value;

      if (!settings?.openWebPageSameTab) {
        resultEl.setAttribute('target', '_blank');
        resultEl.setAttribute('rel', 'noreferrer noopener');
      }

      if (settings?.openWebPage) {
        resultEl.click();
      } else {
        window.requestAnimationFrame(() => resultEl.focus());
      }
    } catch {
      resultEl = document.createElement('span');
    }

    resultEl.className = 'result__item';
    resultEl.part = 'result__item';
    resultEl.textContent = value;

    resultDatetimeEl.textContent = dateTimeFormatter.format(new Date());
    resultContentEl?.insertBefore(resultEl, resultDatetimeEl);

    const copyEl = baseEl?.querySelector('custom-clipboard-copy');
    const shareEl = baseEl?.querySelector('web-share');

    if (copyEl) {
      const copyBtn = copyEl.shadowRoot?.querySelector('button');
      copyEl.setAttribute('value', value);
      copyBtn?.setAttribute('aria-label', `Copy to clipboard ${value}`);
      copyEl.hidden = false;
    }

    if (shareEl && isWebShareSupported()) {
      const shareBtn = shareEl.querySelector('button');
      shareEl.setAttribute('share-text', value);
      shareEl.hidden = false;
      shareBtn?.setAttribute('aria-label', `Share ${value}`);
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

  static defineCustomElement(elementName = 'bs-result') {
    if (typeof window !== 'undefined' && !window.customElements.get(elementName)) {
      window.customElements.define(elementName, BSResult);
    }
  }
}

BSResult.defineCustomElement();

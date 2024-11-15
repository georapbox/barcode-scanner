import { getFormats } from '../services/storage.js';

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

  .hint {
    margin-block: 0.5rem 0;
    color: var(--text-muted);
    text-wrap: pretty;
  }

  .form:empty {
    display: none !important;
  }

  .form {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(6.25rem, 1fr));
    column-gap: 0.75rem;
    row-gap: 0.375rem;
  }

  .form input,
  .form label {
    cursor: pointer;
  }
`;

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>${styles}</style>
  <form part="form" class="form"></form>
  <p class="hint"><small>If none is checked, all formats will be supported.</small></p>
`;

class BarcodeFormats extends HTMLElement {
  #formEl = null;

  constructor() {
    super();

    if (!this.shadowRoot) {
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  get formats() {
    return this.getAttribute('formats') || '';
  }

  set formats(value) {
    this.setAttribute('formats', value);
  }

  static get observedAttributes() {
    return ['formats'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'formats' && oldValue !== newValue) {
      this.#render();
    }
  }

  connectedCallback() {
    this.#upgradeProperty('formats');
    this.#formEl = this.shadowRoot.querySelector('form');
    this.#formEl?.addEventListener('change', this.#handleFormChange);
  }

  disconnectedCallback() {
    this.#formEl?.removeEventListener('change', this.#handleFormChange);
  }

  #handleFormChange = evt => {
    const formData = new FormData(evt.currentTarget);
    const formats = formData.getAll('formats');
    console.log('formats', formats);

    this.dispatchEvent(
      new CustomEvent('barcode-formats-change', {
        bubbles: true,
        composed: true,
        detail: { formats }
      })
    );
  };

  async #render() {
    if (!this.#formEl) {
      return;
    }

    this.#formEl.replaceChildren();

    const allFormats = this.formats.split(',').filter(Boolean);
    const [, formatsFromStorage] = await getFormats();

    allFormats.forEach(format => {
      const label = document.createElement('label');
      const input = document.createElement('input');

      label.part = 'label';
      input.type = 'checkbox';
      input.name = 'formats';
      input.part = 'checkbox';
      input.value = format;
      input.checked = formatsFromStorage != null ? formatsFromStorage.includes(format) : true;
      label.appendChild(input);
      label.appendChild(document.createTextNode(format));
      this.#formEl.appendChild(label);
    });
  }

  /**
   * https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
   * This is to safe guard against cases where, for instance, a framework may have added the element to the page and set a
   * value on one of its properties, but lazy loaded its definition. Without this guard, the upgraded element would miss that
   * property and the instance property would prevent the class property setter from ever being called.
   */
  #upgradeProperty(prop) {
    const instance = this;
    if (Object.prototype.hasOwnProperty.call(instance, prop)) {
      const value = instance[prop];
      delete instance[prop];
      instance[prop] = value;
    }
  }

  static defineCustomElement(elementName = 'barcode-formats') {
    if (typeof window !== 'undefined' && !window.customElements.get(elementName)) {
      window.customElements.define(elementName, BarcodeFormats);
    }
  }
}

BarcodeFormats.defineCustomElement();

export { BarcodeFormats };

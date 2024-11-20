import { getSettings } from '../services/storage.js';

class BSSettings extends HTMLElement {
  #formatsWrapperEl = null;
  #formEl = null;
  #supportedFormats = [];
  #settings;

  constructor() {
    super();
  }

  get supportedFormats() {
    return this.#supportedFormats;
  }

  set supportedFormats(value) {
    this.#supportedFormats = value;
    this.#renderFormats();
  }

  async connectedCallback() {
    this.#upgradeProperty('supportedFormats');

    this.#formatsWrapperEl = this.querySelector('#formatsList');
    this.#formEl = this.querySelector('form');

    const [, settings] = await getSettings();
    this.#settings = settings ?? {};

    this.#formEl?.querySelectorAll(`[name="general-settings"]`).forEach(input => {
      input.checked = this.#settings[input.value];
    });
  }

  #renderFormats() {
    if (!this.#formatsWrapperEl) {
      return;
    }

    const formatsFromStorage = this.#settings?.formats;

    this.#formatsWrapperEl.replaceChildren();

    this.supportedFormats.forEach(format => {
      const li = document.createElement('li');
      const label = document.createElement('label');
      const input = document.createElement('input');

      input.type = 'checkbox';
      input.name = 'formats-settings';
      input.value = format;
      input.checked = formatsFromStorage != null ? formatsFromStorage.includes(format) : true;
      label.appendChild(input);
      label.appendChild(document.createTextNode(format));
      li.appendChild(label);
      this.#formatsWrapperEl.appendChild(li);
    });
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

  static defineCustomElement(elementName = 'bs-settings') {
    if (typeof window !== 'undefined' && !window.customElements.get(elementName)) {
      window.customElements.define(elementName, BSSettings);
    }
  }
}

BSSettings.defineCustomElement();

export { BSSettings };

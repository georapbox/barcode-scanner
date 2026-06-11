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
   * Re-applies a property value that may have been set on the element
   * instance before the custom element was defined.
   *
   * This handles cases where a framework sets a property on the element
   * before its definition is loaded. Without this step, the own property
   * on the instance would shadow the class setter and prevent it from
   * running after upgrade.
   *
   * @see https://web.dev/articles/custom-elements-best-practices#make_properties_lazy
   *
   * @param {string} prop - The property name to upgrade.
   */
  #upgradeProperty(prop) {
    const instance = this;

    if (Object.prototype.hasOwnProperty.call(instance, prop)) {
      const value = instance[prop];
      delete instance[prop];
      instance[prop] = value;
    }
  }

  /**
   * Defines the custom element by registering it with the browser's
   * CustomElementRegistry if it hasn't been defined already.
   *
   * @param {string} [tagName='bs-settings'] - The tag name to use for the custom element.
   */
  static define(tagName = 'bs-settings') {
    if (typeof window === 'undefined' || window.customElements.get(tagName)) {
      return;
    }
    window.customElements.define(tagName, BSSettings);
  }
}

export { BSSettings };

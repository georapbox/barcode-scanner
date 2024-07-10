import { ClipboardCopy } from '@georapbox/clipboard-copy-element/dist/clipboard-copy.js';

/**
 * Extends the `ClipboardCopy` element to override the default `copy` and `success` slots,
 * in order to avoid repetition of the same markup throughout the application.
 * It also adds aditional properties and attributes, specific to the application.
 *
 * @class CustomClipboardCopy
 * @extends ClipboardCopy
 */
class CustomClipboardCopy extends ClipboardCopy {
  constructor() {
    super();

    const copySlot = this.shadowRoot.querySelector('slot[name="copy"]');
    const successSlot = this.shadowRoot.querySelector('slot[name="success"]');

    copySlot.innerHTML = /* html */ `
      <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
      </svg>
      <span class="text">Copy</span>
    `;

    successSlot.innerHTML = /* html */ `
      <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
      </svg>
      <span class="text">Copied!</span>
    `;
  }

  static get observedAttributes() {
    return [...super.observedAttributes, 'only-icon'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);

    if (name === 'only-icon' && oldValue !== newValue) {
      const copySlot = this.shadowRoot.querySelector('slot[name="copy"]');
      const successSlot = this.shadowRoot.querySelector('slot[name="success"]');

      const copyText = copySlot.querySelector('.text');
      const successText = successSlot.querySelector('.text');

      if (copyText) {
        copyText.hidden = this.onlyIcon;
      }

      if (successText) {
        successText.hidden = this.onlyIcon;
      }
    }
  }

  get onlyIcon() {
    return this.hasAttribute('only-icon');
  }

  set onlyIcon(value) {
    if (value) {
      this.setAttribute('only-icon', '');
    } else {
      this.removeAttribute('only-icon');
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.#upgradeProperty('onlyIcon');

    if (!this.hasAttribute('feedback-duration')) {
      this.setAttribute('feedback-duration', '1500');
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  /**
   * https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
   * This is to safe guard against cases where, for instance, a framework may have added the element to the page and set a
   * value on one of its properties, but lazy loaded its definition. Without this guard, the upgraded element would miss that
   * property and the instance property would prevent the class property setter from ever being called.
   */
  #upgradeProperty(prop) {
    if (Object.prototype.hasOwnProperty.call(this, prop)) {
      const value = this[prop];
      delete this[prop];
      this[prop] = value;
    }
  }

  static defineCustomElement(elementName = 'custom-clipboard-copy') {
    if (typeof window !== 'undefined' && !window.customElements.get(elementName)) {
      window.customElements.define(elementName, CustomClipboardCopy);
    }
  }
}

CustomClipboardCopy.defineCustomElement();

// export { CustomClipboardCopy };

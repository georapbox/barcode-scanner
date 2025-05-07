const toastStack = Object.assign(document.createElement('div'), {
  className: 'toast-stack',
  style: `
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 28rem;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
  `
});

const styles = /* css */ `
  :host {
    box-sizing: border-box;

    --alert-bg-color: #ffffff;
    --alert-info-color: #0584c7;
    --alert-success-color: #16a34a;
    --alert-neutral-color: #52525b;
    --alert-warning-color: #d87708;
    --alert-danger-color: #dc2626;
  }

  @media (prefers-color-scheme: dark) {
    :host {
      --alert-bg-color: var(--background-alt);
      --alert-info-color: #27bbfc;
      --alert-success-color: #3ae075;
      --alert-neutral-color: #8e8e9a;
      --alert-warning-color: #ffbd11;
      --alert-danger-color: #fe5c5c;
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

  :host(:not([open])) {
    display: none;
  }

  .base {
    position: relative;
    padding: 1rem;
    border: 1px solid var(--border);
    border-top: 0;
    border-radius: 0.25rem;
    background-color: var(--alert-bg-color);
    margin-block-end: 1rem;
  }

  .base::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--alert-neutral-color);
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  :host([variant='info']) .base::after {
    background-color: var(--alert-info-color);
  }

  :host([variant='success']) .base::after {
    background-color: var(--alert-success-color);
  }

  :host([variant='neutral']) .base::after {
    background-color: var(--alert-neutral-color);
  }

  :host([variant='warning']) .base::after {
    background-color: var(--alert-warning-color);
  }

  :host([variant='danger']) .base::after {
    background-color: var(--alert-danger-color);
  }

  .message {
    padding-inline-end: 3rem;
  }

  .close-button {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    height: 100%;
    padding-inline: 1rem;
    line-height: 0;
    background: transparent;
    border: none;
    color: inherit;
    cursor: pointer;
  }

  :host(:not([closable])) .close-button {
    display: none;
  }
`;

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>${styles}</style>
  <div class="base" part="base" role="alert">
    <div class="message" part="message" aria-live="polite">
      <slot></slot>
    </div>
    <button type="button" class="close-button" part="close-button" aria-label="Close">
      <slot name="close-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.375em" height="1.375em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg>
      </slot>
    </button>
  </div>
`;

class AlertElement extends HTMLElement {
  #closeBtn = null;
  #autoHideTimeout = null;

  constructor() {
    super();

    if (!this.shadowRoot) {
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  static get observedAttributes() {
    return ['open', 'duration'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'open' && oldValue !== newValue) {
      if (this.open) {
        this.show();

        this.dispatchEvent(
          new Event('alert-show', {
            bubbles: true,
            composed: true
          })
        );

        this.#restartAutoHide();
      } else {
        this.hide();
        clearTimeout(this.#autoHideTimeout);

        this.dispatchEvent(
          new Event('alert-hide', {
            bubbles: true,
            composed: true
          })
        );
      }
    }

    if (name === 'duration' && oldValue !== newValue) {
      this.#restartAutoHide();
    }
  }

  get closable() {
    return this.hasAttribute('closable');
  }

  set closable(value) {
    this.toggleAttribute('closable', !!value);
  }

  get open() {
    return this.hasAttribute('open');
  }

  set open(value) {
    this.toggleAttribute('open', !!value);
  }

  get duration() {
    return Number(this.getAttribute('duration')) || Infinity;
  }

  set duration(value) {
    this.setAttribute('duration', value);
  }

  get variant() {
    return this.getAttribute('variant') || '';
  }

  set variant(value) {
    this.setAttribute('variant', value);
  }

  connectedCallback() {
    this.#upgradeProperty('closable');
    this.#upgradeProperty('open');
    this.#upgradeProperty('duration');
    this.#upgradeProperty('variant');

    this.#closeBtn = this.shadowRoot.querySelector('button');
    this.#closeBtn.addEventListener('click', this.#handleCloseBtnClick);
  }

  disconnectedCallback() {
    clearTimeout(this.#autoHideTimeout);
    this.#closeBtn.removeEventListener('click', this.#handleCloseBtnClick);
  }

  #restartAutoHide() {
    clearTimeout(this.#autoHideTimeout);
    if (this.open && this.duration < Infinity) {
      this.#autoHideTimeout = window.setTimeout(() => this.hide(), this.duration);
    }
  }

  #handleCloseBtnClick = () => {
    this.hide();
  };

  async show() {
    if (this.open) {
      return;
    }

    this.open = true;
  }

  async hide() {
    if (!this.open) {
      return;
    }

    this.open = false;
  }

  async toast() {
    return new Promise(resolve => {
      if (toastStack.parentElement === null) {
        document.body.append(toastStack);
      }

      toastStack.appendChild(this);
      this.show();

      this.addEventListener(
        'alert-hide',
        () => {
          toastStack.removeChild(this);
          resolve();

          if (toastStack.querySelector('alert-element') === null) {
            toastStack.remove();
          }
        },
        {
          once: true
        }
      );
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

  static defineCustomElement(elementName = 'alert-element') {
    if (typeof window !== 'undefined' && !window.customElements.get(elementName)) {
      window.customElements.define(elementName, AlertElement);
    }
  }
}

AlertElement.defineCustomElement();

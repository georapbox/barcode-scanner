const toastStack = Object.assign(document.createElement('div'), {
  className: 'alert-toast-stack',
  style: `
    position: fixed;
    top: 0;
    inset-inline-start: 0;
    z-index: 1000;
    width: 28rem;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
    scroll-behavior: smooth;
    scrollbar-width: none;
  `
});

const styles = /* css */ `
  :host {
    display: contents;
    box-sizing: border-box;

    --alert-close-width: 1.375em;
    --alert-close-height: 1.375em;
    --alert-fg-color: var(--text-main);
    --alert-bg-color: #ffffff;
    --alert-border-radius: 0.25rem;
    --alert-border-color: var(--border);
    --alert-close-focus-color: var(--accent);
    --alert-info-color: var(--info-color);
    --alert-success-color: var(--success-color);
    --alert-neutral-color: var(--neutral-color);
    --alert-warning-color: var(--warning-color);
    --alert-danger-color: var(--danger-color);
  }

  @media (prefers-color-scheme: dark) {
    :host {
      --alert-bg-color: var(--background-alt);
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
    display: none !important;
  }

  .alert {
    display: flex;
    align-items: center;
    margin: inherit;
    border: 1px solid var(--alert-border-color);
    border-top-width: 3px;
    border-radius: var(--alert-border-radius);
    background-color: var(--alert-bg-color);
  }

  :host([variant='info']) .alert {
    border-top-color: var(--alert-info-color);
  }

  :host([variant='success']) .alert {
    border-top-color: var(--alert-success-color);
  }

  :host([variant='neutral']) .alert {
    border-top-color: var(--alert-neutral-color);
  }

  :host([variant='warning']) .alert {
    border-top-color: var(--alert-warning-color);
  }

  :host([variant='danger']) .alert {
    border-top-color: var(--alert-danger-color);
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: inherit;
  }

  .alert--with-icon .alert__icon {
    margin-inline-start: 1rem;
  }

  slot[name='icon'] > svg {
    display: block;
    margin-inline-start: 3rem;
  }

  :host([variant='info']) .alert__icon {
    color: var(--alert-info-color);
  }

  :host([variant='success']) .alert__icon {
    color: var(--alert-success-color);
  }

  :host([variant='neutral']) .alert__icon {
    color: var(--alert-neutral-color);
  }

  :host([variant='warning']) .alert__icon {
    color: var(--alert-warning-color);
  }

  :host([variant='danger']) .alert__icon {
    color: var(--alert-danger-color);
  }

  .alert__message {
    flex: 1 1 auto;
    padding: 1rem;
    overflow: hidden;
    color: var(--alert-fg-color);
  }

  .alert__close-button {
    display: flex;
    align-items: center;
    margin-inline-end:  1rem;
    padding: 0.5rem;
    border: none;
    line-height: 0;
    background: transparent;
    color: var(--alert-fg-color);
    font-size: inherit;
    cursor: pointer;
  }

  .alert__close-button:focus-visible {
    outline-color: var(---alert-close-focus-color);
  }

  :host(:not([closable])) .alert__close-button {
    display: none;
  }
`;

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>${styles}</style>
  <div class="alert" part="base" role="alert">
    <div class="alert__icon" part="icon">
      <slot name="icon"></slot>
    </div>
    <div class="alert__message" part="message" aria-live="polite">
      <slot></slot>
    </div>
    <button type="button" class="alert__close-button" part="close-button" aria-label="Close">
      <slot name="close">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg>
      </slot>
    </button>
  </div>
`;

class AlertElement extends HTMLElement {
  #baseEl = null;
  #closeBtn = null;
  #iconSlot = null;
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
        this.#pauseAutoHide();

        this.dispatchEvent(
          new Event('alert-element-hide', {
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

    this.#baseEl = this.shadowRoot.querySelector('.alert');
    this.#iconSlot = this.shadowRoot.querySelector('slot[name="icon"]');
    this.#closeBtn = this.shadowRoot.querySelector('button');

    this.#closeBtn.addEventListener('click', this.#handleCloseBtnClick);
    this.#iconSlot.addEventListener('slotchange', this.#handleIconSlotChange);
    this.addEventListener('mouseenter', this.#handleMouseEnter);
    this.addEventListener('mouseleave', this.#handleMouseLeave);
  }

  disconnectedCallback() {
    this.#pauseAutoHide();
    this.#iconSlot.removeEventListener('slotchange', this.#handleIconSlotChange);
    this.#closeBtn.removeEventListener('click', this.#handleCloseBtnClick);
    this.removeEventListener('mouseenter', this.#handleMouseEnter);
    this.removeEventListener('mouseleave', this.#handleMouseLeave);
  }

  #pauseAutoHide() {
    clearTimeout(this.#autoHideTimeout);
  }

  #restartAutoHide() {
    this.#pauseAutoHide();
    if (this.open && this.duration < Infinity) {
      this.#autoHideTimeout = window.setTimeout(() => this.hide(), this.duration);
    }
  }

  #handleCloseBtnClick = () => {
    this.hide();
  };

  #handleMouseEnter = () => {
    this.#pauseAutoHide();
  };

  #handleMouseLeave = () => {
    this.#restartAutoHide();
  };

  #handleIconSlotChange = () => {
    const hasContent = this.#iconSlot?.assignedElements()?.length > 0;
    this.#baseEl?.classList.toggle('alert--with-icon', !!hasContent);
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
      toastStack.scrollTop = toastStack.scrollHeight;

      this.addEventListener(
        'alert-element-hide',
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

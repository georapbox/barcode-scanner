const ACCEPTED_MIME_TYPES = [
  'image/jpg',
  'image/jpeg',
  'image/png',
  'image/apng',
  'image/gif',
  'image/webp',
  'image/avif'
];

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

  .dropzone {
    --dropzone-focus-box-shadow: inset 0 0 0 2px var(--focus);
    --dropzone-transition-duration: var(--animation-duration);
    --dropzone-border-color: var(--border);
    --dropzone-border-color-dragover: var(--accent);
    --dropzone-border-color-hover: var(--accent);
    --dropzone-background-color: var(--dropzone-background);
    --dropzone-background-color-dragover: var(--dropzone-background-dragover);
    --dropzone-background-color-hover: var(--dropzone-background-hover);
    --dropzone-body-color: var(--text-main);
  }

  .dropzone::part(dropzone) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    min-height: 17.625rem;
    border-radius: var(--border-radius);
  }

  .dropzone-preview {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .dropzone-preview__image-wrapper {
    max-width: 200px;
    margin: 0 auto;
  }

  .dropzone-preview__image-wrapper img {
    max-width: 100%;
    height: auto;
  }

  .dropzone-preview__file-name {
    font-size: 0.9rem;
    color: var(--text-main);
  }

  .dropzone-instructions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
  }
`;

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>${styles}</style>

  <files-dropzone id="dropzone" class="dropzone">
    <span class="dropzone-instructions">
      <svg width="3.125em" height="3.125em" viewBox="0 0 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-850.000000, -2681.000000)">
            <g transform="translate(100.000000, 2626.000000)">
              <g transform="translate(748.000000, 54.000000)">
                <g>
                  <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                  <path d="M10.21,16.83 L12.96,13.29 L16.5,18 L5.5,18 L8.25,14.47 L10.21,16.83 Z M20,4 L23,4 L23,6 L20,6 L20,8.99 L18,8.99 L18,6 L15,6 L15,4 L18,4 L18,1 L20,1 L20,4 Z M18,20 L18,10 L20,10 L20,20 C20,21.1 19.1,22 18,22 L4,22 C2.9,22 2,21.1 2,20 L2,6 C2,4.9 2.9,4 4,4 L14,4 L14,6 L4,6 L4,20 L18,20 Z" fill="currentColor"></path>
                  <path d="M16.5,18 L5.5,18 L8.25,14.47 L10.21,16.83 L12.96,13.29 L16.5,18 Z M17,7 L14,7 L14,6 L4,6 L4,20 L18,20 L18,10 L17,10 L17,7 Z"></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>

      Click or drop an image to scan
    </span>
  </files-dropzone>
`;

class FileScanner extends HTMLElement {
  #dropzoneEl = null;
  #barcodeReader = null;

  constructor() {
    super();

    if (!this.shadowRoot) {
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  get barcodeReader() {
    return this.#barcodeReader;
  }

  set barcodeReader(reader) {
    this.#barcodeReader = reader;
  }

  connectedCallback() {
    this.#upgradeProperty('barcodeReader');

    this.#dropzoneEl = this.shadowRoot?.getElementById('dropzone');

    this.#dropzoneEl.accept = ACCEPTED_MIME_TYPES.join(',');

    this.#dropzoneEl.addEventListener('files-dropzone-drop', this.#handleFileDrop);
  }

  disconnectedCallback() {
    this.#dropzoneEl.removeEventListener('files-dropzone-drop', this.#handleFileDrop);
  }

  /**
   * Handles the selection of a file.
   * It is responsible for displaying the selected file in the dropzone.
   *
   * @param {File} file - The selected file.
   */
  #handleFileSelect = async file => {
    if (!file) {
      return;
    }

    const image = new Image();
    const reader = new FileReader();

    reader.onload = evt => {
      const data = evt.target.result;

      image.onload = async () => {
        try {
          const barcode = await this.barcodeReader.detect(image);
          const barcodeValue = barcode?.rawValue ?? '';

          if (!barcodeValue) {
            throw new Error('No barcode detected');
          }

          this.#emitEvent('barcode-detect-success', { barcodeValue, source: 'file-scanner' });
        } catch (error) {
          this.#emitEvent('barcode-detect-error', { error, source: 'file-scanner' });
        }
      };

      image.src = data;
      image.alt = 'Image preview';

      this.#dropzoneEl.replaceChildren();

      const preview = document.createElement('div');
      preview.className = 'dropzone-preview';

      const imageWrapper = document.createElement('div');
      imageWrapper.className = 'dropzone-preview__image-wrapper';

      const fileNameWrapper = document.createElement('div');
      fileNameWrapper.className = 'dropzone-preview__file-name';
      fileNameWrapper.textContent = file.name;

      imageWrapper.appendChild(image);
      preview.appendChild(imageWrapper);
      preview.appendChild(fileNameWrapper);
      this.#dropzoneEl.prepend(preview);
    };

    reader.readAsDataURL(file);
  };

  /**
   * Handles the drop event on the dropzone.
   *
   * @param {CustomEvent} evt - The event object.
   */
  #handleFileDrop = evt => {
    const file = evt.detail.acceptedFiles[0];
    this.#handleFileSelect(file);
  };

  /**
   * Dispatches a custom event with the given name.
   *
   * @param {string} eventName - The name of the event to dispatch.
   * @param {any} detail - The detail object to include with the event.
   */
  #emitEvent(eventName, detail = null) {
    const options = { bubbles: true, composed: true, detail };
    const evt = new CustomEvent(eventName, options);
    this.dispatchEvent(evt);
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
   * @param {string} [tagName='file-scanner'] - The tag name to use for the custom element.
   */
  static define(tagName = 'file-scanner') {
    if (typeof window === 'undefined' || window.customElements.get(tagName)) {
      return;
    }
    window.customElements.define(tagName, FileScanner);
  }
}

export { FileScanner };

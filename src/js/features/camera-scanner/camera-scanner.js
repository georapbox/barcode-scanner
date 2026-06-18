import { VideoCapture } from './video-capture.js';
import { toastify } from '../../shared/feedback/toastify.js';
import { toggleTorchButtonStatus } from './toggle-torch-button-status.js';
import { log } from '../../shared/utils/log.js';

VideoCapture.define();

const SCAN_RATE_LIMIT = 1000;

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

  button {
    color: var(--text-main);
    font-family: inherit;
    font-size: inherit;
    padding: 0.625rem;
    border: none;
    border-radius: var(--border-radius);
    outline-color: var(--accent);
  }

  button:not(:disabled) {
    cursor: pointer;
  }

  button,
  select {
    outline-color: var(--accent);
  }

  .camera-select {
    padding-block: 0.75rem;
    padding-inline: 0.75rem 2.25rem;
    border: 1px solid var(--border);
    border-radius: var(--border-radius);
    background: var(--background-input) var(--select-arrow) calc(100% - 0.75rem) 50% / 0.75rem no-repeat;
    color: var(--form-text);
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
  }

  :dir(rtl) .camera-select {
    background-position: calc(0.75rem) 50%;
  }

  .camera-select:disabled {
    cursor: not-allowed;
  }

  .scanner-container {
    position: relative;
    max-width: var(--container-max-width);
    margin: 0 auto;
  }

  .scanner-container:has(video-capture[loading]) .scan-frame {
    display: none;
  }

  .scanner-container:has(video-capture[loading]) .loading-spinner {
    display: block;
  }

  .scan-frame {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.9);
    pointer-events: none;
  }

  .scan-frame svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .loading-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
  }

  video-capture {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    overflow: hidden;
    border: var(--capture-border-width) solid var(--border);
    border-radius: var(--border-radius);
    background-color: #000000;
  }

  video-capture[loading]::part(video) {
    aspect-ratio: 16/9;
  }

  video-capture::part(video) {
    width: 100%;
    background-color: #000000;
  }

  video-capture [slot='actions'] {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 0.375rem;
    padding: 0.375rem;
  }

  video-capture[loading] [slot='actions'] {
    display: none;
  }

  .camera-select {
    width: 100%;
    padding-block: 0.5rem;
    border-radius: calc(var(--border-radius) / 2);
    background-color: var(--camera-actions-background);
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform: capitalize;
  }

  .zoom-controls {
    display: flex;
  }

  .torch-button,
  .zoom-controls button,
  .zoom-controls label {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding-block: 0.5rem;
    border: none;
    border-radius: 0;
    background-color: var(--camera-actions-background);
    backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    color: var(--text-main);
  }

  .torch-button {
    border: 1px solid var(--border);
    border-radius: calc(var(--border-radius) / 2);
  }

  .zoom-controls button {
    border: 1px solid var(--border);
  }

  .zoom-controls button[data-action='zoom-in'] {
    border-start-end-radius: calc(var(--border-radius) / 2);
    border-end-end-radius: calc(var(--border-radius) / 2);
    border-inline-start: none;
  }

  .zoom-controls button[data-action='zoom-out'] {
    border-start-start-radius: calc(var(--border-radius) / 2);
    border-end-start-radius: calc(var(--border-radius) / 2);
    border-inline-end: none;
  }

  .zoom-controls label {
    min-width: 2rem;
    border-block: 1px solid var(--border);
    border-inline: none;
    overflow: hidden;
    font-size: 0.9rem;
  }

  .play-video-button {
    position: absolute;
    inset: var(--capture-border-width);
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.7);
    color: #ffffff;
  }

  .play-video-button svg {
    font-size: 3.5rem;
  }

  @media (min-width: 37.5rem) {
    video-capture {
      max-width: var(--container-max-width);
    }
  }
`;

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>${styles}</style>

  <div class="scanner-container">
    <resize-observer>
      <video-capture auto-play id="video-capture">
        <div slot="actions">
          <button type="button" class="torch-button" id="torchButton" aria-label="Turn on flash" hidden>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1.25em" height="1.25em" aria-hidden="true">
              <path d="M315.27 33L96 304h128l-31.51 173.23a2.36 2.36 0 002.33 2.77h0a2.36 2.36 0 001.89-.95L416 208H288l31.66-173.25a2.45 2.45 0 00-2.44-2.75h0a2.42 2.42 0 00-1.95 1z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
              <!-- torch disabled -->
              <path d="M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM294.34 84.28l-22.08 120.84a16 16 0 006.17 15.71 16.49 16.49 0 009.93 3.17h94.12l-38.37 47.42a4 4 0 00.28 5.34l17.07 17.07a4 4 0 005.94-.31l60.8-75.16a16.37 16.37 0 003.3-14.36 16 16 0 00-15.5-12H307.19L335.4 37.63c.05-.3.1-.59.13-.89A18.45 18.45 0 00302.73 23l-92.58 114.46a4 4 0 00.28 5.35l17.07 17.06a4 4 0 005.94-.31zM217.78 427.57l22-120.71a16 16 0 00-6.19-15.7 16.54 16.54 0 00-9.92-3.16h-94.1l38.36-47.42a4 4 0 00-.28-5.34l-17.07-17.07a4 4 0 00-5.93.31L83.8 293.64A16.37 16.37 0 0080.5 308 16 16 0 0096 320h108.83l-28.09 154.36v.11a18.37 18.37 0 0032.5 14.53l92.61-114.46a4 4 0 00-.28-5.35l-17.07-17.06a4 4 0 00-5.94.31z" fill="currentColor" style="display: none;"/>
              <!-- torch enabled -->
            </svg>
          </button>

          <select id="cameraSelect" class="camera-select" aria-label="Select camera" hidden>
            <option value="" disabled selected>--Select Camera--</option>
          </select>

          <div class="zoom-controls" id="zoomControls" hidden>
            <button type="button" aria-label="Zoom out" data-action="zoom-out">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
                <path fill-rule="evenodd" d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </button>

            <label id="zoomLevel"></label>

            <button type="button" aria-label="Zoom in" data-action="zoom-in">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
                <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </button>
          </div>
        </div>
      </video-capture>
    </resize-observer>

    <div class="loading-spinner">
      <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
        <path opacity="0.2" fill="white" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
        <path fill="white" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z">
          <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite"/>
        </path>
      </svg>
    </div>

    <button id="playVideoButton" class="play-video-button" aria-label="Start camera preview" hidden>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
      </svg>
    </button>

    <div id="scanFrame" class="scan-frame" hidden>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M336 448h56a56 56 0 0056-56v-56M448 176v-56a56 56 0 00-56-56h-56M176 448h-56a56 56 0 01-56-56v-56M64 176v-56a56 56 0 0156-56h56" fill="none" stroke="var(--scan-frame-color)" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/>
      </svg>
    </div>
  </div>
`;

class CameraScanner extends HTMLElement {
  #videoCaptureEl = null;
  #playVideoButton = null;
  #torchButton = null;
  #scanFrameEl = null;
  #cameraSelect = null;
  #videoCaptureVideoEl = null;

  #barcodeReader = null;
  #scanTimeoutId = null;
  #shouldScan = true;

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

    this.#videoCaptureEl = this.shadowRoot?.getElementById('video-capture');
    this.#playVideoButton = this.shadowRoot?.getElementById('playVideoButton');
    this.#torchButton = this.shadowRoot?.getElementById('torchButton');
    this.resizeObserverEl = this.shadowRoot?.querySelector('resize-observer');
    this.#scanFrameEl = this.shadowRoot?.getElementById('scanFrame');
    this.#cameraSelect = this.shadowRoot?.getElementById('cameraSelect');
    this.#videoCaptureVideoEl = this.#videoCaptureEl.shadowRoot?.querySelector('video');

    this.addEventListener(
      'camera-scanner-visibility-change',
      this.#handleCameraScannerVisibilityChange
    );
    this.#playVideoButton.addEventListener('click', this.#handlePlayVideo);
    this.resizeObserverEl.addEventListener(
      'resize-observer:resize',
      this.#handleVideoCaptureResize
    );
    this.#videoCaptureEl.addEventListener('video-capture-play', this.#handleVideoCapturePlay, {
      once: true
    });
    this.#videoCaptureEl.addEventListener('video-capture-error', this.#handleVideoCaptureError, {
      once: true
    });
  }

  disconnectedCallback() {
    this.removeEventListener(
      'camera-scanner-visibility-change',
      this.#handleCameraScannerVisibilityChange
    );
    this.#playVideoButton.removeEventListener('click', this.#handlePlayVideo);
    this.resizeObserverEl.removeEventListener(
      'resize-observer:resize',
      this.#handleVideoCaptureResize
    );
    this.#videoCaptureEl.removeEventListener('video-capture-play', this.#handleVideoCapturePlay, {
      once: true
    });
    this.#videoCaptureEl.removeEventListener('video-capture-error', this.#handleVideoCaptureError, {
      once: true
    });
  }

  /**
   * Starts the scanning process by setting the shouldScan flag to true and calling
   * the scan function if it's not already scanning. This function is used to
   * resume scanning after it has been stopped.
   */
  #startScanning() {
    this.#shouldScan = true;

    if (this.#scanTimeoutId === null) {
      this.#scan();
    }
  }

  /**
   * Stops the scanning process by setting the shouldScan flag to false and clearing
   * any pending scan timeouts. This function is used to pause scanning when the
   * user navigates away from the camera tab or when a barcode is detected and
   * the user has chosen not to continue scanning.
   */
  #stopScanning() {
    this.#shouldScan = false;

    if (this.#scanTimeoutId !== null) {
      clearTimeout(this.#scanTimeoutId);
      this.#scanTimeoutId = null;
    }
  }

  /**
   * Scans for barcodes.
   * If a barcode is detected, it stops scanning and displays the result.
   *
   * @returns {Promise<void>} - A Promise that resolves when the barcode is detected.
   */
  async #scan() {
    if (!this.#shouldScan || this.barcodeReader == null) {
      return;
    }

    log.info('Scanning...');

    try {
      // const [, settings] = await getSettings();
      const barcode = await this.barcodeReader.detect(this.#videoCaptureVideoEl);
      const barcodeValue = barcode?.rawValue ?? '';

      if (!barcodeValue) {
        throw new Error('No barcode detected');
      }

      this.#emitEvent('barcode-detect-success', { barcodeValue, source: 'camera-scanner' });
    } catch {
      // If no barcode is detected, the error is caught here.
      // We can ignore the error and continue scanning.
    }

    if (this.#shouldScan) {
      this.#scanTimeoutId = setTimeout(() => {
        this.#scanTimeoutId = null;
        this.#scan();
      }, SCAN_RATE_LIMIT);
    }
  }

  /**
   * Handles the resize event on the video-capture element.
   * It is responsible for resizing the scan frame based on the video element.
   */
  #handleVideoCaptureResize = () => {
    resizeScanFrame(this.#videoCaptureEl.shadowRoot.querySelector('video'), this.#scanFrameEl);
  };

  /**
   * Handles the video play event on the video-capture element.
   * It is responsible for displaying the scan frame and starting the scan process.
   * It also handles the zoom controls if the browser supports it.
   *
   * @param {CustomEvent} evt - The event object.
   */
  #handleVideoCapturePlay = async evt => {
    this.#playVideoButton.setAttribute('hidden', '');
    this.#scanFrameEl.removeAttribute('hidden');
    resizeScanFrame(evt.detail.video, this.#scanFrameEl);
    this.#startScanning();

    const trackSettings = evt.target.getTrackSettings();
    const trackCapabilities = evt.target.getTrackCapabilities();
    const zoomLevelEl = this.shadowRoot.getElementById('zoomLevel');

    // Torch CTA
    if (trackCapabilities?.torch) {
      this.#torchButton.addEventListener('click', this.#handleTorchButtonClick);
      this.#torchButton.removeAttribute('hidden');

      if (this.#videoCaptureEl.hasAttribute('torch')) {
        toggleTorchButtonStatus({ el: this.#torchButton, isTorchOn: true });
      }
    }

    // Zoom controls
    if (trackSettings?.zoom && trackCapabilities?.zoom) {
      const zoomControls = this.shadowRoot?.getElementById('zoomControls');
      const minZoom = trackCapabilities?.zoom?.min || 0;
      const maxZoom = trackCapabilities?.zoom?.max || 10;
      let currentZoom = trackSettings?.zoom || 1;

      const handleZoomControlsClick = evt => {
        const zoomInBtn = evt.target.closest('[data-action="zoom-in"]');
        const zoomOutBtn = evt.target.closest('[data-action="zoom-out"]');

        if (zoomInBtn && currentZoom < maxZoom) {
          currentZoom += 0.5;
        }

        if (zoomOutBtn && currentZoom > minZoom) {
          currentZoom -= 0.5;
        }

        zoomLevelEl.textContent = currentZoom.toFixed(1);
        this.#videoCaptureEl.zoom = currentZoom;
      };

      zoomControls.addEventListener('click', handleZoomControlsClick);
      zoomControls.removeAttribute('hidden');
      zoomLevelEl.textContent = currentZoom.toFixed(1);
    }

    // Camera select
    const videoInputDevices = await VideoCapture.getVideoInputDevices();

    videoInputDevices.forEach((device, index) => {
      const option = this.ownerDocument.createElement('option');
      option.value = device.deviceId;
      option.textContent = device.label || `Camera ${index + 1}`;
      this.#cameraSelect.appendChild(option);
    });

    if (videoInputDevices.length > 1) {
      this.#cameraSelect.addEventListener('change', this.#handleCameraSelectChange);
      this.#cameraSelect.removeAttribute('hidden');
    }
  };

  /**
   * Handles the error event on the video-capture element.
   * It is responsible for displaying an error message if the camera cannot be accessed or permission is denied.
   *
   * @param {CustomEvent} evt - The event object.
   */
  #handleVideoCaptureError = evt => {
    const { source, reason, error } = evt.detail;

    if (source === 'playback' && reason === 'user-gesture-required') {
      this.#playVideoButton.removeAttribute('hidden');
      return;
    }

    let errorMessage =
      '<strong>Unable to start camera</strong><br>An unexpected error occurred while starting the video stream.';

    if (error.name === 'NotFoundError') {
      errorMessage = '<strong>No camera found</strong><br>No compatible camera is available.';
    } else if (source === 'camera' && reason === 'camera-access-denied') {
      errorMessage =
        '<strong>Error accessing camera</strong><br>Permission to use the camera was denied. Please enable camera access in your browser settings.';
    }

    toastify(errorMessage, {
      duration: Infinity,
      variant: 'danger',
      announce: 'alert',
      trustDangerousInnerHTML: true
    });
  };

  /**
   * Handles the click event on the torch button.
   * It is responsible for toggling the torch on and off.
   *
   * @param {MouseEvent} evt - The event object.
   */
  #handleTorchButtonClick = evt => {
    this.#videoCaptureEl.torch = !this.#videoCaptureEl.torch;

    toggleTorchButtonStatus({
      el: evt.currentTarget,
      isTorchOn: this.#videoCaptureEl.hasAttribute('torch')
    });
  };

  /**
   * Handles the change event on the camera select element.
   * It is responsible for restarting the video stream with the selected video input device id.
   *
   * @param {Event} evt - The event object.
   */
  #handleCameraSelectChange = evt => {
    const videoDeviceId = evt.target.value || undefined;
    this.#videoCaptureEl.restartVideoStream?.(videoDeviceId);
  };

  /**
   * Handles video play button click event.
   */
  #handlePlayVideo = () => {
    if (!this.#videoCaptureEl) {
      return;
    }

    if (this.#videoCaptureEl.loading) {
      return;
    }

    this.#videoCaptureEl.playVideo?.({ emit: true });
    this.#playVideoButton.setAttribute('hidden', '');
  };

  /**
   * Handles the camera scanner visibility change event.
   *
   * @param {CustomEvent} evt - The event object.
   */
  #handleCameraScannerVisibilityChange = async evt => {
    const { visibility } = evt.detail;

    if (visibility === 'visible') {
      const videoDeviceId = this.#cameraSelect.value || undefined;
      const started = await this.#videoCaptureEl.startVideoStream?.(videoDeviceId);

      if (started) {
        this.#startScanning();
      }
    } else {
      this.#stopScanning();
      this.#videoCaptureEl.stopVideoStream?.();
    }
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
   * @param {string} [tagName='camera-scanner'] - The tag name to use for the custom element.
   */
  static define(tagName = 'camera-scanner') {
    if (typeof window === 'undefined' || window.customElements.get(tagName)) {
      return;
    }
    window.customElements.define(tagName, CameraScanner);
  }
}

export { CameraScanner };

/**
 * Resizes the scan frame to match the video element's dimensions.
 *
 * @param {HTMLVideoElement} videoEl - Video element
 * @param {HTMLElement} scanFrameEl - Scan frame element
 */
function resizeScanFrame(videoEl, scanFrameEl) {
  if (!videoEl || !scanFrameEl) {
    return;
  }

  const rect = videoEl.getBoundingClientRect();

  scanFrameEl.style.cssText = `width: ${rect.width}px; height: ${rect.height}px`;
}

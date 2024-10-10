/**
 * Represents a value that may be of type T, or null.
 *
 * @template T
 * @typedef {T | null} Nullable
 */

/**
 * @typedef {Object} ExtendedMediaTrackCapabilities
 * @property {ULongRange} [width] - The width of the video track.
 * @property {ULongRange} [height] - The height of the video track.
 * @property {ULongRange} [pan] - The pan level of the camera.
 * @property {ULongRange} [tilt] - The tilt level of the camera.
 * @property {ULongRange} [zoom] - The zoom level of the camera.
 * @property {MediaTrackCapabilities} [nativeMediaTrackCapabilities] - The native track capabilities.
 */

/**
 * @typedef {Object} ExtendedMediaTrackConstraints
 * @property {MediaTrackConstraints & {pan: boolean, tilt: boolean, zoom: boolean, torch: boolean}} video - The video constraints.
 * @property {MediaTrackConstraints | boolean} audio - The audio constraints.
 */

const clamp = (value, lower, upper) => {
  if (Number.isNaN(lower)) {
    lower = 0;
  }

  if (Number.isNaN(upper)) {
    upper = 0;
  }

  return Math.min(Math.max(value, Math.min(lower, upper)), Math.max(lower, upper));
};

const COMPONENT_NAME = 'capture-photo';

const styles = /* css */ `
  :host {
    display: block;
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
    display: none;
  }

  video {
    display: block;
  }

  #output:empty {
    display: none;
  }
`;

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>${styles}</style>

  <video part="video" playsinline></video>

  <canvas hidden></canvas>

  <div part="actions-container">
    <slot name="capture-button">
      <button part="capture-button" type="button">
        <slot name="capture-button-content">Capture photo</slot>
      </button>
    </slot>

    <slot name="actions"></slot>
  </div>

  <slot></slot>

  <div part="output-container" id="output"></div>
`;

/**
 * @summary A custom element that implements the MediaDevices.getUserMedia() method of the MediaDevices interface to capture a photo in the browser.
 * @documentation https://github.com/georapbox/capture-photo-element
 *
 * @tagname capture-photo This is the default tag name, unless overridden by the `defineCustomElement` method.
 * @extends HTMLElement
 *
 * @property {boolean} autoPlay - Whether or not to start the video stream automatically.
 * @property {boolean} noImage - Whether or not to show the captured image.
 * @property {string} facingMode - The facing mode of the camera.
 * @property {string} cameraId - The ID of the camera to use.
 * @property {string} cameraResolution - The resolution of the camera.
 * @property {number} pan - The pan value of the camera.
 * @property {number} tilt - The tilt value of the camera.
 * @property {number} zoom - The zoom value of the camera.
 * @property {boolean} torch - Whether or not the fill light is connected.
 * @property {boolean} calculateFileSize - Whether or not to calculate the file size of the captured image.
 * @property {boolean} loading - Whether or not the video stream is loading.
 *
 * @atttribute {boolean} auto-play - Reflects the autoPlay property.
 * @atttribute {boolean} no-image - Reflects the noImage property.
 * @atttribute {string} facing-mode - Reflects the facingMode property.
 * @atttribute {string} camera-id - Reflects the cameraId property.
 * @atttribute {string} camera-resolution - Reflects the cameraResolution property.
 * @atttribute {number} pan - Reflects the pan property.
 * @atttribute {number} tilt - Reflects the tilt property.
 * @atttribute {number} zoom - Reflects the zoom property.
 * @atttribute {boolean} torch - Reflects the torch property.
 * @atttribute {boolean} calculate-file-size - Reflects the calculateFileSize property.
 * @atttribute {boolean} loading - Reflects the loading property.
 *
 * @slot capture-button - The capture button.
 * @slot capture-button-content - The capture button content.
 * @slot actions - The actions container.
 * @slot - A default un-named slot to add content inside the component.
 *
 * @csspart video - The video element.
 * @csspart actions-container - The actions container.
 * @csspart capture-button - The capture button.
 * @csspart output-container - The output container.
 * @csspart output-image - The output image.
 *
 * @event capture-photo:video-play - Fires when the video stream is successfully playing.
 * @event capture-photo:success - Fires when the photo is successfully captured.
 * @event capture-photo:error - Fires when an error occurs.
 *
 * @method defineCustomElement - Static method. Defines the custom element with the given name.
 * @method isSupported - Static method. Checks if the MediaDevices.getUserMedia() method is supported.
 * @method getVideoDevices - Static method. Gets the available video devices.
 * @method startVideoStream - Instance method. Starts the video stream.
 * @method stopVideoStream - Instance method. Stops the video stream.
 * @method capture - Instance method. Captures a photo.
 * @method getSupportedConstraints - Instance method. Gets the supported constraints.
 * @method getTrackCapabilities - Instance method. Gets the track capabilities.
 * @method getTrackSettings - Instance method. Gets the track settings.
 */
class CapturePhoto extends HTMLElement {
  /** @type {MediaTrackSupportedConstraints | {}}*/
  #supportedConstraints = {};

  /** @type {Nullable<MediaStream>} */
  #stream = null;

  /** @type {Nullable<HTMLCanvasElement>} */
  #canvasElement = null;

  /** @type {Nullable<HTMLElement>} */
  #outputElement = null;

  /** @type {Nullable<HTMLVideoElement>} */
  #videoElement = null;

  /** @type {Nullable<HTMLSlotElement>} */
  #captureButtonSlot = null;

  /** @type {Nullable<HTMLButtonElement | Element>} */
  #captureButton = null;

  constructor() {
    super();

    this.#supportedConstraints = this.getSupportedConstraints();

    if (!this.shadowRoot) {
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  static get observedAttributes() {
    return [
      'no-image',
      'facing-mode',
      'camera-resolution',
      'pan',
      'tilt',
      'zoom',
      'torch',
      'camera-id'
    ];
  }

  /**
   * Lifecycle method that is called when attributes are changed, added, removed, or replaced.
   *
   * @param {string} name - The name of the attribute.
   * @param {string} oldValue - The old value of the attribute.
   * @param {string} newValue - The new value of the attribute.
   */
  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.isConnected) {
      return;
    }

    /** @type {ExtendedMediaTrackCapabilities} */
    const trackCapabilities = this.getTrackCapabilities();
    const trackSettings = this.getTrackSettings();

    if (name === 'no-image' && oldValue !== newValue) {
      this.#emptyOutputElement();
    }

    if (
      name === 'facing-mode' &&
      oldValue !== newValue &&
      'facingMode' in this.#supportedConstraints
    ) {
      const isValidFacingMode = ['user', 'environment'].includes(this.facingMode || '');

      if ('facingMode' in trackSettings && isValidFacingMode) {
        this.#restartVideoStream();
      }
    }

    if (name === 'camera-resolution' && oldValue !== newValue) {
      if (typeof this.cameraResolution === 'string' && this.cameraResolution.trim().length > 0) {
        const [width = 0, height = 0] = this.cameraResolution.split('x').map(x => Number(x));

        if (
          width > 0 &&
          height > 0 &&
          'width' in trackCapabilities &&
          'height' in trackCapabilities
        ) {
          const widthInAllowedRange =
            trackCapabilities.width?.min && trackCapabilities.width?.max
              ? width >= trackCapabilities?.width?.min && width <= trackCapabilities?.width?.max
              : false;

          const heightInAllowedRange =
            trackCapabilities.height?.min && trackCapabilities.height?.max
              ? height >= trackCapabilities?.height?.min && height <= trackCapabilities?.height?.max
              : false;

          if (
            'width' in trackSettings &&
            'height' in trackSettings &&
            widthInAllowedRange &&
            heightInAllowedRange
          ) {
            this.#restartVideoStream();
          }
        }
      }
    }

    if (name === 'pan' && oldValue !== newValue && 'pan' in this.#supportedConstraints) {
      const panInAllowedRange =
        'pan' in trackCapabilities && trackCapabilities.pan?.min && trackCapabilities.pan?.max
          ? this.pan >= trackCapabilities.pan.min && this.pan <= trackCapabilities.pan.max
          : false;

      if (typeof this.pan === 'number' && panInAllowedRange) {
        this.#applyConstraint('pan', this.pan);
      }
    }

    if (name === 'tilt' && oldValue !== newValue && 'tilt' in this.#supportedConstraints) {
      const tiltInAllowedRange =
        'tilt' in trackCapabilities && trackCapabilities.tilt?.min && trackCapabilities.tilt?.max
          ? this.tilt >= trackCapabilities.tilt.min && this.tilt <= trackCapabilities.tilt.max
          : false;

      if (typeof this.tilt === 'number' && tiltInAllowedRange) {
        this.#applyConstraint('tilt', this.tilt);
      }
    }

    if (name === 'zoom' && oldValue !== newValue && 'zoom' in this.#supportedConstraints) {
      const zoomInAllowedRange =
        'zoom' in trackCapabilities && trackCapabilities.zoom?.min && trackCapabilities.zoom?.max
          ? this.zoom >= trackCapabilities.zoom.min && this.zoom <= trackCapabilities.zoom.max
          : false;

      if (typeof this.zoom === 'number' && zoomInAllowedRange) {
        this.#applyConstraint('zoom', this.zoom);
      }
    }

    if (name === 'torch' && oldValue !== newValue && 'torch' in this.#supportedConstraints) {
      this.#applyConstraint('torch', this.torch);
    }

    if (name === 'camera-id' && oldValue !== newValue) {
      this.#restartVideoStream();
    }
  }

  /**
   * Lifecycle method that is called when the element is added to the DOM.
   */
  async connectedCallback() {
    this.#upgradeProperty('autpoPlay');
    this.#upgradeProperty('noImage');
    this.#upgradeProperty('facingMode');
    this.#upgradeProperty('cameraId');
    this.#upgradeProperty('cameraResolution');
    this.#upgradeProperty('pan');
    this.#upgradeProperty('tilt');
    this.#upgradeProperty('zoom');
    this.#upgradeProperty('torch');
    this.#upgradeProperty('calculateFileSize');

    this.#canvasElement = this.shadowRoot?.querySelector('canvas') || null;
    this.#outputElement = this.shadowRoot?.getElementById('output') || null;
    this.#videoElement = this.shadowRoot?.querySelector('video') || null;
    this.#captureButtonSlot = this.shadowRoot?.querySelector('slot[name="capture-button"]') || null;
    this.#captureButton = this.#getCaptureButton();

    this.#videoElement?.addEventListener('loadedmetadata', this.#onVideoLoadedMetaData);
    this.#captureButtonSlot?.addEventListener('slotchange', this.#onCaptureButtonSlotChange);
    this.#captureButton?.addEventListener('click', this.#onCapturePhotoButtonClick);

    if (!CapturePhoto.isSupported()) {
      return this.dispatchEvent(
        new CustomEvent(`${COMPONENT_NAME}:error`, {
          bubbles: true,
          composed: true,
          detail: {
            error: {
              name: 'NotSupportedError',
              message: 'Not supported'
            }
          }
        })
      );
    }

    if (this.autoPlay) {
      this.startVideoStream();
    }
  }

  /**
   * Lifecycle method that is called when the element is removed from the DOM.
   */
  disconnectedCallback() {
    this.stopVideoStream();
    this.#captureButton?.removeEventListener('click', this.#onCapturePhotoButtonClick);
    this.#videoElement?.removeEventListener('canplay', this.#onVideoLoadedMetaData);
    this.#captureButtonSlot?.removeEventListener('slotchange', this.#onCaptureButtonSlotChange);
  }

  /**
   * @type {boolean} autoPlay - Whether or not to start the video stream automatically.
   * @attribute auto-play - Reflects the autoPlay attribute.
   */
  get autoPlay() {
    return this.hasAttribute('auto-play');
  }

  set autoPlay(value) {
    this.toggleAttribute('auto-play', !!value);
  }

  /**
   * @type {boolean} noImage - Whether or not to show the captured image.
   * @attribute no-image - Reflects the noImage attribute.
   */
  get noImage() {
    return this.hasAttribute('no-image');
  }

  set noImage(value) {
    this.toggleAttribute('no-image', !!value);
  }

  /**
   * @type {string} facingMode - The facing mode of the camera.
   * @attribute facing-mode - Reflects the facingMode attribute.
   */
  get facingMode() {
    return this.getAttribute('facing-mode') || 'user';
  }

  set facingMode(value) {
    this.setAttribute('facing-mode', value);
  }

  /**
   * @type {string} cameraId - The ID of the camera to use.
   * @attribute camera-id - Reflects the cameraId attribute.
   */
  get cameraId() {
    return this.getAttribute('camera-id') || '';
  }

  set cameraId(value) {
    this.setAttribute('camera-id', value);
  }

  /**
   * @type {string} cameraResolution - The resolution of the camera.
   * @attribute camera-resolution - Reflects the cameraResolution attribute.
   */
  get cameraResolution() {
    return this.getAttribute('camera-resolution') || '';
  }

  set cameraResolution(value) {
    this.setAttribute('camera-resolution', value);
  }

  /**
   * @type {number} pan - The pan value of the camera.
   * @attribute pan - Reflects the pan attribute.
   */
  get pan() {
    return Number(this.getAttribute('pan')) || 0;
  }

  set pan(value) {
    this.setAttribute('pan', value != null ? value.toString() : value);
  }

  /**
   * @type {number} tilt - The tilt value of the camera.
   * @attribute tilt - Reflects the tilt attribute.
   */
  get tilt() {
    return Number(this.getAttribute('tilt')) || 0;
  }

  set tilt(value) {
    this.setAttribute('tilt', value != null ? value.toString() : value);
  }

  /**
   * @type {number} zoom - The zoom value of the camera.
   * @attribute zoom - Reflects the zoom attribute.
   */
  get zoom() {
    return Number(this.getAttribute('zoom')) || 1;
  }

  set zoom(value) {
    this.setAttribute('zoom', value != null ? value.toString() : value);
  }

  /**
   * @type {boolean} torch - Whether or not the fill light is connected.
   * @attribute torch - Reflects the torch attribute.
   */
  get torch() {
    return this.hasAttribute('torch');
  }

  set torch(value) {
    this.toggleAttribute('torch', !!value);
  }

  /**
   * @type {boolean} calculateFileSize - Whether or not to calculate the file size of the captured image.
   * @attribute calculate-file-size - Reflects the calculateFileSize attribute.
   */
  get calculateFileSize() {
    return this.hasAttribute('calculate-file-size');
  }

  set calculateFileSize(value) {
    this.toggleAttribute('calculate-file-size', !!value);
  }

  /**
   * @type {boolean} loading - Whether or not the video stream is loading.
   * @attribute loading - Reflects the loading attribute.
   */
  get loading() {
    return this.hasAttribute('loading');
  }

  /**
   * Handles the click event of the capture button.
   *
   * @param {*} evt - The click event.
   */
  #onCapturePhotoButtonClick = evt => {
    evt.preventDefault();
    this.capture();
  };

  /**
   * Handles the loadedmetadata event of the video element.
   *
   * @param {*} evt - The loadedmetadata event.
   */
  #onVideoLoadedMetaData = evt => {
    const video = evt.target;

    video
      .play()
      .then(() => {
        this.dispatchEvent(
          new CustomEvent(`${COMPONENT_NAME}:video-play`, {
            bubbles: true,
            composed: true,
            detail: { video }
          })
        );
      })
      .catch(
        /** @param {Error} error */ error => {
          this.dispatchEvent(
            new CustomEvent(`${COMPONENT_NAME}:error`, {
              bubbles: true,
              composed: true,
              detail: { error }
            })
          );
        }
      )
      .finally(() => {
        this.removeAttribute('loading');
      });
  };

  /**
   * Removes all child nodes from the output element.
   */
  #emptyOutputElement() {
    if (!this.#outputElement) {
      return;
    }

    Array.from(this.#outputElement.childNodes).forEach(node => node.remove());
  }

  /**
   * Applies a constraint to the video track.
   *
   * @param {string} constraint - The name of the constraint.
   * @param {any} value - The value of the constraint.
   */
  #applyConstraint(constraint, value) {
    if (!this.#stream) {
      return;
    }

    const [track] = this.#stream.getVideoTracks();
    /** @type {ExtendedMediaTrackCapabilities} */
    const trackCapabilities = this.getTrackCapabilities();
    const trackSettings = this.getTrackSettings();

    const constraintValue =
      constraint === 'pan' || constraint === 'tilt' || constraint === 'zoom'
        ? clamp(
            Number(value),
            trackCapabilities[constraint]?.min || 1,
            trackCapabilities[constraint]?.max || 1
          )
        : value;

    if (constraint in trackSettings) {
      track
        .applyConstraints({
          advanced: [{ [constraint]: constraintValue }]
        })
        .catch(() => {
          // Fail silently...
        });
    }
  }

  /**
   * Handles the slotchange event of the capture button slot.
   *
   * @param {*} evt - The slotchange event.
   */
  #onCaptureButtonSlotChange = evt => {
    if (evt.target?.name === 'capture-button') {
      this.#captureButton?.removeEventListener('click', this.#onCapturePhotoButtonClick);
      this.#captureButton = this.#getCaptureButton();

      if (this.#captureButton) {
        this.#captureButton.addEventListener('click', this.#onCapturePhotoButtonClick);

        if (
          this.#captureButton.nodeName !== 'BUTTON' &&
          !this.#captureButton.hasAttribute('role')
        ) {
          this.#captureButton.setAttribute('role', 'button');
        }
      }
    }
  };

  /**
   * Returns the capture button.
   *
   * @returns {Nullable<HTMLButtonElement | Element>}
   */
  #getCaptureButton() {
    if (!this.#captureButtonSlot) {
      return null;
    }

    return (
      this.#captureButtonSlot.assignedElements({ flatten: true }).find(el => {
        return el.nodeName === 'BUTTON' || el.getAttribute('slot') === 'capture-button';
      }) || null
    );
  }

  /**
   * Restarts the video stream if it is already running.
   */
  #restartVideoStream() {
    if (!this.#stream) {
      return;
    }

    this.stopVideoStream();
    this.startVideoStream();
  }

  /**
   * This is to safe guard against cases where, for instance, a framework may have added the element to the page and
   * set a value on one of its properties, but lazy loaded its definition. Without this guard, the upgraded element would
   * miss that property and the instance property would prevent the class property setter from ever being called.
   *
   * https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
   *
   * @param {'autpoPlay' | 'noImage' | 'facingMode' | 'cameraId' | 'cameraResolution' | 'pan' | 'tilt' | 'zoom' | 'calculateFileSize' | 'torch'} prop
   */
  #upgradeProperty(prop) {
    /** @type {any} */
    const instance = this;

    if (Object.prototype.hasOwnProperty.call(instance, prop)) {
      const value = instance[prop];
      delete instance[prop];
      instance[prop] = value;
    }
  }

  /**
   * Starts the video stream.
   *
   * @returns Promise<void>
   */
  async startVideoStream(cameraId) {
    if (!CapturePhoto.isSupported() || this.#stream) {
      return;
    }

    this.setAttribute('loading', '');

    /** @type {ExtendedMediaTrackConstraints} */
    const constraints = {
      video: {
        facingMode: {
          ideal: this.facingMode || 'user'
        },
        pan: true,
        tilt: true,
        zoom: true,
        torch: this.torch
      },
      audio: false
    };

    if (cameraId) {
      constraints.video.deviceId = { exact: cameraId };
    }

    if (typeof this.cameraResolution === 'string' && this.cameraResolution.trim().length > 0) {
      const [width = 0, height = 0] = this.cameraResolution.split('x').map(x => Number(x));

      if (width > 0 && height > 0) {
        constraints.video.width = width;
        constraints.video.height = height;
      }
    }

    try {
      this.#stream = await navigator.mediaDevices.getUserMedia(constraints);

      if (this.#videoElement) {
        this.#videoElement.srcObject = this.#stream;
      }

      this.#applyConstraint('pan', this.pan);
      this.#applyConstraint('tilt', this.tilt);
      this.#applyConstraint('zoom', this.zoom);
    } catch (error) {
      this.dispatchEvent(
        new CustomEvent(`${COMPONENT_NAME}:error`, {
          bubbles: true,
          composed: true,
          detail: { error }
        })
      );
    } finally {
      this.removeAttribute('loading');
    }
  }

  /**
   * Stops the video stream.
   */
  stopVideoStream() {
    if (!this.#videoElement || !this.#stream) {
      return;
    }

    const [track] = this.#stream.getVideoTracks();

    track?.stop();
    this.#videoElement.srcObject = null;
    this.#stream = null;
  }

  /**
   * Captures a photo using the element's properties.
   *
   * @returns Promise<void>
   */
  async capture() {
    if (this.loading || !this.#canvasElement || !this.#videoElement) {
      return;
    }

    try {
      const ctx = this.#canvasElement.getContext('2d');
      const width = this.#videoElement.videoWidth;
      const height = this.#videoElement.videoHeight;
      this.#canvasElement.width = width;
      this.#canvasElement.height = height;
      ctx?.drawImage(this.#videoElement, 0, 0, width, height);
      const dataURI = this.#canvasElement.toDataURL('image/png');

      if (typeof dataURI === 'string' && dataURI.includes('data:image')) {
        if (!this.noImage) {
          const image = new Image();
          image.src = dataURI;
          image.width = width;
          image.height = height;
          image.alt = 'Captured photo';
          image.setAttribute('part', 'output-image');
          this.#emptyOutputElement();
          this.#outputElement?.appendChild(image);
        }

        /** @type {{ dataURI: string, width: number, height: number, size?: number }} */
        const eventDetail = { dataURI, width, height };

        if (this.calculateFileSize) {
          try {
            const file = await fetch(dataURI);
            const blob = await file.blob();
            const size = blob.size;

            if (size) {
              eventDetail.size = size;
            }
          } catch {
            // Fail silently...
          }
        }

        this.dispatchEvent(
          new CustomEvent(`${COMPONENT_NAME}:success`, {
            bubbles: true,
            composed: true,
            detail: eventDetail
          })
        );
      }
    } catch (error) {
      this.dispatchEvent(
        new CustomEvent(`${COMPONENT_NAME}:error`, {
          bubbles: true,
          composed: true,
          detail: { error }
        })
      );
    }
  }

  /**
   * Returns an object based on the `MediaTrackSupportedConstraints` dictionary,
   * whose member fields each specify one ofthe constrainable properties the user agent understands.
   *
   * @see https://developer.mozilla.org/docs/Web/API/MediaDevices/getSupportedConstraints
   * @returns {MediaTrackSupportedConstraints | {}}
   */
  getSupportedConstraints() {
    if (!CapturePhoto.isSupported()) {
      return {};
    }

    return navigator.mediaDevices.getSupportedConstraints() || {};
  }

  /**
   * Returns a `MediaTrackCapabilities` object which specifies the values or range of values
   * which each constrainable property, based upon the platform and user agent.
   *
   * @see https://developer.mozilla.org/docs/Web/API/MediaStreamTrack/getCapabilities
   * @returns {MediaTrackCapabilities | {}}
   */
  getTrackCapabilities() {
    if (!this.#stream) {
      return {};
    }

    const [track] = this.#stream.getVideoTracks();

    if (track && typeof track.getCapabilities === 'function') {
      return track.getCapabilities() || {};
    }

    return {};
  }

  /**
   * Returns a `MediaTrackSettings` object containing the current values of each of
   * the constrainable properties for the current MediaStreamTrack.
   *
   * @see https://developer.mozilla.org/docs/Web/API/MediaStreamTrack/getSettings
   * @returns {MediaTrackSettings | {}}
   */
  getTrackSettings() {
    if (!this.#stream) {
      return {};
    }

    const [track] = this.#stream.getVideoTracks();

    if (track && typeof track.getSettings === 'function') {
      return track.getSettings() || {};
    }

    return {};
  }

  /**
   * Returns the available video devices.
   *
   * @returns {Promise<MediaDeviceInfo[]>}
   */
  static async getVideoDevices() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      return [];
    }

    const devices = (await navigator.mediaDevices.enumerateDevices()) || [];
    return devices.filter(device => device.kind === 'videoinput');
  }

  /**
   * Checks if the `MediaDevices.getUserMedia()` method is supported.
   *
   * @returns {boolean}
   */
  static isSupported() {
    return Boolean(navigator.mediaDevices?.getUserMedia);
  }

  /**
   * Defines a custom element with the given name.
   * The name must contain a dash (-).
   *
   * @param {string} [elementName='capture-photo'] - The name of the custom element.
   * @example
   *
   * CapturePhoto.defineCustomElement('my-capture-photo');
   */
  static defineCustomElement(elementName = COMPONENT_NAME) {
    if (typeof window !== 'undefined' && !window.customElements.get(elementName)) {
      window.customElements.define(elementName, CapturePhoto);
    }
  }
}

export { CapturePhoto };

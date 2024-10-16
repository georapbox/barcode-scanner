import { clamp } from '../utils/clamp.js';

const COMPONENT_NAME = 'video-capture';

const styles = /* css */ `
  :host { display: block; box-sizing: border-box; }
  :host *, :host *::before, :host *::after { box-sizing: inherit;}
  :host([hidden]), [hidden], ::slotted([hidden]) { display: none; }
  video { display: block; }
  #output:empty { display: none; }
`;

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>${styles}</style>
  <video part="video" playsinline></video>
  <div part="actions-container"><slot name="actions"></slot></div>
  <slot></slot>
`;

class VideoCapture extends HTMLElement {
  #supportedConstraints = {};
  #stream = null;
  #videoElement = null;

  constructor() {
    super();

    this.#supportedConstraints = this.getSupportedConstraints();

    if (!this.shadowRoot) {
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  static get observedAttributes() {
    return ['no-image', 'pan', 'tilt', 'zoom', 'torch'];
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

    const trackCapabilities = this.getTrackCapabilities();

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
  }

  /**
   * Lifecycle method that is called when the element is added to the DOM.
   */
  async connectedCallback() {
    this.#upgradeProperty('autoPlay');
    this.#upgradeProperty('facingMode');
    this.#upgradeProperty('zoom');
    this.#upgradeProperty('torch');

    this.#videoElement = this.shadowRoot?.querySelector('video') || null;

    this.#videoElement?.addEventListener('loadedmetadata', this.#onVideoLoadedMetaData);

    if (!VideoCapture.isSupported()) {
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
    this.#videoElement?.removeEventListener('loadedmetadata', this.#onVideoLoadedMetaData);
  }

  get autoPlay() {
    return this.hasAttribute('auto-play');
  }

  set autoPlay(value) {
    this.toggleAttribute('auto-play', !!value);
  }

  get facingMode() {
    const value = this.getAttribute('facing-mode');

    if (value !== 'user') {
      return 'environment';
    }

    return value;
  }

  set facingMode(value) {
    this.setAttribute('facing-mode', value);
  }

  get zoom() {
    return Number(this.getAttribute('zoom')) || 1;
  }

  set zoom(value) {
    this.setAttribute('zoom', value != null ? value.toString() : value);
  }

  get torch() {
    return this.hasAttribute('torch');
  }

  set torch(value) {
    this.toggleAttribute('torch', !!value);
  }

  get loading() {
    return this.hasAttribute('loading');
  }

  /**
   * Handles the loadedmetadata event of the video element.
   *
   * @param {Event} evt - The event object.
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
      .catch(error => {
        this.dispatchEvent(
          new CustomEvent(`${COMPONENT_NAME}:error`, {
            bubbles: true,
            composed: true,
            detail: { error }
          })
        );
      })
      .finally(() => {
        this.removeAttribute('loading');
      });
  };

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
   * This is to safe guard against cases where, for instance, a framework may have added the element to the page and
   * set a value on one of its properties, but lazy loaded its definition. Without this guard, the upgraded element would
   * miss that property and the instance property would prevent the class property setter from ever being called.
   *
   * https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
   *
   * @param {string} prop - The property to upgrade.
   */
  #upgradeProperty(prop) {
    if (Object.prototype.hasOwnProperty.call(this, prop)) {
      const value = this[prop];
      delete this[prop];
      this[prop] = value;
    }
  }

  /**
   * Starts the video stream.
   *
   * @param {string} [videoInputId] - The video input device ID.
   * @returns Promise<void>
   */
  async startVideoStream(videoInputId) {
    if (!VideoCapture.isSupported() || this.#stream) {
      return;
    }

    this.setAttribute('loading', '');

    const constraints = {
      video: {
        facingMode: {
          ideal: this.facingMode
        },
        pan: true,
        tilt: true,
        zoom: true,
        torch: this.torch
      },
      audio: false
    };

    if (typeof videoInputId === 'string' && videoInputId.trim().length > 0) {
      constraints.video.deviceId = { exact: videoInputId };
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
   * Restarts the video stream.
   *
   * @param {string} [videoInputId] - The video input device ID.
   */
  restartVideoStream(videoInputId) {
    if (this.#stream && this.#videoElement) {
      this.stopVideoStream();
    }

    this.startVideoStream(videoInputId);
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
   * Returns an object based on the `MediaTrackSupportedConstraints` dictionary,
   * whose member fields each specify one ofthe constrainable properties the user agent understands.
   *
   * @see https://developer.mozilla.org/docs/Web/API/MediaDevices/getSupportedConstraints
   * @returns {MediaTrackSupportedConstraints | {}}
   */
  getSupportedConstraints() {
    if (!VideoCapture.isSupported()) {
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
   * Returns the available video input devices.
   *
   * @returns {Promise<MediaDeviceInfo[]>}
   */
  static async getVideoInputDevices() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      return [];
    }

    const devices = (await navigator.mediaDevices.enumerateDevices()) || [];
    return devices.filter(device => device.kind === 'videoinput' && !!device.deviceId);
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
   * @param {string} [elementName='video-capture'] - The name of the custom element.
   */
  static defineCustomElement(elementName = COMPONENT_NAME) {
    if (typeof window !== 'undefined' && !window.customElements.get(elementName)) {
      window.customElements.define(elementName, VideoCapture);
    }
  }
}

export { VideoCapture };

import '@georapbox/a-tab-group/dist/a-tab-group.js';
import '@georapbox/web-share-element/dist/web-share-defined.js';
import '@georapbox/files-dropzone-element/dist/files-dropzone-defined.js';
import '@georapbox/resize-observer-element/dist/resize-observer-defined.js';
import '@georapbox/modal-element/dist/modal-element-defined.js';
import { NO_BARCODE_DETECTED, ACCEPTED_MIME_TYPES } from './constants.js';
import { getSettings, setSettings } from './services/storage.js';
import { debounce } from './utils/debounce.js';
import { log } from './utils/log.js';
import { isDialogElementSupported } from './utils/isDialogElementSupported.js';
import { hideResult, showResult } from './helpers/result.js';
import { triggerScanEffects } from './helpers/triggerScanEffects.js';
import { resizeScanFrame } from './helpers/resizeScanFrame.js';
import { BarcodeReader } from './helpers/BarcodeReader.js';
import { toggleTorchButtonStatus } from './helpers/toggleTorchButtonStatus.js';
import { VideoCapture } from './components/video-capture.js';
import './components/clipboard-copy.js';
import './components/bs-result.js';
import './components/bs-settings.js';
import './components/bs-history.js';

(async function () {
  const tabGroupEl = document.querySelector('a-tab-group');
  const videoCaptureEl = document.querySelector('video-capture');
  const bsSettingsEl = document.querySelector('bs-settings');
  const bsHistoryEl = document.querySelector('bs-history');
  const cameraPanel = document.getElementById('cameraPanel');
  const filePanel = document.getElementById('filePanel');
  const scanInstructionsEl = document.getElementById('scanInstructions');
  const scanBtn = document.getElementById('scanBtn');
  const dropzoneEl = document.getElementById('dropzone');
  const resizeObserverEl = document.querySelector('resize-observer');
  const scanFrameEl = document.getElementById('scanFrame');
  const torchButton = document.getElementById('torchButton');
  const globalActionsEl = document.getElementById('globalActions');
  const historyBtn = document.getElementById('historyBtn');
  const historyDialog = document.getElementById('historyDialog');
  const settingsBtn = document.getElementById('settingsBtn');
  const settingsDialog = document.getElementById('settingsDialog');
  const settingsForm = document.getElementById('settingsForm');
  const cameraSelect = document.getElementById('cameraSelect');
  let shouldScan = true;
  let rafId;

  // By default the dialog elements are hidden for browsers that don't support the dialog element.
  // If the dialog element is supported, we remove the hidden attribute and the dialogs' visibility
  // is controlled by using the `showModal()` and `close()` methods.
  if (isDialogElementSupported()) {
    globalActionsEl?.removeAttribute('hidden');
    historyDialog?.removeAttribute('hidden');
    settingsDialog?.removeAttribute('hidden');
  }

  const { barcodeReaderError } = await BarcodeReader.setup();

  if (barcodeReaderError) {
    const alertEl = document.getElementById('barcodeReaderError');

    shouldScan = false;
    globalActionsEl?.setAttribute('hidden', '');
    tabGroupEl?.setAttribute('hidden', '');
    alertEl?.removeAttribute('hidden');
    alertEl.textContent = barcodeReaderError?.message;
    return; // Stop the script execution as BarcodeDetector API is not supported.
  }

  const supportedBarcodeFormats = await BarcodeReader.getSupportedFormats();
  const [, settings] = await getSettings();
  const intitialFormats = settings?.formats || supportedBarcodeFormats;
  let barcodeReader = await BarcodeReader.create(intitialFormats);

  videoCaptureEl.addEventListener('video-capture:video-play', handleVideoCapturePlay, {
    once: true
  });

  videoCaptureEl.addEventListener('video-capture:error', handleVideoCaptureError, {
    once: true
  });

  VideoCapture.defineCustomElement();

  const videoCaptureShadowRoot = videoCaptureEl?.shadowRoot;
  const videoCaptureVideoEl = videoCaptureShadowRoot?.querySelector('video');
  const videoCaptureActionsEl = videoCaptureShadowRoot?.querySelector('[part="actions-container"]');

  dropzoneEl.accept = ACCEPTED_MIME_TYPES.join(',');
  bsSettingsEl.supportedFormats = supportedBarcodeFormats;

  /**
   * Scans for barcodes.
   * If a barcode is detected, it stops scanning and displays the result.
   *
   * @returns {Promise<void>} - A Promise that resolves when the barcode is detected.
   */
  async function scan() {
    log('Scanning...');

    scanInstructionsEl?.removeAttribute('hidden');

    try {
      const barcode = await barcodeReader.detect(videoCaptureVideoEl);
      const barcodeValue = barcode?.rawValue ?? '';

      if (!barcodeValue) {
        throw new Error(NO_BARCODE_DETECTED);
      }

      window.cancelAnimationFrame(rafId);
      showResult(cameraPanel, barcodeValue);
      bsHistoryEl?.add(barcodeValue);
      scanInstructionsEl?.setAttribute('hidden', '');
      scanBtn?.removeAttribute('hidden');
      scanFrameEl?.setAttribute('hidden', '');
      videoCaptureActionsEl?.setAttribute('hidden', '');
      triggerScanEffects();
      return;
    } catch {
      // If no barcode is detected, the error is caught here.
      // We can ignore the error and continue scanning.
    }

    if (shouldScan) {
      rafId = window.requestAnimationFrame(() => scan());
    }
  }

  /**
   * Handles the click event on the scan button.
   * It is responsible for clearing previous results and starting the scan process again.
   */
  function handleScanButtonClick() {
    scanBtn?.setAttribute('hidden', '');
    scanFrameEl?.removeAttribute('hidden');
    videoCaptureActionsEl?.removeAttribute('hidden');
    hideResult(cameraPanel);
    scan();
  }

  /**
   * Handles the tab show event.
   * It is responsible for starting or stopping the scan process based on the selected tab.
   *
   * @param {CustomEvent} evt - The event object.
   */
  function handleTabShow(evt) {
    const tabId = evt.detail.tabId;
    const videoCaptureEl = document.querySelector('video-capture'); // Get the latest instance of video-capture element to ensure we don't use the cached one.

    if (tabId === 'cameraTab') {
      shouldScan = true;

      if (!videoCaptureEl) {
        return;
      }

      const hasResult = cameraPanel.querySelector('bs-result') != null;

      if (!videoCaptureEl.loading && !hasResult) {
        scanFrameEl?.removeAttribute('hidden');
        videoCaptureActionsEl?.removeAttribute('hidden');
        scan();
      }

      if (typeof videoCaptureEl.startVideoStream === 'function') {
        const videoDeviceId = cameraSelect?.value || undefined;
        videoCaptureEl.startVideoStream(videoDeviceId);
      }
    } else if (tabId === 'fileTab') {
      shouldScan = false;

      if (videoCaptureEl != null && typeof videoCaptureEl.stopVideoStream === 'function') {
        videoCaptureEl.stopVideoStream();
      }

      scanFrameEl?.setAttribute('hidden', '');
      videoCaptureActionsEl?.setAttribute('hidden', '');
    }
  }

  /**
   * Handles the selection of a file.
   * It is responsible for displaying the selected file in the dropzone.
   *
   * @param {File} file - The selected file.
   */
  function handleFileSelect(file) {
    if (!file) {
      return;
    }

    const image = new Image();
    const reader = new FileReader();

    reader.onload = evt => {
      const data = evt.target.result;

      image.onload = async () => {
        try {
          const barcode = await barcodeReader.detect(image);
          const barcodeValue = barcode?.rawValue ?? '';

          if (!barcodeValue) {
            throw new Error(NO_BARCODE_DETECTED);
          }

          showResult(filePanel, barcodeValue);
          bsHistoryEl?.add(barcodeValue);
          triggerScanEffects();
        } catch (err) {
          log(err);
          showResult(filePanel, NO_BARCODE_DETECTED);
          triggerScanEffects({ success: false });
        }
      };

      image.src = data;
      image.alt = 'Image preview';

      dropzoneEl.replaceChildren();

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
      dropzoneEl.prepend(preview);
    };

    reader.readAsDataURL(file);
  }

  /**
   * Handles the drop event on the dropzone.
   *
   * @param {CustomEvent} evt - The event object.
   */
  function handleFileDrop(evt) {
    const file = evt.detail.acceptedFiles[0];
    handleFileSelect(file);
  }

  /**
   * Handles the resize event on the video-capture element.
   * It is responsible for resizing the scan frame based on the video element.
   */
  function handleVideoCaptureResize() {
    resizeScanFrame(videoCaptureEl.shadowRoot.querySelector('video'), scanFrameEl);
  }

  /**
   * Handles the video play event on the video-capture element.
   * It is responsible for displaying the scan frame and starting the scan process.
   * It also handles the zoom controls if the browser supports it.
   *
   * @param {CustomEvent} evt - The event object.
   */
  async function handleVideoCapturePlay(evt) {
    scanFrameEl?.removeAttribute('hidden');
    resizeScanFrame(evt.detail.video, scanFrameEl);
    scan();

    const trackSettings = evt.target.getTrackSettings();
    const trackCapabilities = evt.target.getTrackCapabilities();
    const zoomLevelEl = document.getElementById('zoomLevel');

    // Torch CTA
    if (trackCapabilities?.torch) {
      torchButton?.addEventListener('click', handleTorchButtonClick);
      torchButton?.removeAttribute('hidden');

      if (videoCaptureEl.hasAttribute('torch')) {
        toggleTorchButtonStatus({ el: torchButton, isTorchOn: true });
      }
    }

    // Zoom controls
    if (trackSettings?.zoom && trackCapabilities?.zoom) {
      const zoomControls = document.getElementById('zoomControls');
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
        videoCaptureEl.zoom = currentZoom;
      };

      zoomControls?.addEventListener('click', handleZoomControlsClick);
      zoomControls?.removeAttribute('hidden');
      zoomLevelEl.textContent = currentZoom.toFixed(1);
    }

    // Camera select
    const videoInputDevices = await VideoCapture.getVideoInputDevices();

    videoInputDevices.forEach((device, index) => {
      const option = document.createElement('option');
      option.value = device.deviceId;
      option.textContent = device.label || `Camera ${index + 1}`;
      cameraSelect.appendChild(option);
    });

    if (videoInputDevices.length > 1) {
      cameraSelect?.addEventListener('change', handleCameraSelectChange);
      cameraSelect?.removeAttribute('hidden');
    }
  }

  /**
   * Handles the error event on the video-capture element.
   * It is responsible for displaying an error message if the camera cannot be accessed or permission is denied.
   *
   * @param {CustomEvent} evt - The event object.
   */
  function handleVideoCaptureError(evt) {
    const error = evt.detail.error;

    if (error.name === 'NotFoundError') {
      // If the browser cannot find all media tracks with the specified types that meet the constraints given.
      return;
    }

    const errorMessage =
      error.name === 'NotAllowedError'
        ? 'Permission to use webcam was denied or video Autoplay is disabled. Reload the page to give appropriate permissions to webcam.'
        : error.message;

    cameraPanel.innerHTML = /* html */ `<div class="alert alert-danger" role="alert" style="margin: 0;">${errorMessage}</div>`;
  }

  /**
   * Handles the settings button click event.
   * It is responsible for displaying the settings dialog.
   */
  function handleSettingsButtonClick() {
    settingsDialog.open = true;
  }

  /**
   * Handles the change event on the settings form.
   * It is responsible for saving the settings to persistent storage and updating the settings.
   *
   * @param {Event} evt - The event object.
   */
  async function handleSettingsFormChange(evt) {
    evt.preventDefault();

    const settings = {};
    const formData = new FormData(settingsForm);
    const generalSettings = formData.getAll('general-settings');
    const formatsSettings = formData.getAll('formats-settings');

    generalSettings.forEach(value => (settings[value] = true));
    settings.formats = formatsSettings;
    setSettings(settings);

    if (evt.target.name === 'formats-settings') {
      barcodeReader = await BarcodeReader.create(formatsSettings);
    }
  }

  /**
   * Handles the click event on the history button.
   * It is responsible for displaying the history dialog.
   */
  function handleHistoryButtonClick() {
    historyDialog.open = true;
  }

  /**
   * Handles the click event on the torch button.
   * It is responsible for toggling the torch on and off.
   *
   * @param {MouseEvent} evt - The event object.
   */
  function handleTorchButtonClick(evt) {
    videoCaptureEl.torch = !videoCaptureEl.torch;

    toggleTorchButtonStatus({
      el: evt.currentTarget,
      isTorchOn: videoCaptureEl.hasAttribute('torch')
    });
  }

  /**
   * Handles the change event on the camera select element.
   * It is responsible for restarting the video stream with the selected video input device id.
   *
   * @param {Event} evt - The event object.
   */
  function handleCameraSelectChange(evt) {
    if (typeof videoCaptureEl.restartVideoStream !== 'function') {
      return;
    }

    const videoDeviceId = evt.target.value || undefined;
    videoCaptureEl.restartVideoStream(videoDeviceId);
  }

  /**
   * Handles the visibility change event on the document.
   * It is responsible for stopping the scan process when the document is not visible.
   */
  function handleDocumentVisibilityChange() {
    const selectedTab = tabGroupEl.querySelector('[selected]');
    const tabId = selectedTab.getAttribute('id');

    if (tabId !== 'cameraTab') {
      return;
    }

    if (document.visibilityState === 'hidden') {
      shouldScan = false;

      if (videoCaptureEl != null && typeof videoCaptureEl.stopVideoStream === 'function') {
        videoCaptureEl.stopVideoStream();
      }
    } else {
      shouldScan = true;

      // Get the latest instance of video-capture element to ensure we don't use the cached one.
      const videoCaptureEl = document.querySelector('video-capture');

      if (!videoCaptureEl) {
        return;
      }

      if (!videoCaptureEl.loading && !cameraPanel.querySelector('bs-result')) {
        scan();
      }

      if (typeof videoCaptureEl.startVideoStream === 'function') {
        const videoDeviceId = cameraSelect?.value || undefined;
        videoCaptureEl.startVideoStream(videoDeviceId);
      }
    }
  }

  /**
   * Handles the escape key press event on the document.
   * It is responsible for triggering the scan button click event if there is already a barcode detected.
   */
  function handleDocumentEscapeKey() {
    const cameraTabSelected = tabGroupEl.querySelector('#cameraTab').hasAttribute('selected');
    const scanBtnVisible = !scanBtn.hidden;
    const settingsDialogOpen = settingsDialog.hasAttribute('open');
    const historyDialogOpen = historyDialog.hasAttribute('open');
    const anyDialogOpen = settingsDialogOpen || historyDialogOpen;

    if (!scanBtnVisible || !cameraTabSelected || anyDialogOpen) {
      return;
    }

    scanBtn.click();
  }

  /**
   * Handles the key down event on the document.
   */
  function handleDocumentKeyDown(evt) {
    if (evt.key === 'Escape') {
      handleDocumentEscapeKey();
    }
  }

  scanBtn.addEventListener('click', handleScanButtonClick);
  tabGroupEl.addEventListener('a-tab-show', debounce(handleTabShow, 250));
  dropzoneEl.addEventListener('files-dropzone-drop', handleFileDrop);
  resizeObserverEl.addEventListener('resize-observer:resize', handleVideoCaptureResize);
  settingsBtn.addEventListener('click', handleSettingsButtonClick);
  settingsForm.addEventListener('change', debounce(handleSettingsFormChange, 500));
  historyBtn.addEventListener('click', handleHistoryButtonClick);
  document.addEventListener('visibilitychange', handleDocumentVisibilityChange);
  document.addEventListener('keydown', handleDocumentKeyDown);
})();

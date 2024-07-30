import '@georapbox/a-tab-group/dist/a-tab-group.js';
import '@georapbox/web-share-element/dist/web-share-defined.js';
import '@georapbox/files-dropzone-element/dist/files-dropzone-defined.js';
import { isWebShareSupported } from '@georapbox/web-share-element/dist/is-web-share-supported.js';
import '@georapbox/resize-observer-element/dist/resize-observer-defined.js';
import { CapturePhoto } from '@georapbox/capture-photo-element/dist/capture-photo.js';
import { NO_BARCODE_DETECTED, ACCEPTED_MIME_TYPES } from './constants.js';
import { getHistory, setSettings } from './services/storage.js';
import { debounce } from './utils/debounce.js';
import { log } from './utils/log.js';
import { renderSupportedFormats } from './helpers/renderSupportedFormats.js';
import {
  addToHistory,
  removeFromHistory,
  emptyHistory,
  renderHistoryList
} from './helpers/history.js';
import { hideResult, showResult } from './helpers/results.js';
import { triggerScanEffects } from './helpers/triggerScanEffects.js';
import { resizeScanFrame } from './helpers/resizeScanFrame.js';
import { BarcodeReader } from './helpers/BarcodeReader.js';
import { initializeSettingsForm } from './helpers/initializeSettingsForm.js';
import './components/clipboard-copy.js';

(async function () {
  const tabGroupEl = document.querySelector('a-tab-group');
  const cameraPanel = document.getElementById('cameraPanel');
  const capturePhotoEl = document.querySelector('capture-photo');
  const cameraResultsEl = document.getElementById('cameraResults');
  const fileResultsEl = document.getElementById('fileResults');
  const scanInstructionsEl = document.getElementById('scanInstructions');
  const scanBtn = document.getElementById('scanBtn');
  const dropzoneEl = document.getElementById('dropzone');
  const resizeObserverEl = document.querySelector('resize-observer');
  const scanFrameEl = document.getElementById('scanFrame');
  const globalActionsEl = document.getElementById('globalActions');
  const historyBtn = document.getElementById('historyBtn');
  const historyDialog = document.getElementById('historyDialog');
  const settingsBtn = document.getElementById('settingsBtn');
  const settingsDialog = document.getElementById('settingsDialog');
  const settingsForm = document.forms['settings-form'];
  let shouldScan = true;
  let rafId;

  const { barcodeReader, barcodeFormats, barcodeReaderError } = await BarcodeReader.init();

  if (barcodeReaderError) {
    const alertEl = document.getElementById('barcodeReaderError');

    shouldScan = false;
    globalActionsEl.hidden = true;
    tabGroupEl.hidden = true;
    alertEl.hidden = false;
    alertEl.textContent = barcodeReaderError?.message;
    return; // Stop the script execution as BarcodeDetector API is not supported.
  }

  capturePhotoEl.addEventListener('capture-photo:video-play', handleCapturePhotoVideoPlay, {
    once: true
  });

  capturePhotoEl.addEventListener('capture-photo:error', handleCapturePhotoError, {
    once: true
  });

  CapturePhoto.defineCustomElement();

  const capturePhotoVideoEl = capturePhotoEl?.shadowRoot?.querySelector('video');

  dropzoneEl.accept = ACCEPTED_MIME_TYPES.join(',');
  initializeSettingsForm(settingsForm);
  renderSupportedFormats(barcodeFormats);
  renderHistoryList((await getHistory()).value || []);

  if (!isWebShareSupported()) {
    document.querySelectorAll('web-share').forEach(el => {
      el.hidden = true;
      el.disabled = true;
    });
  }

  /**
   * Scans for barcodes.
   * If a barcode is detected, it stops scanning and displays the result.
   *
   * @returns {Promise<void>} - A Promise that resolves when the barcode is detected.
   */
  async function scan() {
    log('Scanning...');

    scanInstructionsEl.hidden = false;

    try {
      const barcode = await barcodeReader.detect(capturePhotoVideoEl);
      const barcodeValue = barcode?.rawValue ?? '';

      if (!barcodeValue) {
        throw new Error(NO_BARCODE_DETECTED);
      }

      window.cancelAnimationFrame(rafId);
      showResult(barcodeValue, cameraResultsEl);
      addToHistory(barcodeValue);
      scanInstructionsEl.hidden = true;
      scanBtn.hidden = false;
      scanFrameEl.hidden = true;
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
    scanBtn.hidden = true;
    scanFrameEl.hidden = false;
    hideResult(cameraResultsEl);
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
    const capturePhotoEl = document.querySelector('capture-photo'); // Get the latest instance of capture-photo element to ensure we don't use the cached one.

    switch (tabId) {
      case 'cameraTab':
        shouldScan = true;

        if (!capturePhotoEl) {
          return;
        }

        if (!capturePhotoEl.loading && !cameraResultsEl.querySelector('.results__item')) {
          scan();
        }

        if (typeof capturePhotoEl.startVideoStream === 'function') {
          capturePhotoEl.startVideoStream();
        }

        break;
      case 'fileTab':
        shouldScan = false;

        if (capturePhotoEl != null && typeof capturePhotoEl.stopVideoStream === 'function') {
          capturePhotoEl.stopVideoStream();
        }

        break;
      default:
        break;
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

          showResult(barcodeValue, fileResultsEl);
          addToHistory(barcodeValue);
          triggerScanEffects();
        } catch (err) {
          log(err);
          showResult(NO_BARCODE_DETECTED, fileResultsEl);
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
   * Handles the resize event on the capture-photo element.
   * It is responsible for resizing the scan frame based on the video element.
   */
  function handleCapturePhotoResize() {
    resizeScanFrame(capturePhotoEl.shadowRoot.querySelector('video'), scanFrameEl);
  }

  /**
   * Handles the video play event on the capture-photo element.
   * It is responsible for displaying the scan frame and starting the scan process.
   * It also handles the zoom controls if the browser supports it.
   *
   * @param {CustomEvent} evt - The event object.
   */
  function handleCapturePhotoVideoPlay(evt) {
    scanFrameEl.hidden = false;
    resizeScanFrame(evt.detail.video, scanFrameEl);
    scan();

    const trackSettings = evt.target.getTrackSettings();
    const trackCapabilities = evt.target.getTrackCapabilities();
    const zoomLevelEl = document.getElementById('zoomLevel');

    if (trackSettings?.zoom && trackCapabilities?.zoom) {
      const zoomControls = document.getElementById('zoomControls');
      const minZoom = trackCapabilities?.zoom?.min || 0;
      const maxZoom = trackCapabilities?.zoom?.max || 10;
      let currentZoom = trackSettings?.zoom || 1;

      zoomControls.hidden = false;
      zoomLevelEl.textContent = currentZoom;

      const handleZoomControlsClick = evt => {
        const zoomInBtn = evt.target.closest('[data-action="zoom-in"]');
        const zoomOutBtn = evt.target.closest('[data-action="zoom-out"]');

        if (zoomInBtn && currentZoom < maxZoom) {
          currentZoom += 0.5;
        }

        if (zoomOutBtn && currentZoom > minZoom) {
          currentZoom -= 0.5;
        }

        zoomLevelEl.textContent = currentZoom;
        capturePhotoEl.zoom = currentZoom;
      };

      zoomControls.addEventListener('click', handleZoomControlsClick);
    }
  }

  /**
   * Handles the error event on the capture-photo element.
   * It is responsible for displaying an error message if the camera cannot be accessed or permission is denied.
   *
   * @param {CustomEvent} evt - The event object.
   */
  function handleCapturePhotoError(evt) {
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
    settingsDialog.showModal();
  }

  /**
   * Handles the click event on the settings dialog.
   *
   * @param {MouseEvent} evt - The event object.
   */
  function handleSettingsDialogClick(evt) {
    if (evt.target !== evt.currentTarget) {
      return;
    }

    settingsDialog.close();
  }

  /**
   * Handles the change event on the settings form.
   * It is responsible for saving the settings to persistent storage and updating the settings.
   *
   * @param {Event} evt - The event object.
   */
  function handleSettingsFormChange(evt) {
    const settings = {};
    const checkboxes = evt.currentTarget.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(item => (settings[item.name] = item.checked));
    setSettings(settings);
  }

  /**
   * Handles the click event on the history button.
   * It is responsible for displaying the history dialog.
   */
  function handleHistoryButtonClick() {
    historyDialog.showModal();
  }

  /**
   * Handles the click event on the history dialog.
   * It is responsible for closing the dialog, deleting an item from the history, or emptying the history.
   *
   * @param {MouseEvent} evt - The event object.
   */
  function handleHistoryDialogClick(evt) {
    const target = evt.target;

    // Close the dialog if the click is on the dialog itself
    if (target === evt.currentTarget) {
      historyDialog.close();
      return;
    }

    // Handle delete action
    if (target.closest('[data-action="delete"]')) {
      const value = target.closest('li').dataset.value;

      if (window.confirm(`Delete ${value}?`)) {
        removeFromHistory(value);
        return;
      }
    }

    // Handle empty history action
    if (target.closest('#emptyHistoryBtn')) {
      if (window.confirm('Are you sure you want to empty history?')) {
        emptyHistory();
        return;
      }
    }
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

      if (capturePhotoEl != null && typeof capturePhotoEl.stopVideoStream === 'function') {
        capturePhotoEl.stopVideoStream();
      }
    } else {
      shouldScan = true;

      // Get the latest instance of capture-photo element to ensure we don't use the cached one.
      const capturePhotoEl = document.querySelector('capture-photo');

      if (!capturePhotoEl) {
        return;
      }

      if (!capturePhotoEl.loading && !cameraResultsEl.querySelector('.results__item')) {
        scan();
      }

      if (typeof capturePhotoEl.startVideoStream === 'function') {
        capturePhotoEl.startVideoStream();
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
  resizeObserverEl.addEventListener('resize-observer:resize', handleCapturePhotoResize);
  settingsBtn.addEventListener('click', handleSettingsButtonClick);
  settingsDialog.addEventListener('click', handleSettingsDialogClick);
  settingsForm.addEventListener('change', handleSettingsFormChange);
  historyBtn.addEventListener('click', handleHistoryButtonClick);
  historyDialog.addEventListener('click', handleHistoryDialogClick);
  document.addEventListener('visibilitychange', handleDocumentVisibilityChange);
  document.addEventListener('keydown', handleDocumentKeyDown);
})();

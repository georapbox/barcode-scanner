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
import { emptyResults, createResult } from './helpers/results.js';
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
  const historyList = document.getElementById('historyList');
  const deleteHistoryBtn = document.getElementById('deleteHistoryBtn');
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

  capturePhotoEl.addEventListener(
    'capture-photo:video-play',
    evt => {
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

        zoomControls.addEventListener('click', evt => {
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
        });
      }
    },
    {
      once: true
    }
  );

  capturePhotoEl.addEventListener(
    'capture-photo:error',
    evt => {
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
    },
    {
      once: true
    }
  );

  CapturePhoto.defineCustomElement();

  const capturePhotoVideoEl = capturePhotoEl.shadowRoot.querySelector('video');

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

  async function scan() {
    log('Scanning...');

    scanInstructionsEl.hidden = false;

    try {
      let barcode = {};
      barcode = await barcodeReader.detect(capturePhotoVideoEl);
      window.cancelAnimationFrame(rafId);
      emptyResults(cameraResultsEl);
      createResult(barcode.rawValue, cameraResultsEl);
      addToHistory(barcode.rawValue);
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
          emptyResults(fileResultsEl);
          createResult(barcode.rawValue, fileResultsEl);
          addToHistory(barcode.rawValue);
          triggerScanEffects();
        } catch {
          emptyResults(fileResultsEl);
          createResult(NO_BARCODE_DETECTED, fileResultsEl);
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

  scanBtn.addEventListener('click', () => {
    scanBtn.hidden = true;
    scanFrameEl.hidden = false;
    emptyResults(cameraResultsEl);
    cameraResultsEl.close();
    scan();
  });

  tabGroupEl.addEventListener(
    'a-tab-show',
    debounce(evt => {
      const tabId = evt.detail.tabId;

      if (tabId === 'cameraTab') {
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

      if (tabId === 'fileTab') {
        shouldScan = false;

        if (capturePhotoEl != null && typeof capturePhotoEl.stopVideoStream === 'function') {
          capturePhotoEl.stopVideoStream();
        }
      }
    }, 250)
  );

  dropzoneEl.addEventListener('files-dropzone-drop', evt => {
    handleFileSelect(evt.detail.acceptedFiles[0]);
  });

  resizeObserverEl.addEventListener('resize-observer:resize', () => {
    resizeScanFrame(capturePhotoEl.shadowRoot.querySelector('video'), scanFrameEl);
  });

  settingsBtn.addEventListener('click', () => {
    settingsDialog.showModal();
  });

  historyBtn.addEventListener('click', () => {
    historyDialog.showModal();
  });

  historyDialog.addEventListener('click', evt => {
    if (evt.target === evt.currentTarget) {
      historyDialog.close();
    }
  });

  settingsDialog.addEventListener('click', evt => {
    if (evt.target === evt.currentTarget) {
      settingsDialog.close();
    }
  });

  settingsForm.addEventListener('change', evt => {
    const settings = {};
    const checkboxes = evt.currentTarget.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(item => (settings[item.name] = item.checked));
    setSettings(settings);
  });

  historyList.addEventListener('click', evt => {
    const target = evt.target;

    if (target.closest('[data-action="delete"]')) {
      if (window.confirm('Delete item from history?')) {
        removeFromHistory(target.closest('li').dataset.value);
      }
    }
  });

  deleteHistoryBtn.addEventListener('click', () => {
    if (window.confirm('Are you sure you want to empty history?')) {
      emptyHistory();
    }
  });

  document.addEventListener('visibilitychange', () => {
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
  });

  document.addEventListener('keydown', evt => {
    const cameraTabSelected = tabGroupEl.querySelector('#cameraTab').hasAttribute('selected');
    const scanBtnVisible = !scanBtn.hidden;
    const settingsDialogOpen = settingsDialog.hasAttribute('open');
    const historyDialogOpen = historyDialog.hasAttribute('open');
    const anyDialogOpen = settingsDialogOpen || historyDialogOpen;
    const escapeKeyPressed = evt.key === 'Escape';
    const shouldRespond = scanBtnVisible && cameraTabSelected && escapeKeyPressed && !anyDialogOpen;

    if (!shouldRespond) {
      return;
    }

    scanBtn.click();
  });
})();

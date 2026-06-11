import '@georapbox/a-tab-group/dist/a-tab-group.js';
import '@georapbox/web-share-element/dist/web-share-defined.js';
import '@georapbox/files-dropzone-element/dist/files-dropzone-defined.js';
import '@georapbox/resize-observer-element/dist/resize-observer-defined.js';
import '@georapbox/modal-element/dist/modal-element-defined.js';
import '@georapbox/alert-element/dist/alert-element-defined.js';
import { ACCEPTED_MIME_TYPES } from './constants.js';
import { getSettings, setSettings } from './services/storage.js';
import { debounce } from './utils/debounce.js';
import { log } from './utils/log.js';
import { isDialogElementSupported } from './utils/isDialogElementSupported.js';
import { createResult } from './helpers/result.js';
import { triggerScanEffects } from './helpers/triggerScanEffects.js';
import { BarcodeReader } from './helpers/BarcodeReader.js';
import { toastify } from './helpers/toastify.js';
import { CustomClipboardCopy } from './components/clipboard-copy.js';
import { BSResult } from './components/bs-result.js';
import { BSSettings } from './components/bs-settings.js';
import { BSHistory } from './components/bs-history.js';
import { CameraScanner } from './components/camera-scanner.js';

CustomClipboardCopy.define();
BSResult.define();
BSSettings.define();
BSHistory.define();

(async function () {
  const tabGroupEl = document.querySelector('a-tab-group');
  const bsSettingsEl = document.querySelector('bs-settings');
  const bsHistoryEl = document.querySelector('bs-history');
  const cameraPanel = document.getElementById('cameraPanel');
  const cameraResultsEl = cameraPanel.querySelector('.results');
  const filePanel = document.getElementById('filePanel');
  const fileResultsEl = filePanel.querySelector('.results');
  const dropzoneEl = document.getElementById('dropzone');
  const globalActionsEl = document.getElementById('globalActions');
  const historyBtn = document.getElementById('historyBtn');
  const historyDialog = document.getElementById('historyDialog');
  const settingsBtn = document.getElementById('settingsBtn');
  const settingsDialog = document.getElementById('settingsDialog');
  const settingsForm = document.getElementById('settingsForm');

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
    this.stopScanning();
    globalActionsEl?.setAttribute('hidden', '');
    tabGroupEl?.setAttribute('hidden', '');

    const errorMessage = /* html */ `
      <strong>Barcode Detector API not supported</strong>
      <br>
      Your browser does not support the Barcode Detector API, which is required for this application to work.
    `;

    toastify(errorMessage, {
      variant: 'danger',
      announce: 'alert',
      trustDangerousInnerHTML: true,
      duration: Infinity
    });

    // Stop the script execution as BarcodeDetector API is not supported.
    return;
  }

  CameraScanner.define();

  const cameraScanner = document.querySelector('camera-scanner');

  const supportedBarcodeFormats = await BarcodeReader.getSupportedFormats();
  const [, settings] = await getSettings();
  const intitialFormats = settings?.formats || supportedBarcodeFormats;
  let barcodeReader = await BarcodeReader.create(intitialFormats);

  cameraScanner.barcodeReader = barcodeReader;

  dropzoneEl.accept = ACCEPTED_MIME_TYPES.join(',');
  bsSettingsEl.supportedFormats = supportedBarcodeFormats;

  /**
   * Handles the tab show event.
   * It is responsible for starting or stopping the scan process based on the selected tab.
   *
   * @param {CustomEvent} evt - The event object.
   */
  function handleTabShow(evt) {
    const tabId = evt.detail.tabId;

    if (tabId === 'cameraTab') {
      cameraScanner?.dispatchEvent(
        new CustomEvent('camera-scanner-visibility-change', {
          bubbles: true,
          composed: true,
          detail: { reason: 'tab-change', visibility: 'visible' }
        })
      );
    }

    if (tabId === 'fileTab') {
      cameraScanner?.dispatchEvent(
        new CustomEvent('camera-scanner-visibility-change', {
          bubbles: true,
          composed: true,
          detail: { reason: 'tab-change', visibility: 'hidden' }
        })
      );
    }
  }

  /**
   * Handles the selection of a file.
   * It is responsible for displaying the selected file in the dropzone.
   *
   * @param {File} file - The selected file.
   */
  async function handleFileSelect(file) {
    if (!file) {
      return;
    }

    const [, settings] = await getSettings();
    const image = new Image();
    const reader = new FileReader();

    reader.onload = evt => {
      const data = evt.target.result;

      image.onload = async () => {
        try {
          const barcode = await barcodeReader.detect(image);
          const barcodeValue = barcode?.rawValue ?? '';

          if (!barcodeValue) {
            throw new Error('No barcode detected');
          }

          createResult(fileResultsEl, barcodeValue);

          if (settings?.addToHistory) {
            bsHistoryEl?.add(barcodeValue);
          }

          triggerScanEffects();
        } catch (err) {
          log.error(err);

          toastify(
            '<strong>No barcode detected</strong><br><small>Please try again with a different image.</small>',
            { variant: 'danger', announce: 'alert', trustDangerousInnerHTML: true }
          );

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
      cameraScanner.barcodeReader = barcodeReader;
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
   * Handles the visibility change event on the document.
   * It is responsible for stopping the scan process when the document is not visible.
   */
  function handleDocumentVisibilityChange() {
    const selectedTab = tabGroupEl.querySelector('[selected]');
    const tabId = selectedTab.getAttribute('id');

    if (tabId === 'cameraTab') {
      if (document.visibilityState === 'hidden') {
        cameraScanner?.dispatchEvent(
          new CustomEvent('camera-scanner-visibility-change', {
            bubbles: true,
            composed: true,
            detail: { reason: 'page-visibility-change', visibility: 'hidden' }
          })
        );
      } else {
        cameraScanner?.dispatchEvent(
          new CustomEvent('camera-scanner-visibility-change', {
            bubbles: true,
            composed: true,
            detail: { reason: 'page-visibility-change', visibility: 'visible' }
          })
        );
      }
    }
  }

  /**
   * Handles success events from the history component.
   *
   * @param {CustomEvent<{ type: string, message: string }>} evt - The event object.
   */
  function handleHistorySuccess(evt) {
    const { type, message } = evt.detail;

    if (type === 'add') {
      toastify(message, { variant: 'success' });
    }
  }

  /**
   * Handles error events from the history component.
   *
   * @param {CustomEvent<{ type: string, message: string }>} evt - The event object.
   */
  function handleHistoryError(evt) {
    const { type, message } = evt.detail;

    if (type === 'remove' || type === 'empty') {
      historyDialog?.hide();
    }

    toastify(message, { variant: 'danger', announce: 'alert' });
  }

  /**
   * Handles the barcode detected event from the camera scanner component.
   *
   * @param {CustomEvent<{ barcodeValue: string }>} evt - The event object.
   */
  async function handleCameraBarcodeDetected(evt) {
    const { barcodeValue } = evt.detail;

    createResult(cameraResultsEl, barcodeValue);

    const [, settings] = await getSettings();
    if (settings?.addToHistory) {
      bsHistoryEl?.add(barcodeValue);
    }

    triggerScanEffects();
  }

  tabGroupEl.addEventListener('a-tab-show', handleTabShow);
  dropzoneEl.addEventListener('files-dropzone-drop', handleFileDrop);
  settingsBtn.addEventListener('click', handleSettingsButtonClick);
  settingsForm.addEventListener('change', debounce(handleSettingsFormChange, 500));
  historyBtn.addEventListener('click', handleHistoryButtonClick);
  cameraScanner.addEventListener('camera-scanner-barcode-detected', handleCameraBarcodeDetected);
  document.addEventListener('visibilitychange', handleDocumentVisibilityChange);
  document.addEventListener('bs-history-success', handleHistorySuccess);
  document.addEventListener('bs-history-error', handleHistoryError);
})();

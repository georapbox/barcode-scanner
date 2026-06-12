import { getSettings, setSettings } from '../shared/storage/storage.js';
import { BarcodeReader } from '../shared/barcode/barcode-reader.js';
import { debounce } from '../shared/utils/debounce.js';
import { log } from '../shared/utils/log.js';
import { createResult } from '../features/scan-results/create-result.js';
import { triggerScanEffects } from '../features/scan-results/scan-effects.js';
import { toastify } from '../shared/feedback/toastify.js';

export async function bootstrap() {
  const tabGroupEl = document.querySelector('a-tab-group');
  const scanSettingsEl = document.querySelector('scan-settings');
  const scanHistoryEl = document.querySelector('scan-history');
  const cameraPanel = document.getElementById('cameraPanel');
  const cameraResultsEl = cameraPanel.querySelector('.results');
  const filePanel = document.getElementById('filePanel');
  const fileResultsEl = filePanel.querySelector('.results');
  const globalActionsEl = document.getElementById('globalActions');
  const historyBtn = document.getElementById('historyBtn');
  const historyDialog = document.getElementById('historyDialog');
  const settingsBtn = document.getElementById('settingsBtn');
  const settingsDialog = document.getElementById('settingsDialog');
  const settingsForm = document.getElementById('settingsForm');

  // By default the dialog elements are hidden for browsers that don't support the dialog element.
  // If the dialog element is supported, we remove the hidden attribute and the dialogs' visibility
  // is controlled by using the `showModal()` and `close()` methods.
  if (typeof HTMLDialogElement === 'function') {
    globalActionsEl?.removeAttribute('hidden');
    historyDialog?.removeAttribute('hidden');
    settingsDialog?.removeAttribute('hidden');
  }

  const { barcodeReaderError } = await BarcodeReader.setup();

  if (barcodeReaderError) {
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

  const cameraScannerEl = document.querySelector('camera-scanner');
  const fileScannerEl = document.querySelector('file-scanner');

  const supportedBarcodeFormats = await BarcodeReader.getSupportedFormats();
  const [, settings] = await getSettings();
  const intitialFormats = settings?.formats || supportedBarcodeFormats;
  let barcodeReader = await BarcodeReader.create(intitialFormats);

  cameraScannerEl.barcodeReader = barcodeReader;
  fileScannerEl.barcodeReader = barcodeReader;
  scanSettingsEl.supportedFormats = supportedBarcodeFormats;

  /**
   * Handles the tab show event.
   * It is responsible for starting or stopping the scan process based on the selected tab.
   *
   * @param {CustomEvent} evt - The event object.
   */
  function handleTabShow(evt) {
    const tabId = evt.detail.tabId;

    if (tabId === 'cameraTab') {
      cameraScannerEl?.dispatchEvent(
        new CustomEvent('camera-scanner-visibility-change', {
          bubbles: true,
          composed: true,
          detail: { reason: 'tab-change', visibility: 'visible' }
        })
      );
    }

    if (tabId === 'fileTab') {
      cameraScannerEl?.dispatchEvent(
        new CustomEvent('camera-scanner-visibility-change', {
          bubbles: true,
          composed: true,
          detail: { reason: 'tab-change', visibility: 'hidden' }
        })
      );
    }
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
      cameraScannerEl.barcodeReader = barcodeReader;
      fileScannerEl.barcodeReader = barcodeReader;
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
        cameraScannerEl?.dispatchEvent(
          new CustomEvent('camera-scanner-visibility-change', {
            bubbles: true,
            composed: true,
            detail: { reason: 'page-visibility-change', visibility: 'hidden' }
          })
        );
      } else {
        cameraScannerEl?.dispatchEvent(
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
   * Handles the barcode detext success event from camera and file scanner.
   *
   * @param {CustomEvent<{ barcodeValue: string, source: string }>} evt - The event object.
   * @returns {Promise<void>}
   */
  async function handleBarcodeDetectSuccess(evt) {
    const { barcodeValue, source } = evt.detail;
    const resultsEl = source === 'camera-scanner' ? cameraResultsEl : fileResultsEl;

    createResult(resultsEl, barcodeValue);

    const [, settings] = await getSettings();
    if (settings?.addToHistory) {
      scanHistoryEl?.add(barcodeValue);
    }

    triggerScanEffects();
  }

  /**
   * Handles the barcode detect error event from camera and file scanner.
   *
   * @param {CustomEvent<{ error: Error, source: string }>} evt - The event object.
   * @returns {Promise<void>}
   */
  async function handleBarcodeDetectError(evt) {
    const { error } = evt.detail;

    log.error(error);

    toastify(
      '<strong>No barcode detected</strong><br><small>Please try again with a different image.</small>',
      { variant: 'danger', announce: 'alert', trustDangerousInnerHTML: true }
    );

    triggerScanEffects({ success: false });
  }

  cameraScannerEl.addEventListener('barcode-detect-success', handleBarcodeDetectSuccess);
  fileScannerEl.addEventListener('barcode-detect-success', handleBarcodeDetectSuccess);
  fileScannerEl.addEventListener('barcode-detect-error', handleBarcodeDetectError);
  tabGroupEl.addEventListener('a-tab-show', handleTabShow);
  settingsBtn.addEventListener('click', handleSettingsButtonClick);
  settingsForm.addEventListener('change', debounce(handleSettingsFormChange, 500));
  historyBtn.addEventListener('click', handleHistoryButtonClick);
  document.addEventListener('visibilitychange', handleDocumentVisibilityChange);
  document.addEventListener('scan-history-success', handleHistorySuccess);
  document.addEventListener('scan-history-error', handleHistoryError);
}

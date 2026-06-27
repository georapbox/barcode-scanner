import { log } from '../shared/utils/log.js';
import { toastify } from '../shared/feedback/toastify.js';
import { createResult } from '../features/scan-results/create-result.js';
import { triggerScanEffects } from '../features/scan-results/scan-effects.js';
import { getSettings } from '../features/settings/settings-storage.js';

export function createBarcodeDetectionController({
  cameraScannerEl,
  cameraScannerResultsEl,
  fileScannerEl,
  fileScannerResultsEl,
  historyEl
}) {
  /**
   * Handles the barcode detext success event from camera and file scanner.
   *
   * @param {CustomEvent<{barcodeValue: string, source: string}>} evt - The event object.
   * @returns {Promise<void>}
   */
  async function handleBarcodeDetectSuccess(evt) {
    const { barcodeValue, source } = evt.detail;
    const resultsEl = source === 'camera-scanner' ? cameraScannerResultsEl : fileScannerResultsEl;

    createResult(resultsEl, barcodeValue);

    const [, settings] = await getSettings();
    if (settings?.addToHistory) {
      historyEl.add(barcodeValue);
    }

    triggerScanEffects();
  }

  /**
   * Handles the barcode detect error event from camera and file scanner.
   *
   * @param {CustomEvent<{error: Error, source: string}>} evt - The event object.
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

  return function destroyBarcodeDetectionController() {
    cameraScannerEl.removeEventListener('barcode-detect-success', handleBarcodeDetectSuccess);
    fileScannerEl.removeEventListener('barcode-detect-success', handleBarcodeDetectSuccess);
    fileScannerEl.removeEventListener('barcode-detect-error', handleBarcodeDetectError);
  };
}

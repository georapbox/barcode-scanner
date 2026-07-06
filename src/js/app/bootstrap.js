import { BarcodeReader } from '../shared/barcode/barcode-reader.js';
import { toastify } from '../shared/feedback/toastify.js';
import { getSettings } from '../features/settings/settings-storage.js';
import { getAppElements } from './app-elements.js';
import { createScannerVisibilityController } from './scanner-visibility-controller.js';
import { createBarcodeDetectionController } from './barcode-detection-controller.js';
import { createSettingsController } from './settings-controller.js';
import { createHistoryController } from './history-controller.js';

export async function bootstrap() {
  const {
    tabsEl,
    cameraScannerEl,
    cameraScannerResultsEl,
    fileScannerEl,
    fileScannerResultsEl,
    historyEl,
    historyButtonEl,
    historyDialogEl,
    formatSettingsEl,
    settingsButtonEl,
    settingsDialogEl,
    settingsFormEl,
    appActionsEl
  } = getAppElements();

  // By default the dialog elements are hidden for browsers that don't support the dialog element.
  // If the dialog element is supported, we remove the hidden attribute and the dialogs' visibility
  // is controlled by using the `showModal()` and `close()` methods.
  if (typeof HTMLDialogElement === 'function') {
    appActionsEl.removeAttribute('hidden');
    historyDialogEl.removeAttribute('hidden');
    settingsDialogEl.removeAttribute('hidden');
  }

  const { barcodeReaderError } = await BarcodeReader.setup();

  if (barcodeReaderError) {
    appActionsEl.setAttribute('hidden', '');
    tabsEl.setAttribute('hidden', '');

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

  const supportedBarcodeFormats = await BarcodeReader.getSupportedFormats();
  const [, settings] = await getSettings();
  const initialFormats = settings?.formats || supportedBarcodeFormats;
  let barcodeReader = await BarcodeReader.create(initialFormats);

  cameraScannerEl.barcodeReader = barcodeReader;
  fileScannerEl.barcodeReader = barcodeReader;
  formatSettingsEl.supportedFormats = supportedBarcodeFormats;

  createScannerVisibilityController({
    tabsEl,
    cameraScannerEl
  });

  createBarcodeDetectionController({
    cameraScannerEl,
    cameraScannerResultsEl,
    fileScannerEl,
    fileScannerResultsEl,
    historyEl
  });

  createHistoryController({
    historyButtonEl,
    historyDialogEl
  });

  createSettingsController({
    settingsDialogEl,
    settingsButtonEl,
    settingsFormEl,
    onFormatsChange: async formats => {
      barcodeReader = await BarcodeReader.create(formats);
      cameraScannerEl.barcodeReader = barcodeReader;
      fileScannerEl.barcodeReader = barcodeReader;
    }
  });
}

import { BarcodeReader } from '../shared/barcode/barcode-reader.js';
import { toastify } from '../shared/feedback/toastify.js';
import { getSettings } from '../features/settings/settings-storage.js';
import { getAppElements } from './app-elements.js';
import { createScannerVisibilityController } from './scanner-visibility-controller.js';
import { createBarcodeDetectionController } from './barcode-detection-controller.js';
import { createSettingsController } from './settings-controller.js';
import { createHistoryController } from './history-controller.js';

export async function bootstrap() {
  const elements = getAppElements();

  // By default the dialog elements are hidden for browsers that don't support the dialog element.
  // If the dialog element is supported, we remove the hidden attribute and the dialogs' visibility
  // is controlled by using the `showModal()` and `close()` methods.
  if (typeof HTMLDialogElement === 'function') {
    elements.globalActions.removeAttribute('hidden');
    elements.history.dialog.removeAttribute('hidden');
    elements.settings.dialog.removeAttribute('hidden');
  }

  const { barcodeReaderError } = await BarcodeReader.setup();

  if (barcodeReaderError) {
    elements.globalActions.setAttribute('hidden', '');
    elements.tabs.component.setAttribute('hidden', '');

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

  elements.cameraScanner.component.barcodeReader = barcodeReader;
  elements.fileScanner.component.barcodeReader = barcodeReader;
  elements.settings.component.supportedFormats = supportedBarcodeFormats;

  createScannerVisibilityController({
    tabsEls: elements.tabs,
    cameraScannerEls: elements.cameraScanner
  });

  createBarcodeDetectionController({
    cameraScannerEls: elements.cameraScanner,
    fileScannerEls: elements.fileScanner,
    historyEls: elements.history
  });

  createHistoryController({
    historyEls: elements.history
  });

  createSettingsController({
    settingsEls: elements.settings,
    onFormatsChange: async formats => {
      barcodeReader = await BarcodeReader.create(formats);
      elements.cameraScanner.component.barcodeReader = barcodeReader;
      elements.fileScanner.component.barcodeReader = barcodeReader;
    }
  });
}

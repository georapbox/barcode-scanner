import { log } from '../utils/log.js';

// https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API#supported_barcode_formats
const WHITELISTED_FORMATS = [
  'aztec',
  'code_128',
  'code_39',
  'code_93',
  'codabar',
  'data_matrix',
  'ean_13',
  'ean_8',
  'itf',
  'pdf417',
  'qr_code',
  'upc_a',
  'upc_e'
];

/**
 * BarcodeReader class to detect barcodes from images or videos.
 *
 * @see https://developer.mozilla.org/docs/Web/API/BarcodeDetector
 */
class BarcodeReader {
  static async polyfill() {
    if (!('BarcodeDetector' in window)) {
      try {
        await import('barcode-detector');
        log.info('Using BarcodeDetector polyfill.');
      } catch (error) {
        throw new Error('BarcodeDetector API is not supported by your browser.', { cause: error });
      }
    } else {
      log.info('Using the native BarcodeDetector API.');
    }
  }

  /**
   * Get the supported barcode formats.
   *
   * @see https://developer.mozilla.org/docs/Web/API/BarcodeDetector/getSupportedFormats
   * @returns {Promise<Array<string>>} - Supported barcode formats
   */
  static async getSupportedFormats() {
    const nativeSupportedFormats = (await window.BarcodeDetector.getSupportedFormats()) || [];
    return WHITELISTED_FORMATS.filter(format => nativeSupportedFormats.includes(format));
  }

  /**
   * Create a new BarcodeReader instance.
   *
   * @param {Array<string>} supportedFormats - Supported barcode formats
   * @returns {Promise<BarcodeReader>} - New BarcodeReader instance
   */
  static async create(supportedFormats) {
    const isValidFormats = Array.isArray(supportedFormats) && supportedFormats.length > 0;
    const formats = isValidFormats ? supportedFormats : await BarcodeReader.getSupportedFormats();
    return new BarcodeReader(formats);
  }

  /**
   * Sets up BarcodeReader by polyfilling the BarcodeDetector API if needed.
   *
   * @returns {Promise<{ barcodeReaderError: Error }>} - BarcodeReader setup result
   */
  static async setup() {
    try {
      await BarcodeReader.polyfill();
      return { barcodeReaderError: null };
    } catch (error) {
      return {
        barcodeReaderError: error
      };
    }
  }

  /**
   * Create a new BarcodeReader instance.
   *
   * @param {Array<string>} formats - Supported barcode formats
   */
  constructor(formats) {
    this.barcodeReader = new window.BarcodeDetector({ formats });
  }

  /**
   * Detect barcodes from the provided source.
   *
   * @see https://developer.mozilla.org/docs/Web/API/BarcodeDetector/detect
   * @param {HTMLImageElement|HTMLVideoElement|ImageBitmap} source - Image or video element or ImageBitmap
   * @returns {Promise<BarcodeDetection>} - Barcode detection result
   */
  async detect(source) {
    if (!this.barcodeReader) {
      throw new Error('BarcodeReader is not initialized.');
    }

    const results = await this.barcodeReader.detect(source);

    if (Array.isArray(results) && results.length > 0) {
      const firstResult = results[0];

      log.info({
        rawValue: firstResult.rawValue,
        format: firstResult.format
      });

      return firstResult;
    } else {
      throw new Error('Could not detect barcode from provided source.');
    }
  }
}

export { BarcodeReader };

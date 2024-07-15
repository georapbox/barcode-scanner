import { log } from '../utils/log.js';

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
        log('Using BarcodeDetector polyfill.');
      } catch {
        throw new Error('BarcodeDetector API is not supported by your browser.');
      }
    } else {
      log('Using the native BarcodeDetector API.');
    }
  }

  /**
   * Get the supported barcode formats.
   *
   * @see https://developer.mozilla.org/docs/Web/API/BarcodeDetector/getSupportedFormats
   * @returns {Promise<Array<string>>} - Supported barcode formats
   */
  static async getSupportedFormats() {
    return await window.BarcodeDetector.getSupportedFormats();
  }

  /**
   * Create a new BarcodeReader instance.
   *
   * @returns {Promise<BarcodeReader>} - New BarcodeReader instance
   */
  static async create() {
    const formats = await window.BarcodeDetector.getSupportedFormats();
    return new BarcodeReader(formats);
  }

  /**
   * Initialize the BarcodeReader.
   *
   * @returns {Promise<{ barcodeReader: BarcodeReader, barcodeFormats: Array<string>, barcodeReaderError: Error }>} - BarcodeReader instance, supported formats, and error
   */
  static async init() {
    try {
      await BarcodeReader.polyfill();
      const barcodeReader = await BarcodeReader.create();
      const barcodeFormats = await BarcodeReader.getSupportedFormats();
      return { barcodeReader, barcodeFormats, barcodeReaderError: null };
    } catch (error) {
      return {
        barcodeReader: null,
        barcodeFormats: [],
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
      return results[0];
    } else {
      throw new Error('Could not detect barcode from provided source.');
    }
  }
}

export { BarcodeReader };

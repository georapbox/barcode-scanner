import { log } from '../utils/log.js';

export class BarcodeReader {
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

  static async getSupportedFormats() {
    return await window.BarcodeDetector.getSupportedFormats();
  }

  static async create() {
    const formats = await window.BarcodeDetector.getSupportedFormats();
    return new BarcodeReader(formats);
  }

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

  constructor(formats) {
    this.barcodeReader = new window.BarcodeDetector({ formats });
  }

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

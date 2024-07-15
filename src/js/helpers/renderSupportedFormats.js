/**
 * Renders the supported formats.
 *
 * @param {Array<string>} formats - Supported barcode formats
 */
export function renderSupportedFormats(formats) {
  if (!Array.isArray(formats) || formats.length === 0) {
    return;
  }

  const supportedFormatsEl = document.getElementById('supportedFormats');

  if (!supportedFormatsEl) {
    return;
  }

  supportedFormatsEl.textContent = `Supported formats: ${formats.join(', ')}`;
}

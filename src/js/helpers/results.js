/**
 * Removes the scanned result from the element where it is shown.
 *
 * @param {HTMLElement} element - The element to remove the result from.
 */
export function hideResult(element) {
  if (!element) {
    return;
  }

  const scanResultEl = element.querySelector('scan-result');
  scanResultEl?.remove();
}

/**
 * Creates and shows the scanned result inside the given element.
 *
 * @param {HTMLElement} element - The element to show the result in.
 * @param {string} value - The value to create the result with.
 */
export async function showResult(element, value) {
  if (!element || !value) {
    return;
  }

  const oldScanResultEl = element.querySelector('scan-result');

  if (oldScanResultEl) {
    oldScanResultEl.setAttribute('value', value);
  } else {
    const newScanResultEl = document.createElement('scan-result');
    newScanResultEl.setAttribute('value', value);
    newScanResultEl.setAttribute('role', 'alert');
    newScanResultEl.setAttribute('aria-live', 'assertive');
    newScanResultEl.setAttribute('aria-atomic', 'true');
    element.appendChild(newScanResultEl);
  }
}

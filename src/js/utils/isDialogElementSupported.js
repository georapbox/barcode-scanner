/**
 * Check if the dialog element is supported.
 *
 * @returns {boolean} - Returns true if the dialog element is supported.
 */
export function isDialogElementSupported() {
  return typeof HTMLDialogElement === 'function';
}

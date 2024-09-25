/**
 * Check if the dialog element is supported.
 *
 * @returns {boolean} - Returns true if the dialog element is supported.
 */
export const isDialogElementSupported = () => {
  return typeof HTMLDialogElement === 'function';
};

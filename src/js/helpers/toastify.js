/**
 * Displays a toast notification.
 *
 * @param {string} message - The message to display in the toast.
 * @param {Object} [options] - Options for the toast.
 * @param {number} [options.duration=5000] - Duration in milliseconds before the toast disappears.
 * @param {boolean} [options.closable=true] - Whether the toast can be closed by the user.
 * @param {string} [options.variant='neutral'] - The variant of the toast (e.g., 'success', 'danger', 'info').
 * @returns {Promise<AlertElement>} - A promise that resolves to the alert element.
 */
export function toastify(message, options = {}) {
  const defaults = {
    duration: 5000,
    closable: true,
    variant: 'neutral',
    alertStyles: ''
  };

  options = { ...defaults, ...options };

  const alert = Object.assign(document.createElement('alert-element'), {
    duration: options.duration,
    closable: options.closable,
    variant: options.variant,
    innerHTML: message
  });

  if (options.alertStyles) {
    alert.style.cssText = options.alertStyles;
  }

  return alert.toast();
}

import { toastify } from '../shared/feedback/toastify.js';

/**
 * Creates a controller for handling history dialog interactions and history events.
 *
 * @param {{historyButtonEl: HTMLElement, historyDialogEl: HTMLElement}} params - Controller dependencies.
 * @returns {Function} A function that removes the controller's event listeners.
 */
export function createHistoryController({ historyButtonEl, historyDialogEl }) {
  function handleHistoryButtonClick() {
    historyDialogEl.open = true;
  }

  function handleHistoryError(evt) {
    const { type, message } = evt.detail;

    if (type === 'remove' || type === 'empty') {
      historyDialogEl.hide();
    }

    toastify(message, { variant: 'danger', announce: 'alert' });
  }

  historyButtonEl.addEventListener('click', handleHistoryButtonClick);
  document.addEventListener('scan-history-error', handleHistoryError);

  return function destroyHistoryController() {
    historyButtonEl.removeEventListener('click', handleHistoryButtonClick);
    document.removeEventListener('scan-history-error', handleHistoryError);
  };
}

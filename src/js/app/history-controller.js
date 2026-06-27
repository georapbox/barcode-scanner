import { toastify } from '../shared/feedback/toastify.js';

export function createHistoryController({ historyButtonEl, historyDialogEl }) {
  /**
   * Handles the click event on the history button.
   * It is responsible for displaying the history dialog.
   */
  function handleHistoryButtonClick() {
    historyDialogEl.open = true;
  }

  /**
   * Handles success events from the history component.
   *
   * @param {CustomEvent<{type: string, message: string}>} evt - The event object.
   */
  function handleHistorySuccess(evt) {
    const { type, message } = evt.detail;

    if (type === 'add') {
      toastify(message, { variant: 'success' });
    }
  }

  /**
   * Handles error events from the history component.
   *
   * @param {CustomEvent<{type: string, message: string}>} evt - The event object.
   */
  function handleHistoryError(evt) {
    const { type, message } = evt.detail;

    if (type === 'remove' || type === 'empty') {
      historyDialogEl.hide();
    }

    toastify(message, { variant: 'danger', announce: 'alert' });
  }

  historyButtonEl.addEventListener('click', handleHistoryButtonClick);
  document.addEventListener('scan-history-success', handleHistorySuccess);
  document.addEventListener('scan-history-error', handleHistoryError);

  return function destroyHistoryController() {
    historyButtonEl.removeEventListener('click', handleHistoryButtonClick);
    document.removeEventListener('scan-history-success', handleHistorySuccess);
    document.removeEventListener('scan-history-error', handleHistoryError);
  };
}

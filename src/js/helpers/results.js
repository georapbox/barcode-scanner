import { isWebShareSupported } from '@georapbox/web-share-element/dist/is-web-share-supported.js';
import { getSettings } from '../services/storage.js';
import { NO_BARCODE_DETECTED } from '../constants.js';

/**
 * Empties the scanned barcode results.
 *
 * @param {HTMLDialogElement} resultDialog - The dialog element to empty the results.
 */
export function emptyResults(resultDialog) {
  resultDialog?.querySelector('.results__item')?.remove();
}

/**
 * Creates a result element with the given value.
 *
 * @param {string} value - The value to create the result with.
 * @param {HTMLDialogElement} resultDialog - The dialog element to create the result in.
 */
export async function createResult(value, resultDialog) {
  if (!value || !resultDialog) {
    return;
  }

  emptyResults(resultDialog);

  let resultItem;

  try {
    const { value: settings } = await getSettings();

    new URL(value);
    resultItem = document.createElement('a');
    resultItem.href = value;

    if (!settings?.openWebPageSameTab) {
      resultItem.setAttribute('target', '_blank');
      resultItem.setAttribute('rel', 'noreferrer noopener');
    }

    if (settings?.openWebPage) {
      resultItem.click();
    }
  } catch {
    resultItem = document.createElement('span');
  }

  resultItem.className = 'results__item';
  resultItem.classList.toggle('results__item--no-barcode', value === NO_BARCODE_DETECTED);
  resultItem.textContent = value;

  resultDialog.insertBefore(resultItem, resultDialog.querySelector('.results__actions'));

  const clipboarCopyEl = resultDialog.querySelector('custom-clipboard-copy');
  const webShareEl = resultDialog.querySelector('web-share');
  const isValidValue = value !== NO_BARCODE_DETECTED;

  if (clipboarCopyEl) {
    clipboarCopyEl.disabled = !isValidValue;
    clipboarCopyEl.hidden = !isValidValue;
  }

  if (webShareEl && isWebShareSupported()) {
    webShareEl.disabled = !isValidValue;
    webShareEl.hidden = !isValidValue;

    if (isValidValue) {
      webShareEl.setAttribute('share-text', value);
    } else {
      webShareEl.removeAttribute('share-text');
    }
  }

  resultDialog.show();
}

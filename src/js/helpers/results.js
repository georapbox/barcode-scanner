import { isWebShareSupported } from '@georapbox/web-share-element/dist/is-web-share-supported.js';
import { getSettings } from '../services/storage.js';
import { NO_BARCODE_DETECTED } from '../constants.js';

/**
 * Removes and hides the scanned result.
 *
 * @param {HTMLDialogElement} dialog - The dialog element to empty the results.
 */
export function hideResult(dialog) {
  if (!dialog) {
    return;
  }

  dialog.querySelector('.results__item')?.remove();
  dialog.close();
}

/**
 * Creates and shows the scanned result.
 *
 * @param {string} value - The value to create the result with.
 * @param {HTMLDialogElement} dialog - The dialog element to create the result in.
 */
export async function showResult(value, dialog) {
  if (!value || !dialog) {
    return;
  }

  dialog.querySelector('.results__item')?.remove();

  try {
    const { value: settings } = await getSettings();

    // Check if the value is a valid URL
    new URL(value);

    // Automatically open the URL in a new tab
    window.open(value, '_blank');

    // Optionally, you can still add the result to the dialog for history purposes
    let resultItem = document.createElement('a');
    resultItem.href = value;
    resultItem.className = 'results__item';
    resultItem.textContent = value;

    if (!settings?.openWebPageSameTab) {
      resultItem.setAttribute('target', '_blank');
      resultItem.setAttribute('rel', 'noreferrer noopener');
    }

    dialog.insertBefore(resultItem, dialog.querySelector('.results__actions'));
  } catch {
    let resultItem = document.createElement('span');
    resultItem.className = 'results__item results__item--no-barcode';
    resultItem.textContent = value;

    dialog.insertBefore(resultItem, dialog.querySelector('.results__actions'));
  }

  dialog.show();

  // Optionally, handle clipboard and web-share elements
  const clipboarCopyEl = dialog.querySelector('custom-clipboard-copy');
  const webShareEl = dialog.querySelector('web-share');
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
}

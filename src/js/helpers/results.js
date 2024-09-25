import { isWebShareSupported } from '@georapbox/web-share-element/dist/is-web-share-supported.js';
import { getSettings } from '../services/storage.js';
import { NO_BARCODE_DETECTED } from '../constants.js';

/**
 * Removes and hides the scanned result.
 *
 * @param {HTMLDivElement} resultEl - The element to remove the result from.
 */
export function hideResult(resultEl) {
  if (!resultEl) {
    return;
  }

  resultEl.querySelector('.results__item')?.remove();
  resultEl.hidden = true;
}

/**
 * Creates and shows the scanned result.
 *
 * @param {string} value - The value to create the result with.
 * @param {HTMLDivElement} resultEl - The element to show the result in.
 */
export async function showResult(value, resultEl) {
  if (!value || !resultEl) {
    return;
  }

  resultEl.querySelector('.results__item')?.remove();

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

  window.requestAnimationFrame(() => resultItem.focus());
  resultItem.className = 'results__item';
  resultItem.classList.toggle('results__item--no-barcode', value === NO_BARCODE_DETECTED);
  resultItem.textContent = value;

  resultEl.insertBefore(resultItem, resultEl.querySelector('.results__actions'));

  const clipboarCopyEl = resultEl.querySelector('custom-clipboard-copy');
  const webShareEl = resultEl.querySelector('web-share');
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

  resultEl.hidden = false;
}

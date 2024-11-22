/**
 * Removes the scanned result from the element where it is shown.
 *
 * @param {HTMLElement} element - The element to remove the result from.
 */
export function hideResult(element) {
  if (!element) {
    return;
  }

  element.querySelector('bs-result')?.remove();
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

  const oldResultEl = element.querySelector('bs-result');

  if (oldResultEl) {
    oldResultEl.setAttribute('value', value);
  } else {
    const newResultEl = document.createElement('bs-result');
    newResultEl.setAttribute('value', value);
    newResultEl.setAttribute('role', 'alert');
    newResultEl.setAttribute('aria-live', 'assertive');
    newResultEl.setAttribute('aria-atomic', 'true');
    element.appendChild(newResultEl);
  }
}

/**
 * Creates and shows the scanned result inside the given element.
 *
 * @param {HTMLElement} containerEl - The element to show the result in.
 * @param {string} value - The value to create the result with.
 */
export async function createResult(containerEl, value) {
  if (!containerEl || !value) {
    return;
  }

  // Avoid using querySelector with attribute selectors here because `value` may
  // contain newlines or other characters that make the selector invalid.
  // Instead, query all results and match the attribute value in JS.
  const existingResultEls = Array.from(containerEl.querySelectorAll('bs-result'));
  const matchingResultEl = existingResultEls.find(el => el.getAttribute('value') === value);

  if (matchingResultEl) {
    matchingResultEl.remove();
  }

  const newResultEl = document.createElement('bs-result');
  newResultEl.setAttribute('value', value);
  newResultEl.setAttribute('role', 'alert');
  newResultEl.setAttribute('aria-live', 'assertive');
  newResultEl.setAttribute('aria-atomic', 'true');
  containerEl.insertBefore(newResultEl, containerEl.firstElementChild);
  containerEl.scrollTop = 0;
}

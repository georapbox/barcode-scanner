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

  // const prevResultEl = containerEl.querySelector('bs-result[value="' + value + '"]');
  const prevResultEl = containerEl.querySelector(`bs-result[value="${value}"]`);

  if (prevResultEl) {
    prevResultEl.remove();
  }

  const newResultEl = document.createElement('bs-result');
  newResultEl.setAttribute('value', value);
  newResultEl.setAttribute('role', 'alert');
  newResultEl.setAttribute('aria-live', 'assertive');
  newResultEl.setAttribute('aria-atomic', 'true');
  containerEl.insertBefore(newResultEl, containerEl.firstElementChild);
  containerEl.scrollTop = 0;
}

/**
 * Toggles the torch button status.
 * The torch button has two icons, one for on and one for off.
 * This function toggles the visibility of the icons based on the torch state and updates the button title.
 *
 * @param {HTMLButtonElement} buttonEl - The torch button element.
 * @param {boolean} isTorchOn - The torch state.
 */
export function toggleTorchButtonStatus(options = {}) {
  const defaults = {
    el: document.getElementById('torchButton'),
    isTorchOn: false
  };
  const { el, isTorchOn } = { ...defaults, ...options };
  console.log(el, isTorchOn);
  const iconPaths = el.querySelectorAll('svg path');

  if (iconPaths.length !== 2) {
    return;
  }

  iconPaths[0].style.display = isTorchOn ? 'none' : 'block';
  iconPaths[1].style.display = isTorchOn ? 'block' : 'none';
  el.setAttribute('title', `Turn ${isTorchOn ? 'off' : 'on'} flash`);
}

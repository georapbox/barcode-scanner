/**
 * Vibrate the device.
 * If the device does not support vibration, this function will fail silently.
 *
 * @param {Number} [duration=0] - Duration in milliseconds
 */
export async function vibrate(duration = 0) {
  if (typeof window.navigator.vibrate !== 'function') {
    return;
  }

  try {
    window.navigator.vibrate(duration);
  } catch {
    // Fail silently...
  }
}

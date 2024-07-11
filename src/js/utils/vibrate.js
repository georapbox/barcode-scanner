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

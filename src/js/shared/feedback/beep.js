/**
 * Beep sound using the `AudioContext` interface.
 *
 * @param {Object} options - The options for the beep sound.
 * @param {Number} options.duration - The duration in milliseconds.
 * @param {Number} options.frequency - the frequency in Hz.
 * @param {Number} options.volume - The volume (0.0 to 1.0).
 * @param {String} options.type - the type of oscillator.
 * @param {Function} options.onEnded - Callback function to be called when the beep sound ends.
 */
export const beep = (() => {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext || window.audioContext)();

  if (!audioCtx) {
    return;
  }

  return options => {
    const { duration, frequency, volume, type, onEnded } = options;
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    if (volume) {
      gainNode.gain.value = volume;
    }

    if (frequency) {
      oscillator.frequency.value = frequency;
    }

    if (type) {
      oscillator.type = type;
    }

    if (typeof onEnded === 'function') {
      oscillator.onended = onEnded;
    }

    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + (duration || 500) / 1000);
  };
})();

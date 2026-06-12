/**
 * Beep sound using the `AudioContext` interface.
 *
 * @param {Object} options
 * @param {Number} options.duration - Duration in milliseconds
 * @param {Number} options.frequency - Frequency in Hz
 * @param {Number} options.volume - Volume
 * @param {String} options.type - Type of oscillator
 * @param {Function} options.onEnded - Callback function when the sound ends
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

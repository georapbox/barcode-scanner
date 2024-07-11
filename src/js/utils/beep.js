export const beep = (() => {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext || window.audioContext)();

  if (!audioCtx) {
    return;
  }

  return ({ duration, frequency, volume, type, onEnded }) => {
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

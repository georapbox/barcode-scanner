import '@georapbox/clipboard-copy-element/dist/clipboard-copy-defined.min.js';
import '@georapbox/resize-observer-element/dist/resize-observer-defined.min.js';
import { CapturePhoto } from '@georapbox/capture-photo-element/dist/capture-photo.min.js';
import { storage } from './services/storage.js';
import { ary } from './utils/ary.js';
import { toastAlert } from './toast-alert.js';

(async function () {
  const ACCEPTED_MIME_TYPES = ['image/jpg', 'image/jpeg', 'image/png', 'image/apng', 'image/gif', 'image/webp', 'image/avif'];
  const capturePhotoEl = document.querySelector('capture-photo');
  const cameraResultsEl = document.getElementById('cameraResults');
  const fileResultsEl = document.getElementById('fileResults');
  const scanInstructionsEl = document.getElementById('scanInstructions');
  const scanBtn = document.getElementById('scanBtn');
  const scanMethodSelect = document.getElementById('scanMethod');
  const fileInput = document.getElementById('fileInput');
  const dropzoneEl = document.getElementById('dropzone');
  const cameraViewEl = document.getElementById('cameraView');
  const fileViewEl = document.getElementById('fileView');
  const resizeObserverEl = document.querySelector('resize-observer');
  const scanFrameEl = document.getElementById('scanFrame');
  const settingsBtn = document.getElementById('settingsBtn');
  const settingsDialog = document.getElementById('settingsDialog');
  const settingsForm = document.forms['settings-form'];
  const storageSettings = storage.getItem('settings');
  let shouldRepeatScan = true;
  let rafId;

  const beep = (() => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext || window.audioContext);

    if (!audioCtx) {
      return;
    }

    return (duration, frequency, volume, type, callback) => {
      if (!storage.getItem('settings')?.beep) {
        return;
      }

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

      if (typeof callback === 'function') {
        oscillator.onended = callback;
      }

      oscillator.start(audioCtx.currentTime);
      oscillator.stop(audioCtx.currentTime + ((duration || 500) / 1000));
    };
  })();

  function vibrate(duration = 200) {
    if (typeof window.navigator.vibrate !== 'function' || !storage.getItem('settings')?.vibrate) {
      return;
    }

    try {
      window.navigator.vibrate(duration);
    } catch {
      // Fail silently...
    }
  }

  function resizeScanFrame(videoEl) {
    if (!videoEl) {
      return;
    }

    const rect = videoEl.getBoundingClientRect();

    scanFrameEl.style.cssText = `width: ${rect.width}px; height: ${rect.height}px`;
  }

  capturePhotoEl.addEventListener('capture-photo:video-play', evt => {
    scanFrameEl.hidden = false;
    resizeScanFrame(evt.detail.video);
    scan();
  }, {
    once: true
  });

  CapturePhoto.defineCustomElement();

  if (!('BarcodeDetector' in window)) {
    cameraViewEl.hidden = true;
    fileViewEl.hidden = true;
    scanMethodSelect.hidden = true;
    toastAlert('BarcodeDetector API is not supported by your browser.', 'danger');
    return;
  }

  fileInput.accept = ACCEPTED_MIME_TYPES.join(',');

  const capturePhotoVideoEl = capturePhotoEl.shadowRoot.querySelector('video');

  const barcodeDetector = new window.BarcodeDetector({
    formats: await window.BarcodeDetector.getSupportedFormats()
  });

  if (storageSettings) {
    Object.entries(storageSettings).forEach(([key, value]) => {
      const settingInput = settingsForm.querySelector(`[name="${key}"]`);
      if (settingInput) {
        settingInput.checked = value;
      }
    });
  }

  function emptyResults(el) {
    el.querySelectorAll('.results__item').forEach(el => el.remove());
  }

  function createResult(value, resultEl) {
    if (!value) {
      return;
    }

    let el;

    try {
      new URL(value);
      el = document.createElement('a');
      el.href = value;
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noreferrer noopener');

      if (storage.getItem('settings')?.openWebPage) {
        el.click();
      }
    } catch (err) {
      el = document.createElement('span');
    }

    el.className = 'results__item';
    el.textContent = value;

    resultEl.appendChild(el);

    const clipboarCopyEl = resultEl.querySelector('clipboard-copy');

    if (clipboarCopyEl) {
      clipboarCopyEl.disabled = value === '-';
    }
  }

  function detectBarcode(source) {
    return new Promise((resolve, reject) => {
      barcodeDetector.detect(source).then(results => {
        if (Array.isArray(results) && results.length > 0) {
          resolve(results[0]);
        } else {
          reject({
            message: 'Could not detect barcode from provided source.'
          });
        }
      }).catch(err => {
        reject(err);
      });
    });
  }

  async function scan() {
    scanInstructionsEl.hidden = false;

    try {
      const barcode = await detectBarcode(capturePhotoVideoEl);
      window.cancelAnimationFrame(rafId);
      emptyResults(cameraResultsEl);
      createResult(barcode.rawValue, cameraResultsEl);
      scanInstructionsEl.hidden = true;
      scanBtn.hidden = false;
      scanFrameEl.hidden = true;
      beep(200, 860, 0.03, 'square');
      vibrate();
      return;
    } catch (err) {
      // Fail silently...
    }

    if (shouldRepeatScan) {
      rafId = window.requestAnimationFrame(ary(scan, 0));
    }
  }

  function handleFileSelect(file) {
    const image = new Image();
    const reader = new FileReader();

    reader.addEventListener('load', evt => {
      const data = evt.target.result;

      image.addEventListener('load', async () => {
        try {
          const barcode = await detectBarcode(image);
          emptyResults(fileResultsEl);
          createResult(barcode.rawValue, fileResultsEl);
          beep(200, 860, 0.03, 'square');
          vibrate();
        } catch (err) {
          emptyResults(fileResultsEl);
          createResult('-', fileResultsEl);
        }
      });

      image.src = data;
      dropzoneEl.querySelectorAll('img').forEach(el => el.remove());
      dropzoneEl.prepend(image);
    });

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  document.addEventListener('capture-photo:error', evt => {
    capturePhotoEl.hidden = true;
    cameraViewEl.hidden = true;
    fileViewEl.hidden = false;
    scanMethodSelect.hidden = true;

    const error = evt.detail.error;

    if (error.name === 'NotFoundError') {
      return;
    }

    const errorMessage = error.name === 'NotAllowedError' ? 'Permission to use webcam was denied. Reload the page to give appropriate permissions to webcam.' : error.message;

    toastAlert(errorMessage, 'danger');
  }, {
    once: true
  });

  scanBtn.addEventListener('click', () => {
    scanBtn.hidden = true;
    scanFrameEl.hidden = false;
    emptyResults(cameraResultsEl);
    scan();
  });

  scanMethodSelect.addEventListener('change', evt => {
    const value = evt.target.value;

    [cameraViewEl, fileViewEl].forEach(el => {
      el.hidden = el.id !== value;
    });

    if (value === 'cameraView') {
      shouldRepeatScan = true;

      if (
        !capturePhotoEl.hidden // Assumes that element is hidden because of error.
        && !capturePhotoEl.loading
        && !cameraResultsEl.querySelector('.results__item')
      ) {
        scan();
      }
    }

    if (value === 'fileView') {
      shouldRepeatScan = false;
    }
  });

  fileInput.addEventListener('change', evt => {
    const file = evt.target.files[0];
    handleFileSelect(file);
  });

  dropzoneEl.addEventListener('dragover', evt => {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
  });

  dropzoneEl.addEventListener('drop', evt => {
    evt.stopPropagation();
    evt.preventDefault();

    const fileList = evt.dataTransfer.files;
    const [file] = fileList;

    if (!file || !ACCEPTED_MIME_TYPES.includes(file.type)) {
      return;
    }

    fileInput.value = fileInput.defaultValue;

    handleFileSelect(file);
  });

  resizeObserverEl.addEventListener('resize-observer:resize', () => {
    resizeScanFrame(capturePhotoEl.shadowRoot.querySelector('video'));
  });

  settingsBtn.addEventListener('click', () => {
    settingsDialog.showModal();
  });

  settingsDialog.addEventListener('click', evt => {
    if (evt.target === evt.currentTarget) {
      settingsDialog.close();
    }
  });

  settingsForm.addEventListener('change', evt => {
    const settings = {};
    const checkboxes = evt.currentTarget.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(item => settings[item.name] = item.checked);
    storage.setItem('settings', settings);
  });
}());

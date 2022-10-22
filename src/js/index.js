import '@georapbox/clipboard-copy-element/dist/clipboard-copy-defined.min.js';
import { CapturePhoto } from '@georapbox/capture-photo-element/dist/capture-photo.min.js';
import { toastAlert } from './toast-alert.js';

(async function () {
  const ACCEPTED_MIME_TYPES = ['image/jpg', 'image/jpeg', 'image/png', 'image/apng', 'image/gif', 'image/webp', 'image/avif'];
  const capturePhotoEl = document.querySelector('capture-photo');
  const cameraResultsEl = document.getElementById('cameraResults');
  const fileResultsEl = document.getElementById('fileResults');
  const scanningEl = document.querySelector('.scanning');
  const scanBtn = document.getElementById('scanBtn');
  const scanMethodSelect = document.getElementById('scanMethod');
  const fileInput = document.getElementById('fileInput');
  const dropzoneEl = document.getElementById('dropzone');
  const cameraViewEl = document.getElementById('cameraView');
  const fileViewEl = document.getElementById('fileView');
  let videoLoadedFirstTime = false;
  let shouldRepeatScan = true;
  let rafId;

  if (!('BarcodeDetector' in window)) {
    cameraViewEl.hidden = true;
    fileViewEl.hidden = true;
    scanMethodSelect.hidden = true;
    toastAlert('BarcodeDetector API is not supported by your browser.', 'danger');
    return;
  }

  fileInput.accept = ACCEPTED_MIME_TYPES.join(',');

  document.addEventListener('capture-photo:error', evt => {
    capturePhotoEl.hidden = true;
    scanMethodSelect.querySelector('option[value="cameraView"]').remove();
    scanMethodSelect.querySelector('option[value="fileView"]').selected = true;
    scanMethodSelect.dispatchEvent(new Event('change'));

    const error = evt.detail.error;

    if (error.name === 'NotFoundError') {
      return;
    }

    const errorMessage = error.name === 'NotAllowedError' ? 'Permission to use webcam was denied. Reload the page to give appropriate permissions to webcam.' : error.message;

    toastAlert(errorMessage, 'danger');
  });

  capturePhotoEl.addEventListener('capture-photo:video-play', () => {
    if (!videoLoadedFirstTime && !cameraViewEl.hidden) {
      scan();
    }

    videoLoadedFirstTime = true;
  });

  CapturePhoto.defineCustomElement();

  const capturePhotoVideoEl = capturePhotoEl.shadowRoot.querySelector('video');

  const barcodeDetector = new window.BarcodeDetector({
    formats: await window.BarcodeDetector.getSupportedFormats()
  });

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
    } catch (err) {
      el = document.createElement('span');
    }

    el.className = 'results__item';
    el.textContent = value;

    resultEl.appendChild(el);
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
    scanningEl.hidden = false;

    try {
      const barcode = await detectBarcode(capturePhotoVideoEl);
      window.cancelAnimationFrame(rafId);
      emptyResults(cameraResultsEl);
      createResult(barcode.rawValue, cameraResultsEl);
      scanningEl.hidden = true;
      scanBtn.hidden = false;
      return;
    } catch (err) {
      // Fail silently...
    }

    if (shouldRepeatScan) {
      rafId = window.requestAnimationFrame(scan);
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

  scanBtn.addEventListener('click', () => {
    scanBtn.hidden = true;
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
}());

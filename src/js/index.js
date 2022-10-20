import { CapturePhoto } from '@georapbox/capture-photo-element/dist/capture-photo.min.js';
import { toastAlert } from './toast-alert.js';

(async function () {
  const ACCEPTED_MIME_TYPES = ['image/jpg', 'image/jpeg', 'image/png', 'image/apng', 'image/gif', 'image/webp', 'image/avif'];
  const capturePhotoEl = document.querySelector('capture-photo');
  const resultsEl = document.getElementById('results');
  const scanningEl = document.querySelector('.scanning');
  const scanBtn = document.getElementById('scanBtn');
  const scanMethodSelect = document.getElementById('scanMethod');
  const fileInput = document.getElementById('fileInput');
  const dropzoneEl = document.getElementById('dropzone');
  let videoLoadedFirstTime = false;
  let shouldRepeatScan = true;
  let rafId;

  if (!('BarcodeDetector' in window)) {
    capturePhotoEl.hidden = true;
    toastAlert('BarcodeDetector API is not supported by your browser.', 'danger');
    return;
  }

  fileInput.accept = ACCEPTED_MIME_TYPES.join(',');

  document.addEventListener('capture-photo:error', evt => {
    capturePhotoEl.hidden = true;
    toastAlert(evt.detail.error.message, 'danger');
  });

  capturePhotoEl.addEventListener('capture-photo:video-play', () => {
    if (!videoLoadedFirstTime) {
      scanningEl.hidden = false;
      scan();
    }

    videoLoadedFirstTime = true;
  });

  CapturePhoto.defineCustomElement();

  const capturePhotoVideoEl = capturePhotoEl.shadowRoot.querySelector('video');

  const barcodeDetector = new window.BarcodeDetector({
    formats: await window.BarcodeDetector.getSupportedFormats()
  });

  function emptyResults() {
    resultsEl.querySelectorAll('.results__item').forEach(el => el.remove());
  }

  function createResult(value) {
    emptyResults();

    const divEl = document.createElement('div');
    divEl.className = 'results__item';

    try {
      new URL(value);
      const linkEl = document.createElement('a');
      linkEl.href = value;
      linkEl.setAttribute('target', '_blank');
      linkEl.setAttribute('rel', 'noreferrer noopener');
      linkEl.textContent = value;
      divEl.appendChild(linkEl);
    } catch (err) {
      // Fail silently...
    }

    const spanEl = document.createElement('span');
    spanEl.textContent = value;
    divEl.appendChild(spanEl);

    resultsEl.appendChild(divEl);
  }

  async function scan() {
    try {
      const barcodes = barcodeDetector.detect(capturePhotoVideoEl);
      const results = await barcodes;

      if (Array.isArray(results) && results.length > 0) {
        window.cancelAnimationFrame(rafId);

        createResult(results[0].rawValue);

        scanningEl.hidden = true;
        scanBtn.hidden = false;

        return;
      }
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
          const barcodes = barcodeDetector.detect(image);
          const results = await barcodes;

          if (Array.isArray(results) && results.length > 0) {
            createResult(results[0].rawValue);
          } else {
            emptyResults();
          }
        } catch (err) {
          toastAlert(err.message, 'danger');
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
    scanningEl.hidden = false;
    scanBtn.hidden = true;
    emptyResults();
    scan();
  });

  scanMethodSelect.addEventListener('change', evt => {
    const value = evt.target.value;

    document.querySelectorAll('#cameraView, #fileView').forEach(el => {
      el.hidden = el.id !== value;
    });

    emptyResults();

    if (value === 'cameraView') {
      shouldRepeatScan = true;
      scanningEl.hidden = false;
      fileInput.value = fileInput.defaultValue;
      dropzoneEl.querySelectorAll('img').forEach(el => el.remove());
      scan();
    }

    if (value === 'fileView') {
      shouldRepeatScan = false;
      scanningEl.hidden = true;
      scanBtn.hidden = true;
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

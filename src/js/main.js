import { CapturePhoto } from '@georapbox/capture-photo-element/dist/capture-photo.min.js';

(async function () {
  const capturePhotoEl = document.querySelector('capture-photo');
  const resultsEl = document.getElementById('results');
  const scanningEl = document.querySelector('.scanning');
  const scanBtn = document.getElementById('scanBtn');
  const errorEl = document.getElementById('error');
  let videoLoadedFirstTime = false;
  let rafId;

  if (!('BarcodeDetector' in window)) {
    capturePhotoEl.hidden = true;
    errorEl.textContent = 'BarcodeDetector is not supported.';
    return;
  }

  document.addEventListener('capture-photo:error', evt => {
    capturePhotoEl.hidden = true;
    errorEl.textContent = evt.detail.error.message;
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

  function createResult(value) {
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
        resultsEl.hidden = false;

        return;
      }
    } catch (err) {
      // Fail silently...
    }

    rafId = window.requestAnimationFrame(scan);
  }

  scanBtn.addEventListener('click', () => {
    scanningEl.hidden = false;
    scanBtn.hidden = true;
    resultsEl.hidden = true;

    resultsEl.querySelectorAll('.results__item').forEach(el => el.remove());

    scan();
  });
}());

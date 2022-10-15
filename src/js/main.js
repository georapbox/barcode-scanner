import { CapturePhoto } from '@georapbox/capture-photo-element/dist/capture-photo-defined.min.js';

(async function () {
  if (!('BarcodeDetector' in window)) {
    return alert('BarcodeDetector is not supported.');
  }

  CapturePhoto.defineCustomElement();

  const capturePhotoEl = document.querySelector('capture-photo');
  const capturePhotoVideoEl = capturePhotoEl.shadowRoot.querySelector('video');
  const resultsEl = document.getElementById('results');
  const scanningEl = resultsEl.querySelector('.results__scanning');
  const scanBtn = document.getElementById('scanBtn');
  let rafId;

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
      console.error(err);
    }

    const spanEl = document.createElement('span');
    spanEl.textContent = value;
    divEl.appendChild(spanEl);

    resultsEl.appendChild(divEl);
  }

  async function scan() {
    console.log('scanning...');
    try {
      const barcodes = barcodeDetector.detect(capturePhotoVideoEl);
      const results = await barcodes;

      if (Array.isArray(results) && results.length > 0) {
        cancelAnimationFrame(rafId);

        createResult(results[0].rawValue);

        scanningEl.hidden = true;
        scanBtn.hidden = false;

        console.log(results);

        return;
      }
    } catch (err) {
      // Fail silently...
    }

    rafId = requestAnimationFrame(scan);
  }

  scanBtn.addEventListener('click', () => {
    scanningEl.hidden = false;
    scanBtn.hidden = true;

    resultsEl.querySelectorAll('.results__item').forEach(el => el.remove());

    scan();
  });

  // TODO Check for camera permissions before scanning.
  scan();
}());

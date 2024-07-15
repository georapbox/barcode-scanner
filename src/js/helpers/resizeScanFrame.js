/**
 * Resizes the scan frame to match the video element's dimensions.
 *
 * @param {HTMLVideoElement} videoEl - Video element
 * @param {HTMLElement} scanFrameEl - Scan frame element
 */
export function resizeScanFrame(videoEl, scanFrameEl) {
  if (!videoEl || !scanFrameEl) {
    return;
  }

  const rect = videoEl.getBoundingClientRect();

  scanFrameEl.style.cssText = `width: ${rect.width}px; height: ${rect.height}px`;
}

export function resizeScanFrame(videoEl, scanFrameEl) {
  if (!videoEl || !scanFrameEl) {
    return;
  }

  const rect = videoEl.getBoundingClientRect();

  scanFrameEl.style.cssText = `width: ${rect.width}px; height: ${rect.height}px`;
}

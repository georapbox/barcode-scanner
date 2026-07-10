/**
 * Creates a controller to manage the visibility of the camera scanner based on
 * tab selection and document visibility.
 *
 * @param {{tabsEl: HTMLElement, cameraScannerEl: HTMLElement}} params - Controller dependencies.
 * @returns {Function} A function that removes the controller's event listeners.
 */
export function createScannerVisibilityController({ tabsEl, cameraScannerEl }) {
  function dispatchCameraScannerVisibilityChange(cameraScannerEl, detail) {
    cameraScannerEl.dispatchEvent(
      new CustomEvent('camera-scanner-visibility-change', {
        bubbles: true,
        composed: true,
        detail
      })
    );
  }

  function handleTabShow(evt) {
    const tabId = evt.detail.tabId;

    if (tabId === 'cameraTab') {
      dispatchCameraScannerVisibilityChange(cameraScannerEl, {
        reason: 'tab-change',
        visibility: 'visible'
      });
    }

    if (tabId === 'fileTab') {
      dispatchCameraScannerVisibilityChange(cameraScannerEl, {
        reason: 'tab-change',
        visibility: 'hidden'
      });
    }
  }

  function handleDocumentVisibilityChange() {
    const selectedTab = tabsEl.querySelector('[selected]');
    const tabId = selectedTab.getAttribute('id');

    if (tabId !== 'cameraTab') {
      return;
    }

    dispatchCameraScannerVisibilityChange(cameraScannerEl, {
      reason: 'page-visibility-change',
      visibility: document.visibilityState === 'hidden' ? 'hidden' : 'visible'
    });
  }

  tabsEl.addEventListener('a-tab-show', handleTabShow);
  document.addEventListener('visibilitychange', handleDocumentVisibilityChange);

  return function destroyScannerVisibilityController() {
    tabsEl.removeEventListener('a-tab-show', handleTabShow);
    document.removeEventListener('visibilitychange', handleDocumentVisibilityChange);
  };
}

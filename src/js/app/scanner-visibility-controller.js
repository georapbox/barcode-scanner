function dispatchCameraScannerVisibilityChange(cameraScannerEl, detail) {
  cameraScannerEl.dispatchEvent(
    new CustomEvent('camera-scanner-visibility-change', {
      bubbles: true,
      composed: true,
      detail
    })
  );
}

export function createScannerVisibilityController({ tabsEls, cameraScannerEls }) {
  const { component: tabsEl } = tabsEls;
  const { component: cameraScannerEl } = cameraScannerEls;

  /**
   * Handles the tab show event.
   * It is responsible for starting or stopping the scan process based on the selected tab.
   *
   * @param {CustomEvent} evt - The event object.
   */
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

  /**
   * Handles the visibility change event on the document.
   * It is responsible for stopping the scan process when the document is not visible.
   */
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

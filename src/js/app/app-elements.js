function getRequiredElement(selector, root = document) {
  const element = root.querySelector(selector);

  if (!element) {
    throw new Error(`Required element not found: ${selector}`);
  }

  return element;
}

export function getAppElements() {
  const cameraPanelEl = getRequiredElement('#cameraPanel');
  const filePanelEl = getRequiredElement('#filePanel');

  return {
    tabsEl: getRequiredElement('a-tab-group'),

    cameraScannerEl: getRequiredElement('camera-scanner'),
    cameraScannerResultsEl: getRequiredElement('.results', cameraPanelEl),

    fileScannerEl: getRequiredElement('file-scanner'),
    fileScannerResultsEl: getRequiredElement('.results', filePanelEl),

    historyEl: getRequiredElement('scan-history'),
    historyButtonEl: getRequiredElement('#historyBtn'),
    historyDialogEl: getRequiredElement('#historyDialog'),

    settingsEl: getRequiredElement('scan-settings'),
    settingsButtonEl: getRequiredElement('#settingsBtn'),
    settingsDialogEl: getRequiredElement('#settingsDialog'),
    settingsFormEl: getRequiredElement('#settingsForm'),

    globalActionsEl: getRequiredElement('#globalActions')
  };
}

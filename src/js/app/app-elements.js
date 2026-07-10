function getRequiredElement(selector, root = document) {
  const element = root.querySelector(selector);

  if (!element) {
    throw new Error(`Required element not found: ${selector}`);
  }

  return element;
}

export function getAppElements() {
  return {
    tabsEl: getRequiredElement('a-tab-group'),

    cameraScannerEl: getRequiredElement('camera-scanner'),
    cameraScannerResultsEl: getRequiredElement('#cameraScannerResults'),

    fileScannerEl: getRequiredElement('file-scanner'),
    fileScannerResultsEl: getRequiredElement('#fileScannerResults'),

    historyEl: getRequiredElement('scan-history'),
    historyButtonEl: getRequiredElement('#historyButton'),
    historyDialogEl: getRequiredElement('#historyDialog'),

    scanSettingsEl: getRequiredElement('scan-settings'),
    settingsButtonEl: getRequiredElement('#settingsButton'),
    settingsDialogEl: getRequiredElement('#settingsDialog'),
    settingsFormEl: getRequiredElement('#settingsForm'),

    appActionsEl: getRequiredElement('#appActions')
  };
}

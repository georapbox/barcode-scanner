function getRequiredElement(selector, root = document) {
  const element = root.querySelector(selector);

  if (!element) {
    throw new Error(`Required element not found: ${selector}`);
  }

  return element;
}

export function getAppElements() {
  const cameraPanel = getRequiredElement('#cameraPanel');
  const filePanel = getRequiredElement('#filePanel');

  return {
    tabs: {
      component: getRequiredElement('a-tab-group')
    },
    cameraScanner: {
      component: getRequiredElement('camera-scanner'),
      panel: cameraPanel,
      results: getRequiredElement('.results', cameraPanel)
    },
    fileScanner: {
      component: getRequiredElement('file-scanner'),
      panel: filePanel,
      results: getRequiredElement('.results', filePanel)
    },
    history: {
      component: getRequiredElement('scan-history'),
      button: getRequiredElement('#historyBtn'),
      dialog: getRequiredElement('#historyDialog')
    },
    settings: {
      component: getRequiredElement('scan-settings'),
      button: getRequiredElement('#settingsBtn'),
      dialog: getRequiredElement('#settingsDialog'),
      form: getRequiredElement('#settingsForm')
    },
    globalActions: getRequiredElement('#globalActions')
  };
}

import { getSettings } from '../services/storage.js';

export async function initializeSettingsForm(form) {
  const { value: settings = {} } = await getSettings();

  Object.entries(settings).forEach(([key, value]) => {
    const settingInput = form.querySelector(`[name="${key}"]`);
    if (settingInput) {
      settingInput.checked = value;
    }
  });
}

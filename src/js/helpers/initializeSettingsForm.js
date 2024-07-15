import { getSettings } from '../services/storage.js';

/**
 * Initialize the settings form with the saved settings.
 * If a setting is not found, it will be ignored.
 *
 * @param {HTMLFormElement} form - The settings form to initialize.
 */
export async function initializeSettingsForm(form) {
  const { value: settings = {} } = await getSettings();

  Object.entries(settings).forEach(([key, value]) => {
    const settingInput = form.querySelector(`[name="${key}"]`);

    if (!settingInput) {
      return;
    }

    settingInput.checked = value;
  });
}

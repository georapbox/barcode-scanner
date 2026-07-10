import { setSettings } from '../features/settings/settings-storage.js';
import { debounce } from '../shared/utils/debounce.js';

/**
 * Creates a controller for handling settings dialog interactions and settings
 * form changes.
 *
 * @param {{
 *   settingsDialogEl: HTMLElement,
 *   settingsButtonEl: HTMLElement,
 *   settingsFormEl: HTMLFormElement,
 *   onFormatsChange: (formats: string[]) => Promise<void>
 * }} params - Controller dependencies.
 * @returns {Function} A function that removes the controller's event listeners.
 */
export function createSettingsController({
  settingsDialogEl,
  settingsButtonEl,
  settingsFormEl,
  onFormatsChange
}) {
  function handleSettingsButtonClick() {
    settingsDialogEl.open = true;
  }

  async function handleSettingsFormChange(evt) {
    evt.preventDefault();

    const nextSettings = {};
    const formData = new FormData(settingsFormEl);
    const generalSettings = formData.getAll('general-settings');
    const scanSettings = formData.getAll('formats-settings');

    generalSettings.forEach(value => {
      nextSettings[value] = true;
    });

    nextSettings.formats = scanSettings;

    await setSettings(nextSettings);

    if (evt.target.name === 'formats-settings') {
      await onFormatsChange(scanSettings);
    }
  }

  settingsButtonEl.addEventListener('click', handleSettingsButtonClick);
  settingsFormEl.addEventListener('change', debounce(handleSettingsFormChange, 500));

  return function destroySettingsController() {
    settingsButtonEl.removeEventListener('click', handleSettingsButtonClick);
    settingsFormEl.removeEventListener('change', debounce(handleSettingsFormChange, 500));
  };
}

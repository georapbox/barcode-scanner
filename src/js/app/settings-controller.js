import { setSettings } from '../features/settings/settings-storage.js';
import { debounce } from '../shared/utils/debounce.js';

export function createSettingsController({
  settingsDialogEl,
  settingsButtonEl,
  settingsFormEl,
  onFormatsChange
}) {
  /**
   * Handles the settings button click event.
   * It is responsible for displaying the settings dialog.
   */
  function handleSettingsButtonClick() {
    settingsDialogEl.open = true;
  }

  /**
   * Handles the change event on the settings form.
   * It is responsible for saving the settings to persistent storage and updating the settings.
   *
   * @param {Event} evt - The event object.
   */
  async function handleSettingsFormChange(evt) {
    evt.preventDefault();

    const nextSettings = {};
    const formData = new FormData(settingsFormEl);
    const generalSettings = formData.getAll('general-settings');
    const formatsSettings = formData.getAll('formats-settings');

    generalSettings.forEach(value => {
      nextSettings[value] = true;
    });

    nextSettings.formats = formatsSettings;

    await setSettings(nextSettings);

    if (evt.target.name === 'formats-settings') {
      await onFormatsChange(formatsSettings);
    }
  }

  settingsButtonEl.addEventListener('click', handleSettingsButtonClick);
  settingsFormEl.addEventListener('change', debounce(handleSettingsFormChange, 500));

  return function destroySettingsController() {
    settingsButtonEl.removeEventListener('click', handleSettingsButtonClick);
    settingsFormEl.removeEventListener('change', debounce(handleSettingsFormChange, 500));
  };
}

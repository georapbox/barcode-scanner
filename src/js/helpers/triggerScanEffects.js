import { getSettings } from '../services/storage.js';
import { beep } from '../utils/beep.js';
import { vibrate } from '../utils/vibrate.js';

/**
 * Triggers the scan effects like beep and vibrate.
 */
export async function triggerScanEffects() {
  const { value: settings } = await getSettings();

  if (!settings) {
    return;
  }

  settings.beep && beep({ duration: 200, frequency: 860, volume: 0.03, type: 'square' });
  settings.vibrate && vibrate(100);
}

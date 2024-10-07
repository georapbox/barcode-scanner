import { getSettings } from '../services/storage.js';
import { beep } from '../utils/beep.js';
import { vibrate } from '../utils/vibrate.js';

/**
 * Triggers the scan effects like beep and vibrate.
 */
export async function triggerScanEffects({ success = true } = {}) {
  const [, settings] = await getSettings();

  if (!settings) {
    return;
  }

  const beepConfig = success
    ? { duration: 200, frequency: 860, volume: 0.03, type: 'square' }
    : { duration: 300, frequency: 100, volume: 0.04, type: 'sawtooth' };

  settings.beep && beep(beepConfig);
  settings.vibrate && vibrate(success ? 100 : 300);
}

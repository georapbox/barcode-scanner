import { getSettings } from '../services/storage.js';
import { beep } from '../utils/beep.js';
import { vibrate } from '../utils/vibrate.js';

const RATE_LIMIT = 1000;
let lastTriggerTime = 0;

/**
 * Triggers the scan effects like beep and vibrate.
 *
 * @param {Object} options
 * @param {boolean} [options.success=true] - Whether to trigger the success or error effects.
 */
export async function triggerScanEffects(options = {}) {
  const { success = true } = options;
  const [, settings] = await getSettings();

  if (!settings) {
    return;
  }

  const now = Date.now();
  if (now - lastTriggerTime < RATE_LIMIT) {
    return;
  }

  const beepConfig = success
    ? { duration: 200, frequency: 860, volume: 0.03, type: 'square' }
    : { duration: 300, frequency: 200, volume: 0.05, type: 'sawtooth' };

  settings.beep && beep(beepConfig);
  settings.vibrate && vibrate(success ? 100 : 200);

  lastTriggerTime = now;
}

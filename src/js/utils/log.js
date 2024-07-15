/**
 * Log to console only in development mode.
 *
 * @param {...any} args - Arguments to log
 */
export function log(...args) {
  process.env.NODE_ENV === 'development' && console.log(...args);
}

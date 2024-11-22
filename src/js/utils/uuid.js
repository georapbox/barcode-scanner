/**
 * Generates a v4 UUID using a cryptographically secure random number generator if available.
 * Otherwise, it falls back to a pseudo-random number generator.
 *
 * @returns {string} - The unique id.
 */
export function uuid() {
  if (window.crypto && typeof window.crypto.randomUUID === 'function') {
    return window.crypto.randomUUID();
  }

  // Create a pseudo-UUID by concatenating 5 generated random strings of 6 characters each.
  return Array.from({ length: 5 }, () => Math.random().toString(36).substring(2, 8)).join('-');
}

/**
 * Clamps number within the inclusive `min` and `max` bounds,
 * making sure it does not go beyond them on either side.
 * If `min` is greater than `max` the parameters are swapped to support inverted ranges.
 *
 * @param {number} value - The number to clamp.
 * @param {number} lower - The lower bound.
 * @param {number} upper - The upper bound.
 * @throws {TypeError} - If one or more of the arguments passed is not a number.
 * @returns {number} - The clamped number.
 * @example
 *
 * clamp(10, -5, 5);
 * // => 5
 *
 * clamp(-10, -5, 5);
 * // => -5
 *
 * clamp(-15, 0, 100);
 * // => 0
 *
 * clamp(120, 0, 100);
 * // => 100
 *
 * clamp(-5, NaN, 5); // If any of lower or upper bound are `NaN`, they will be converted to `0`.
 * // => 0
 *
 * clamp(120, 100, 0); // The order of lower and upper bounds is reversed (100 > 0)
 * // => 100
 */
export function clamp(value, lower, upper) {
  if (Number.isNaN(lower)) {
    lower = 0;
  }

  if (Number.isNaN(upper)) {
    upper = 0;
  }

  return Math.min(Math.max(value, Math.min(lower, upper)), Math.max(lower, upper));
}

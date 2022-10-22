/**
 * Creates a function that accepts up to `n` arguments, ignoring any additional arguments.
 *
 * @param {function} fn The function to cap arguments for.
 * @param {Number} n The arity cap.
 * @throws {TypeError} Throws if `fn` is not function.
 * @throws {TypeError} Throws if `n` is not number.
 * @returns {function} Returns the new capped function.
 * @example
 *
 * const array = ['1', '2', '3'];
 *
 * const toInteger = ary(parseInt, 1);
 *
 * array.map(toInteger); // => [1, 2, 3]
 */
export const ary = (fn, n) => {
  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function for first argument');
  }

  if (typeof n !== 'number') {
    throw new TypeError('Expected a number for second argument');
  }

  return (...args) => {
    const arityCap = n > 0 ? n : 0;

    return fn(...args.slice(0, arityCap));
  };
};

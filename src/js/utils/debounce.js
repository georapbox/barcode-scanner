/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * 'n' milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 *
 * @param {function} fn The function to be executed.
 * @param {Number} [wait=0] Time of delay in milliseconds. It is required if `immediate` is used.
 * @param {Boolean} [immediate=false] If true or any truthy value, triggers the function on the leading edge.
 * @throws {TypeError} If `fn` is not function.
 * @returns {function} A new debounced function.
 * @example
 *
 * const debouncedHandler = debounce(() => {
 *   // Do your thing here...
 * }, 250);
 *
 * window.addEventListener('resize', debouncedHandler, false);
 */
const debounce = (fn, wait = 0, immediate = false) => {
  let timerId = null;

  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function for first argument');
  }

  return (...args) => {
    clearTimeout(timerId);

    if (immediate && !timerId) {
      fn(...args);
    }

    timerId = setTimeout(() => {
      timerId = null;
      if (!immediate) {
        fn(...args);
      }
    }, wait);
  };
};

export { debounce };

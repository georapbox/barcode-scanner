let shouldLog = false;
try {
  // Allow runtime control of info logging via URL params in the browser: ?silent=1 or ?quiet=1 will disable info logs.
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const disable = params.get('silent') === '1' || params.get('quiet') === '1';
    shouldLog = !disable && (process.env.NODE_ENV === 'development' || params.get('debug') === '1');
  } else {
    shouldLog = process.env.NODE_ENV === 'development';
  }
} catch (e) {
  shouldLog = process.env.NODE_ENV === 'development';
}

/**
 * A simple logger that logs to the console in depending on the environment.
 */
export const log = {
  info: (...args) => {
    shouldLog && console.log(...args);
  },
  error: (...args) => {
    shouldLog && console.error(...args);
  },
  warn: (...args) => {
    shouldLog && console.warn(...args);
  }
};

const shouldLog = process.env.NODE_ENV === 'development';

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

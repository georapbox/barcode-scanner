export function log(...args) {
  process.env.NODE_ENV === 'development' && console.log(...args);
}

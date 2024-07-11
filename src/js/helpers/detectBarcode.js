export function detectBarcode(detector, source) {
  return new Promise((resolve, reject) => {
    detector
      .detect(source)
      .then(results => {
        if (Array.isArray(results) && results.length > 0) {
          resolve(results[0]);
        } else {
          reject({
            message: 'Could not detect barcode from provided source.'
          });
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

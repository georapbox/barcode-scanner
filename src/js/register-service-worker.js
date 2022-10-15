if (process.env.NODE_ENV === 'production') {
  const sw = 'service-worker.js'; // Required because parcel will not recognize this as a file and will throw during build.

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(sw).catch(err => {
      console.error(err);
    });
  }
}

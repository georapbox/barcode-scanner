import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

/**
 * Firebase configuration
 * Preferred methods to provide config (in order):
 * 1. Add a small script tag before the app that sets `window.__FIREBASE_CONFIG__` (recommended for local testing):
 *    <script>
 *      window.__FIREBASE_CONFIG__ = {
 *        apiKey: '...', authDomain: '...', projectId: '...', storageBucket: '...', messagingSenderId: '...', appId: '...'
 *      };
 *    </script>
 * 2. During build, inject `process.env.FIREBASE_*` variables (CI / build tooling).
 * If neither is present, the placeholders below will be used and Firebase will be considered not configured.
 */
let firebaseConfig = null;

if (typeof window !== 'undefined' && window.__FIREBASE_CONFIG__) {
  // Allow developers to drop a script with `window.__FIREBASE_CONFIG__` for quick local setup
  firebaseConfig = window.__FIREBASE_CONFIG__;
} else {
  firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY || 'YOUR_API_KEY',
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || 'YOUR_AUTH_DOMAIN',
    projectId: process.env.FIREBASE_PROJECT_ID || 'YOUR_PROJECT_ID',
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || 'YOUR_STORAGE_BUCKET',
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || 'YOUR_MESSAGING_SENDER_ID',
    appId: process.env.FIREBASE_APP_ID || 'YOUR_APP_ID'
  };
}

// Check if Firebase is configured
const isFirebaseConfigured = () => {
  return firebaseConfig.apiKey !== 'YOUR_API_KEY' && 
         firebaseConfig.projectId !== 'YOUR_PROJECT_ID';
};

// Initialize Firebase only if configured
let app = null;
let auth = null;
let db = null;

/**
 * Initialize Firebase at runtime. This is safe to call multiple times.
 * If a config object is provided it will be used, otherwise the module-level
 * `firebaseConfig` (or `window.__FIREBASE_CONFIG__`) will be used.
 *
 * @param {object|null} configOverride
 * @returns {{ error: Error|null }}
 */
function _initializeFirebase(configOverride = null) {
  if (configOverride) {
    firebaseConfig = configOverride;
  }

  if (!isFirebaseConfigured()) {
    return { error: new Error('Firebase not configured') };
  }

  if (app && auth && db) {
    return { error: null };
  }

  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    return { error: null };
  } catch (error) {
    console.error('Error initializing Firebase:', error);
    return { error };
  }
}

/**
 * Public initializer to allow runtime configuration (e.g. paste config in UI).
 */
export function initFirebaseRuntime(configOverride = null) {
  return _initializeFirebase(configOverride);
}

export { app, auth, db, isFirebaseConfigured };


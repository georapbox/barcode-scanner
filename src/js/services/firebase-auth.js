import {
  signInAnonymously,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { auth, isFirebaseConfigured } from './firebase-config.js';
import { log } from '../utils/log.js';
import { uuid } from '../utils/uuid.js';

const LOCAL_USERS_KEY = 'barcode-scanner/localUsers';
const LOCAL_CURRENT_USER_KEY = 'barcode-scanner/localCurrentUser';

/**
 * Authentication service for Firebase
 * Handles user authentication with anonymous and email/password methods
 */

let currentUser = null;
let authStateListeners = [];

function _notifyAuthListeners(user) {
  authStateListeners.forEach(listener => {
    try { listener(user); } catch (e) { log.error('Error in auth state listener:', e); }
  });
}

/**
 * Initialize authentication and set up auth state listener
 */
export function initAuth() {
  if (!isFirebaseConfigured() || !auth) {
    log.warn('Firebase not configured. Running in local-only mode.');
    // Attempt to load local current user
    try {
      const raw = localStorage.getItem(LOCAL_CURRENT_USER_KEY);
      if (raw) {
        currentUser = JSON.parse(raw);
      } else {
        currentUser = null;
      }
    } catch (e) {
      currentUser = null;
    }

    // Notify listeners asynchronously
    setTimeout(() => {
      authStateListeners.forEach(listener => {
        try { listener(currentUser); } catch (err) { log.error('Error in auth state listener:', err); }
      });
    }, 0);

    return Promise.resolve(currentUser);
  }

  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      user => {
        currentUser = user;
        
        // Notify all listeners
        authStateListeners.forEach(listener => {
          try {
            listener(user);
          } catch (err) {
            log.error('Error in auth state listener:', err);
          }
        });

        // Resolve the promise on first auth state change
        unsubscribe();
        resolve(user);
      },
      error => {
        log.error('Auth state error:', error);
        reject(error);
      }
    );
  });
}

/**
 * Subscribe to authentication state changes
 * @param {Function} callback - Called when auth state changes with user object or null
 * @returns {Function} Unsubscribe function
 */
export function onAuthStateChange(callback) {
  // Always support auth state listeners; for local-only mode this will use localStorage
  authStateListeners.push(callback);

  // Call immediately with current user (may be null)
  try { if (currentUser !== undefined) callback(currentUser); } catch (e) { log.error('Auth listener error:', e); }

  if (!isFirebaseConfigured() || !auth) {
    // Return an unsubscribe that removes the listener
    return () => {
      authStateListeners = authStateListeners.filter(l => l !== callback);
    };
  }

  // If Firebase is configured, delegate to Firebase's listener and also keep local registry
  const unsubscribe = onAuthStateChanged(auth, user => {
    currentUser = user;
    callback(user);
  });

  return () => {
    unsubscribe();
    authStateListeners = authStateListeners.filter(l => l !== callback);
  };
}

/**
 * Sign in anonymously
 * This allows users to start using the app without creating an account
 * @returns {Promise<{error: null|Error, user: object|null}>}
 */
export async function signInAnonymous() {
  if (!isFirebaseConfigured() || !auth) {
    // Local fallback anonymous user
    try {
      const localUser = { uid: `local-${uuid()}`, isAnonymous: true };
      currentUser = localUser;
      try { localStorage.setItem(LOCAL_CURRENT_USER_KEY, JSON.stringify(localUser)); } catch (e) {}
      log.info('Signed in anonymously (local):', localUser.uid);
      // Notify listeners about auth change
      _notifyAuthListeners(currentUser);
      return { error: null, user: localUser };
    } catch (err) {
      return { error: err, user: null };
    }
  }

  try {
    const result = await signInAnonymously(auth);
    currentUser = result.user;
    log.info('Signed in anonymously:', result.user.uid);
    return { error: null, user: result.user };
  } catch (error) {
    log.error('Error signing in anonymously:', error);
    return { error, user: null };
  }
}

/**
 * Create a new account with email and password
 * @param {string} email 
 * @param {string} password 
 * @param {string} displayName - Optional display name
 * @returns {Promise<{error: null|Error, user: object|null}>}
 */
export async function createAccount(email, password, displayName = '') {
  if (!isFirebaseConfigured() || !auth) {
    // Local fallback: create a user in localStorage (for development/testing only)
    try {
      if (!email || !password) {
        return { error: new Error('Email and password are required for local account'), user: null };
      }

      const raw = localStorage.getItem(LOCAL_USERS_KEY);
      const users = raw ? JSON.parse(raw) : [];

      if (users.find(u => u.email === email)) {
        return { error: Object.assign(new Error('auth/email-already-in-use'), { code: 'auth/email-already-in-use' }), user: null };
      }

      const newUser = { uid: `local-${uuid()}`, email, password, displayName, isAnonymous: false };
      users.push(newUser);
      localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(users));
      currentUser = { uid: newUser.uid, email: newUser.email, displayName: newUser.displayName, isAnonymous: false };
      localStorage.setItem(LOCAL_CURRENT_USER_KEY, JSON.stringify(currentUser));
      log.info('Local account created:', currentUser.uid);
      // Notify listeners about new account / sign-in
      _notifyAuthListeners(currentUser);
      return { error: null, user: currentUser };
    } catch (error) {
      log.error('Error creating local account:', error);
      return { error, user: null };
    }
  }

  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    
    // Set display name if provided
    if (displayName) {
      await updateProfile(result.user, { displayName });
    }

    currentUser = result.user;
    log.info('Account created:', result.user.uid);
    return { error: null, user: result.user };
  } catch (error) {
    log.error('Error creating account:', error);
    return { error, user: null };
  }
}

/**
 * Sign in with email and password
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<{error: null|Error, user: object|null}>}
 */
export async function signInWithEmail(email, password) {
  if (!isFirebaseConfigured() || !auth) {
    try {
      const raw = localStorage.getItem(LOCAL_USERS_KEY);
      const users = raw ? JSON.parse(raw) : [];
      const found = users.find(u => u.email === email && u.password === password);
      if (!found) {
        return { error: Object.assign(new Error('auth/user-not-found'), { code: 'auth/user-not-found' }), user: null };
      }
      currentUser = { uid: found.uid, email: found.email, displayName: found.displayName || '', isAnonymous: false };
      localStorage.setItem(LOCAL_CURRENT_USER_KEY, JSON.stringify(currentUser));
      log.info('Signed in locally:', currentUser.uid);
      // Notify listeners about sign-in
      _notifyAuthListeners(currentUser);
      return { error: null, user: currentUser };
    } catch (error) {
      log.error('Error signing in locally:', error);
      return { error, user: null };
    }
  }

  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    currentUser = result.user;
    log.info('Signed in with email:', result.user.uid);
    return { error: null, user: result.user };
  } catch (error) {
    log.error('Error signing in with email:', error);
    return { error, user: null };
  }
}

/**
 * Sign out the current user
 * @returns {Promise<{error: null|Error}>}
 */
export async function signOut() {
  if (!isFirebaseConfigured() || !auth) {
    // Local sign out
    try {
      currentUser = null;
      localStorage.removeItem(LOCAL_CURRENT_USER_KEY);
      log.info('Signed out (local)');
      // Notify listeners about sign-out
      _notifyAuthListeners(null);
      return { error: null };
    } catch (error) {
      return { error };
    }
  }

  try {
    await firebaseSignOut(auth);
    currentUser = null;
    log.info('Signed out');
    return { error: null };
  } catch (error) {
    log.error('Error signing out:', error);
    return { error };
  }
}

/**
 * Get the current user
 * @returns {object|null}
 */
export function getCurrentUser() {
  return currentUser;
}

/**
 * Check if user is authenticated
 * @returns {boolean}
 */
export function isAuthenticated() {
  return currentUser !== null;
}

/**
 * Get the current user's ID
 * @returns {string|null}
 */
export function getUserId() {
  return currentUser?.uid || null;
}




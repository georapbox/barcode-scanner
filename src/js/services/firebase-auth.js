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

/**
 * Authentication service for Firebase
 * Handles user authentication with anonymous and email/password methods
 */

let currentUser = null;
let authStateListeners = [];

/**
 * Initialize authentication and set up auth state listener
 */
export function initAuth() {
  if (!isFirebaseConfigured() || !auth) {
    log.warn('Firebase not configured. Running in local-only mode.');
    return Promise.resolve(null);
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
  if (!isFirebaseConfigured() || !auth) {
    // Return a no-op unsubscribe function if Firebase is not configured
    return () => {};
  }

  authStateListeners.push(callback);
  
  // Call immediately with current user
  if (currentUser !== null) {
    callback(currentUser);
  }

  return onAuthStateChanged(auth, user => {
    currentUser = user;
    callback(user);
  });
}

/**
 * Sign in anonymously
 * This allows users to start using the app without creating an account
 * @returns {Promise<{error: null|Error, user: object|null}>}
 */
export async function signInAnonymous() {
  if (!isFirebaseConfigured() || !auth) {
    return { error: new Error('Firebase not configured'), user: null };
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
    return { error: new Error('Firebase not configured'), user: null };
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
    return { error: new Error('Firebase not configured'), user: null };
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
    return { error: new Error('Firebase not configured') };
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




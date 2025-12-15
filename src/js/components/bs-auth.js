import { isFirebaseConfigured, initFirebaseRuntime } from '../services/firebase-config.js';
import {
  onAuthStateChange,
  signInAnonymous,
  signInWithEmail,
  createAccount,
  signOut,
  getCurrentUser
} from '../services/firebase-auth.js';
import { initFirestore } from '../services/firebase-scans.js';
import { initAuth } from '../services/firebase-auth.js';
import { log } from '../utils/log.js';
import { toastify } from '../helpers/toastify.js';

const styles = /* css */ `
  :host {
    display: block;
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none !important;
  }

  .auth-container {
    padding: 1rem;
  }

  .auth-status {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    background-color: var(--background-secondary, #f5f5f5);
    border-radius: var(--border-radius, 0.25rem);
    margin-bottom: 1rem;
  }

  .auth-status__icon {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: var(--primary-color, #0066cc);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }

  .auth-status__info {
    flex: 1;
  }

  .auth-status__email {
    font-weight: 600;
    color: var(--text-main);
  }

  .auth-status__type {
    font-size: 0.875rem;
    color: var(--text-muted);
  }

  .auth-tabs {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--border);
  }

  .auth-tab {
    padding: 0.5rem 1rem;
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    color: var(--text-muted);
    font-size: 0.9rem;
  }

  .auth-tab.active {
    color: var(--text-main);
    border-bottom-color: var(--primary-color);
  }

  .auth-form {
    display: none;
  }

  .auth-form.active {
    display: block;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.25rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text-main);
  }

  .form-group input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid var(--border);
    border-radius: var(--border-radius);
    font-size: 1rem;
    font-family: inherit;
  }

  .form-group input:focus {
    outline: none;
    border-color: var(--primary-color);
  }

  .btn {
    width: 100%;
    padding: 0.625rem;
    border: 0;
    border-radius: var(--border-radius);
    background-color: var(--primary-color, #0066cc);
    color: white;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 500;
  }

  .btn:hover {
    opacity: 0.9;
  }

  .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .btn-secondary {
    background-color: var(--secondary-color, #6c757d);
  }

  .btn-danger {
    background-color: var(--danger-color, #dc3545);
  }

  .error-message {
    padding: 0.5rem;
    margin-bottom: 1rem;
    background-color: #fee;
    border: 1px solid #fcc;
    border-radius: var(--border-radius);
    color: #c00;
    font-size: 0.875rem;
  }

  .info-message {
    padding: 0.75rem;
    margin-bottom: 1rem;
    background-color: #e7f3ff;
    border: 1px solid #b3d9ff;
    border-radius: var(--border-radius);
    color: #004085;
    font-size: 0.875rem;
  }

  .divider {
    display: flex;
    align-items: center;
    margin: 1rem 0;
    color: var(--text-muted);
    font-size: 0.875rem;
  }

  .divider::before,
  .divider::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid var(--border);
  }

  .divider::before {
    margin-right: 0.5rem;
  }

  .divider::after {
    margin-left: 0.5rem;
  }

  @media (prefers-color-scheme: dark) {
    .auth-status {
      background-color: #2a2a2a;
    }

    .error-message {
      background-color: #3d1a1a;
      border-color: #5a2626;
      color: #ff8080;
    }

    .info-message {
      background-color: #1a2d3d;
      border-color: #264d73;
      color: #80c4ff;
    }
  }
`;

const template = document.createElement('template');

template.innerHTML = /* html */ `
  <style>${styles}</style>
  <div class="auth-container">
    <div id="authStatus" hidden>
      <div class="auth-status">
        <div class="auth-status__icon" id="userIcon"></div>
        <div class="auth-status__info">
          <div class="auth-status__email" id="userEmail"></div>
          <div class="auth-status__type" id="userType"></div>
        </div>
      </div>
      <button type="button" class="btn btn-danger" id="signOutBtn">Sign Out</button>
    </div>

    <div id="authForms" hidden>
      <div class="info-message" id="firebaseNotConfigured" hidden>
        <strong>Firebase Not Configured</strong><br>
        Your scans are being saved locally. To sync across devices, configure Firebase in your project.
        <div style="margin-top:0.5rem;">
          <small>Paste your Firebase web app config (JSON) below and click Configure to enable auth & syncing.</small>
          <textarea id="firebaseConfigInput" style="width:100%;height:6rem;margin-top:0.5rem;font-family:monospace;" placeholder='{"apiKey":"...","authDomain":"...","projectId":"...","storageBucket":"...","messagingSenderId":"...","appId":"..."}'></textarea>
          <div style="display:flex;gap:0.5rem;margin-top:0.5rem;"><button type="button" class="btn" id="firebaseConfigureBtn">Configure Firebase</button><button type="button" class="btn btn-secondary" id="firebaseClearBtn">Clear</button></div>
        </div>
      </div>

      <div class="auth-tabs">
        <button class="auth-tab active" data-tab="anonymous">Quick Start</button>
        <button class="auth-tab" data-tab="signin">Sign In</button>
        <button class="auth-tab" data-tab="signup">Sign Up</button>
      </div>

      <div class="auth-form active" id="anonymousForm">
        <div class="info-message">
          Start scanning immediately without creating an account. Your scans will be saved to your device and synced to the cloud.
        </div>
        <button type="button" class="btn" id="anonymousBtn">Continue Without Account</button>
      </div>

      <div class="auth-form" id="signinForm">
        <form>
          <div class="form-group">
            <label for="signinEmail">Email</label>
            <input type="email" id="signinEmail" required autocomplete="email">
          </div>
          <div class="form-group">
            <label for="signinPassword">Password</label>
            <input type="password" id="signinPassword" required autocomplete="current-password">
          </div>
          <div id="signinError" class="error-message" hidden></div>
          <button type="submit" class="btn" id="signinBtn">Sign In</button>
        </form>
        <div class="divider">or</div>
        <button type="button" class="btn btn-secondary" id="signinAnonymousBtn">Continue Without Account</button>
      </div>

      <div class="auth-form" id="signupForm">
        <form>
          <div class="form-group">
            <label for="signupEmail">Email</label>
            <input type="email" id="signupEmail" required autocomplete="email">
          </div>
          <div class="form-group">
            <label for="signupPassword">Password</label>
            <input type="password" id="signupPassword" required autocomplete="new-password" minlength="6">
          </div>
          <div class="form-group">
            <label for="signupDisplayName">Display Name (optional)</label>
            <input type="text" id="signupDisplayName" autocomplete="name">
          </div>
          <div id="signupError" class="error-message" hidden></div>
          <button type="submit" class="btn" id="signupBtn">Create Account</button>
        </form>
        <div class="divider">or</div>
        <button type="button" class="btn btn-secondary" id="signupAnonymousBtn">Continue Without Account</button>
      </div>
    </div>
  </div>
`;

class BSAuth extends HTMLElement {
  #authStatusEl = null;
  #authFormsEl = null;
  #unsubscribeAuth = null;

  constructor() {
    super();

    if (!this.shadowRoot) {
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  connectedCallback() {
    this.#authStatusEl = this.shadowRoot.getElementById('authStatus');
    this.#authFormsEl = this.shadowRoot.getElementById('authForms');

    // // Show Firebase not configured message if needed
    // if (!isFirebaseConfigured()) {
    //   this.shadowRoot.getElementById('firebaseNotConfigured')?.removeAttribute('hidden');
    // }

    // Set up event listeners
    this.#setupEventListeners();

    // Configure Firebase button
    const configureBtn = this.shadowRoot.getElementById('firebaseConfigureBtn');
    const clearBtn = this.shadowRoot.getElementById('firebaseClearBtn');
    if (configureBtn) configureBtn.addEventListener('click', () => this.#handleConfigureFirebase());
    if (clearBtn) clearBtn.addEventListener('click', () => this.#handleClearFirebaseInput());

    // Subscribe to auth state changes
    this.#unsubscribeAuth = onAuthStateChange(user => {
      this.#handleAuthStateChange(user);
    });

    // Check initial auth state
    const currentUser = getCurrentUser();
    this.#handleAuthStateChange(currentUser);
  }

  disconnectedCallback() {
    if (this.#unsubscribeAuth) {
      this.#unsubscribeAuth();
    }
  }

  #setupEventListeners() {
    // Tab switching
    const tabs = this.shadowRoot.querySelectorAll('.auth-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => this.#switchTab(tab.dataset.tab));
    });

    // Anonymous sign in
    this.shadowRoot.getElementById('anonymousBtn')?.addEventListener('click', () => this.#handleAnonymousSignIn());
    this.shadowRoot.getElementById('signinAnonymousBtn')?.addEventListener('click', () => this.#handleAnonymousSignIn());
    this.shadowRoot.getElementById('signupAnonymousBtn')?.addEventListener('click', () => this.#handleAnonymousSignIn());

    // Sign in form
    this.shadowRoot.getElementById('signinForm')?.addEventListener('submit', (e) => this.#handleSignIn(e));

    // Sign up form
    this.shadowRoot.getElementById('signupForm')?.addEventListener('submit', (e) => this.#handleSignUp(e));

    // Sign out
    this.shadowRoot.getElementById('signOutBtn')?.addEventListener('click', () => this.#handleSignOut());
  }

  #switchTab(tabName) {
    const tabs = this.shadowRoot.querySelectorAll('.auth-tab');
    const forms = this.shadowRoot.querySelectorAll('.auth-form');

    tabs.forEach(tab => {
      if (tab.dataset.tab === tabName) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    forms.forEach(form => {
      if (form.id === `${tabName}Form`) {
        form.classList.add('active');
      } else {
        form.classList.remove('active');
      }
    });
  }

  async #handleAnonymousSignIn() {
    const btn = this.shadowRoot.getElementById('anonymousBtn');
    if (btn) btn.disabled = true;

    const { error, user } = await signInAnonymous();

    if (error) {
      log.error('Error signing in anonymously:', error);
      toastify('Error signing in. Please try again.', { variant: 'danger' });
      if (btn) btn.disabled = false;
    } else {
      toastify('Signed in successfully!', { variant: 'success' });
    }
  }

  async #handleSignIn(event) {
    event.preventDefault();
    const emailInput = this.shadowRoot.getElementById('signinEmail');
    const passwordInput = this.shadowRoot.getElementById('signinPassword');
    const errorEl = this.shadowRoot.getElementById('signinError');
    const btn = this.shadowRoot.getElementById('signinBtn');

    if (btn) btn.disabled = true;
    if (errorEl) errorEl.hidden = true;

    const { error, user } = await signInWithEmail(emailInput.value, passwordInput.value);

    if (error) {
      log.error('Error signing in:', error);
      if (errorEl) {
        errorEl.textContent = this.#getErrorMessage(error);
        errorEl.hidden = false;
      }
      if (btn) btn.disabled = false;
    } else {
      toastify('Signed in successfully!', { variant: 'success' });
      passwordInput.value = '';
    }
  }

  async #handleSignUp(event) {
    event.preventDefault();
    const emailInput = this.shadowRoot.getElementById('signupEmail');
    const passwordInput = this.shadowRoot.getElementById('signupPassword');
    const displayNameInput = this.shadowRoot.getElementById('signupDisplayName');
    const errorEl = this.shadowRoot.getElementById('signupError');
    const btn = this.shadowRoot.getElementById('signupBtn');

    if (btn) btn.disabled = true;
    if (errorEl) errorEl.hidden = true;

    const { error, user } = await createAccount(
      emailInput.value,
      passwordInput.value,
      displayNameInput.value
    );

    if (error) {
      log.error('Error creating account:', error);
      if (errorEl) {
        errorEl.textContent = this.#getErrorMessage(error);
        errorEl.hidden = false;
      }
      if (btn) btn.disabled = false;
    } else {
      toastify('Account created successfully!', { variant: 'success' });
      passwordInput.value = '';
    }
  }

  async #handleSignOut() {
    const btn = this.shadowRoot.getElementById('signOutBtn');
    if (btn) btn.disabled = true;

    const { error } = await signOut();

    if (error) {
      log.error('Error signing out:', error);
      toastify('Error signing out. Please try again.', { variant: 'danger' });
      if (btn) btn.disabled = false;
    } else {
      toastify('Signed out successfully', { variant: 'success' });
    }
  }

  async #handleConfigureFirebase() {
    const inputEl = this.shadowRoot.getElementById('firebaseConfigInput');
    if (!inputEl) return;

    const raw = inputEl.value.trim();
    if (!raw) {
      toastify('Please paste your Firebase config JSON first', { variant: 'warning' });
      return;
    }

    let parsed = null;
    try {
      parsed = JSON.parse(raw);
    } catch (err) {
      toastify('Invalid JSON. Please check and try again.', { variant: 'danger' });
      return;
    }

    const { error } = initFirebaseRuntime(parsed);
    if (error) {
      log.error('Error initializing Firebase with provided config:', error);
      toastify('Failed to initialize Firebase. Check console for details.', { variant: 'danger' });
      return;
    }

    // Try to initialize Firestore persistence and auth
    try {
      await initFirestore();
    } catch (e) {
      // non-fatal
    }

    try {
      const user = await initAuth();
      if (!user) {
        // attempt anonymous sign-in if allowed
        await signInAnonymous();
      }
    } catch (e) {
      // ignore
    }

    // Re-subscribe to auth state changes now that Firebase is initialized
    try {
      if (this.#unsubscribeAuth) {
        this.#unsubscribeAuth();
      }
      this.#unsubscribeAuth = onAuthStateChange(user => this.#handleAuthStateChange(user));
    } catch (e) {
      // ignore
    }

    // Hide the not-configured message and refresh UI
    this.shadowRoot.getElementById('firebaseNotConfigured')?.setAttribute('hidden', '');
    toastify('Firebase configured successfully', { variant: 'success' });

    // Enable sign-in/sign-up buttons now that Firebase is configured
    const signinBtn = this.shadowRoot.getElementById('signinBtn');
    const signupBtn = this.shadowRoot.getElementById('signupBtn');
    if (signinBtn) signinBtn.disabled = false;
    if (signupBtn) signupBtn.disabled = false;
  }

  #handleClearFirebaseInput() {
    const inputEl = this.shadowRoot.getElementById('firebaseConfigInput');
    if (inputEl) inputEl.value = '';
  }

  #handleAuthStateChange(user) {
    if (user) {
      // User is signed in
      this.#authStatusEl?.removeAttribute('hidden');
      this.#authFormsEl?.setAttribute('hidden', '');

      const userIcon = this.shadowRoot.getElementById('userIcon');
      const userEmail = this.shadowRoot.getElementById('userEmail');
      const userType = this.shadowRoot.getElementById('userType');

      if (userIcon) {
        userIcon.textContent = user.email ? user.email[0].toUpperCase() : '?';
      }

      if (userEmail) {
        userEmail.textContent = user.email || 'Anonymous User';
      }

      if (userType) {
        userType.textContent = user.isAnonymous ? 'Anonymous Account' : 'Email Account';
      }

      // Emit custom event
      this.dispatchEvent(new CustomEvent('auth-state-changed', {
        bubbles: true,
        composed: true,
        detail: { user }
      }));
    } else {
      // User is signed out
      this.#authStatusEl?.setAttribute('hidden', '');
      this.#authFormsEl?.removeAttribute('hidden');

      // Emit custom event
      this.dispatchEvent(new CustomEvent('auth-state-changed', {
        bubbles: true,
        composed: true,
        detail: { user: null }
      }));
    }
  }

  #getErrorMessage(error) {
    switch (error.code) {
      case 'auth/email-already-in-use':
        return 'This email is already in use. Please sign in or use a different email.';
      case 'auth/invalid-email':
        return 'Invalid email address.';
      case 'auth/weak-password':
        return 'Password should be at least 6 characters.';
      case 'auth/user-not-found':
        return 'No account found with this email.';
      case 'auth/wrong-password':
        return 'Incorrect password.';
      case 'auth/too-many-requests':
        return 'Too many failed attempts. Please try again later.';
      case 'auth/network-request-failed':
        return 'Network error. Please check your connection.';
      default:
        return error.message || 'An error occurred. Please try again.';
    }
  }

  static defineCustomElement(elementName = 'bs-auth') {
    if (typeof window !== 'undefined' && !window.customElements.get(elementName)) {
      window.customElements.define(elementName, BSAuth);
    }
  }
}

BSAuth.defineCustomElement();

export { BSAuth };




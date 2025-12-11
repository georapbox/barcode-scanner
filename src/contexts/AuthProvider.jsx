import React, { createContext, useContext, useEffect, useState } from 'react';
import { initAuth, onAuthStateChange, getCurrentUser } from '../js/services/firebase-auth.js';

const AuthContext = createContext({ user: null, getIdToken: async () => null });

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let mounted = true;
    initAuth()
      .then(u => {
        if (mounted) setUser(u || getCurrentUser() || null);
      })
      .catch(() => {
        if (mounted) setUser(getCurrentUser() || null);
      });

    const unsub = onAuthStateChange(u => setUser(u || null));
    return () => {
      try { unsub && unsub(); } catch (e) {}
      mounted = false;
    };
  }, []);

  async function getIdToken() {
    if (!user) return null;
    try {
      if (typeof user.getIdToken === 'function') return await user.getIdToken();
      return null;
    } catch (e) {
      return null;
    }
  }

  return <AuthContext.Provider value={{ user, getIdToken }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import { AuthProvider } from './contexts/AuthProvider.jsx';
import './css/main.css';

const rootEl = document.getElementById('root') || document.createElement('div');
if (!document.getElementById('root')) {
  rootEl.id = 'root';
  document.body.appendChild(rootEl);
}

createRoot(rootEl).render(
  <React.StrictMode>
    <AuthProvider>
      <HashRouter>
        {/* <App /> */}
      </HashRouter>
    </AuthProvider>
  </React.StrictMode>
);

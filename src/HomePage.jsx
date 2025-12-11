import React from 'react';
import './css/main.css';

export default function App() {
  return (
    <div className="home-page">
      <noscript>
        <div className="noscript">JavaScript is required to properly view this site.</div>
      </noscript>

      <div className="global-actions" id="globalActions" hidden>
        <button id="authBtn" aria-label="Account">
          <svg width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
          </svg>
          <span>Account</span>
        </button>

        <button id="historyBtn" aria-label="History">
          <svg width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022z" />
          </svg>
          <span>History</span>
        </button>

        <button id="settingsBtn" aria-label="Settings">
          <svg width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
            <path fillRule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3" />
          </svg>
          <span>Settings</span>
        </button>
      </div>

      <header className="navigation">
        <a href="./index.html">
          <h1 className="header-title">Barcode Scanner App</h1>
        </a>
        <ul id="HeaderList" className="navigationList">
          <li className="navigationListItem" id="1">
            <a href="./index.html">Home</a>
          </li>
          <li className="navigationListItem" id="2">
            <a href="./Ingredients.html">Ingredients</a>
          </li>
          <li className="navigationListItem" id="3">
            <a href="./recipes.html">Recipes</a>
          </li>
          <li className="navigationListItem">
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" defaultValue="" />
              <input type="submit" value="Search" />
            </form>
          </li>
        </ul>
      </header>

      <header className="site-header">
        <svg width="5em" height="5em" className="logo" aria-hidden="true" viewBox="0 0 512 512">
          <path fill="var(--accent)" d="M93.867,51.2H8.533C3.814,51.2,0,55.014,0,59.733v85.333c0,4.719,3.814,8.533,8.533,8.533s8.533-3.814,8.533-8.533v-76.8 h76.8c4.719,0,8.533-3.814,8.533-8.533S98.586,51.2,93.867,51.2z" />
        </svg>
        <h1>Barcode/QR code Scanner</h1>
      </header>

      <div className="container">
        <a-tab-group no-scroll-controls no-tab-cycling>
          <a-tab role="heading" id="cameraTab">
            <span>Use webcam</span>
          </a-tab>

          <a-tab-panel id="cameraPanel">
            <div className="scan-frame-container">
              <resize-observer>
                <video-capture autoPlay>
                  <button type="button" id="scanBtn" className="scan-button" hidden>
                    <svg width="2.75em" height="2.75em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3z" />
                    </svg>
                    <span>Click to scan another barcode or press the <kbd>Esc</kbd> key.</span>
                  </button>

                  <div slot="actions">
                    <button type="button" className="torch-button" id="torchButton" aria-label="Turn on flash" hidden>
                      <svg viewBox="0 0 512 512" width="1.25em" height="1.25em" aria-hidden="true">
                        <path d="M315.27 33L96 304h128l-31.51 173.23" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                      </svg>
                    </button>

                    <select id="cameraSelect" className="camera-select" aria-label="Select camera" defaultValue="">
                      <option value="" disabled>
                        --Select Camera--
                      </option>
                    </select>

                    <div className="zoom-controls" id="zoomControls" hidden>
                      <button type="button" aria-label="Zoom out" data-action="zoom-out">
                        -
                      </button>
                      <label id="zoomLevel" />
                      <button type="button" aria-label="Zoom in" data-action="zoom-in">
                        +
                      </button>
                    </div>
                  </div>
                </video-capture>
              </resize-observer>

              <div id="scanFrame" className="scan-frame" hidden>
                <svg viewBox="0 0 512 512">
                  <path d="M336 448h56a56 56 0 0056-56v-56M448 176v-56a56 56 0 00-56-56h-56" fill="none" stroke="var(--scan-frame-color)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10" />
                </svg>
              </div>
            </div>

            <div id="scanInstructions" className="scan-instructions" hidden>
              Align barcode in the center of the frame.
            </div>

            <div className="results" />
          </a-tab-panel>

          <a-tab role="heading" id="fileTab">
            <span>Use image</span>
          </a-tab>

          <a-tab-panel id="filePanel">
            <files-dropzone id="dropzone" className="dropzone">
              <span className="dropzone-instructions">Click or drop an image to scan</span>
            </files-dropzone>

            <div className="results" />
          </a-tab-panel>
        </a-tab-group>
      </div>

      <footer>
        <div className="source-code">
          <svg width="1.25em" height="1.25em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59" />
          </svg>
          <span>
            Source code on{' '}
            <a href="https://github.com/georapbox/barcode-scanner" className="text-underline" target="_blank" rel="noreferrer noopener">
              Github
            </a>
          </span>
        </div>
        <p>
          Licensed under{' '}
          <a href="https://github.com/georapbox/barcode-scanner/blob/main/LICENSE" target="_blank" rel="noopener">
            The MIT License (MIT)
          </a>
        </p>
      </footer>

      {/* Modals / Custom elements (left as-is) */}
      <modal-element id="authDialog" className="popover-dialog auth-dialog" placement="top-end" hidden>
        <span slot="header">Account</span>
        <bs-auth />
      </modal-element>

      <modal-element id="historyDialog" className="popover-dialog history-dialog" placement="top-end" hidden>
        <span slot="header">History</span>
        <bs-history />
      </modal-element>

      <modal-element id="settingsDialog" className="popover-dialog settings-dialog" placement="top-end" hidden>
        <span slot="header">Settings</span>
        <bs-settings>
          <form id="settingsForm" autoComplete="off">
            <fieldset>
              <legend>When barcode is detected...</legend>
              <ul>
                <li>
                  <label>
                    <input type="checkbox" name="general-settings" value="openWebPage" /> Open web pages automatically
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="general-settings" value="openWebPageSameTab" /> Open web pages in the same tab
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="general-settings" value="addToHistory" /> Add to history
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="general-settings" value="continueScanning" /> Continue scanning
                  </label>
                </li>
              </ul>
            </fieldset>

            <fieldset>
              <legend>Effects</legend>
              <ul>
                <li>
                  <label>
                    <input type="checkbox" name="general-settings" value="beep" /> Beep
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="general-settings" value="vibrate" /> Vibrate (Android)
                  </label>
                </li>
              </ul>
            </fieldset>

            <fieldset name="bs-formats">
              <legend>
                Supported formats
                <br />
                <small className="text-muted fw-normal">If none is checked, all formats will be supported.</small>
              </legend>
              <ul id="formatsList" className="formats-list" />
            </fieldset>
          </form>
        </bs-settings>
      </modal-element>

      {/* Footer navigation (Ellie) */}
      <footer className="navigation">
        <ul id="NavigationFooterList" className="navigationList">
          <li className="navigationListItem" id="1">
            <a href="./about.html">About</a>
          </li>
          <li className="navigationListItem" id="2">
            <a href="./faq.html">FAQ</a>
          </li>
          <li className="navigationListItem" id="3">
            <a href="./contact.html">Contact</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

<p align="center">
  <a href="https://georapbox.github.io/barcode-scanner/">
    <img src="assets/logo.png" width="130" height="130" alt="Barcode Scanner">
  </a>
</p>

<h1 align="center">Barcode/QR code Scanner</h1>

A Progressive Web Application (PWA) that scans barcodes of various formats, using the [Barcode Detection API](https://developer.mozilla.org/docs/Web/API/Barcode_Detection_API).

> **NOTE**: The Barcode Detection API is part of the [Fugu](https://fugu-tracker.web.app/) project. Currently it is supported only on Chromium browsers in MacOS and Android. For non-supporting browsers, a [polyfill](https://github.com/gruhn/barcode-detector) is used.

[Live demo](https://georapbox.github.io/barcode-scanner/)

## Features

- Scan barcodes from web camera
- Scan barcodes from image files
- Copy detected barcode to clipboard
- Share detected barcode via Web Share API (Android)
- If barcode is a URL, offer option to open in new tab
- Offer to save detected barcodes to history (local storage)

## Screenshots

![Screenshot dark](assets/screenshot-dark.png)

## Development

Below are the instructions for setting up the development environment.

### Prerequisites

- Node.js (v20.x.x)
- npm (v10.x.x)

### Installation

Clone the repository to your local machine:

```bash
git clone git@github.com:georapbox/barcode-scanner.git
```

Navigate to the project's directory and install the dependencies:

```bash
npm install
```

### Running the application

To run the application in development mode, run the following command:

```bash
npm start -- --open
```

This will start the development server and open the application in your default web browser.

### Building the application for production

To build the application for production, run the following command:

```bash
npm run build
```

This will create a `dist` directory containing the production build of the application.

### Deployment

To deploy the application, run the following command:

```bash
npm run deploy
```

This will build the application first and then deploy it to GitHub Pages in the `gh-pages` branch.

## License

[The MIT License (MIT)](https://georapbox.mit-license.org/@2022)

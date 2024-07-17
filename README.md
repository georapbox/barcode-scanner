# Barcode/QR code Scanner

A Progressive Web Application (PWA) that scans barcodes of various formats, using the [Barcode Detection API](https://developer.mozilla.org/docs/Web/API/Barcode_Detection_API).

> [!NOTE]
> The Barcode Detection API is part of the [Fugu](https://fugu-tracker.web.app/) project. Currently it is supported only on Chromium browsers in MacOS and Android. For non-supporting browsers, a [polyfill](https://github.com/gruhn/barcode-detector) is used.

## Live demo

👉 [Barcode/QR code Scanner](https://georapbox.github.io/barcode-scanner/)

## Features

Some of the key features of the application include:

- Scan barcodes from web camera
- Scan barcodes from image files
- Copy detected barcode to clipboard
- Share detected barcode via Web Share API (mobile)
- Offer option to open detected barcode in a new tab if it is a URL
- Offer to save detected barcodes to history (IndexedDB)

## Screenshots

The following screenshots show the application in action:

![Camera scanner screenshot](screenshots/camera-scanner.png)
![Image scanner screenshot](screenshots/image-scanner.png)

## Development

Below are the instructions for setting up the development environment.

### Prerequisites

- Node.js (v20.x.x)
- npm (v10.x.x)

### Installation

Clone the repository to your local machine:

```sh
git clone git@github.com:georapbox/barcode-scanner.git
```

Navigate to the project's directory and install the dependencies:

```sh
npm install
```

### Running the application

To run the application in development mode, run the following command:

```sh
npm start -- --open
```

This will start the development server and open the application in your default web browser.

### Building the application for production

To build the application for production, run the following command:

```sh
npm run build
```

This will create a `dist` directory containing the production build of the application.

### Deployment

To deploy the application, run the following command:

```sh
npm run deploy
```

This will build the application first and then deploy it to GitHub Pages in the `gh-pages` branch.

## License

[The MIT License (MIT)](https://github.com/georapbox/barcode-scanner/blob/main/LICENSE)

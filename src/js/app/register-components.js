import '@georapbox/a-tab-group/dist/a-tab-group.js';
import '@georapbox/web-share-element/dist/web-share-defined.js';
import '@georapbox/files-dropzone-element/dist/files-dropzone-defined.js';
import '@georapbox/resize-observer-element/dist/resize-observer-defined.js';
import '@georapbox/modal-element/dist/modal-element-defined.js';
import '@georapbox/alert-element/dist/alert-element-defined.js';
import { CameraScanner } from '../features/camera-scanner/camera-scanner.js';
import { FileScanner } from '../features/file-scanner/file-scanner.js';
import { ScanResult } from '../features/scan-results/scan-result.js';
import { ScanSettings } from '../features/settings/scan-settings.js';
import { ScanHistory } from '../features/scan-history/scan-history.js';
import { ClipboardCopy } from '../shared/components/clipboard-copy.js';

export function registerComponents() {
  CameraScanner.define();
  FileScanner.define();
  ScanResult.define();
  ScanSettings.define();
  ScanHistory.define();
  ClipboardCopy.define();
}

registerComponents();

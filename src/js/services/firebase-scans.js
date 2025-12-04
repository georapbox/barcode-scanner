import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  limit,
  Timestamp,
  enableIndexedDbPersistence,
  writeBatch
} from 'firebase/firestore';
import { db, isFirebaseConfigured } from './firebase-config.js';
import { getUserId } from './firebase-auth.js';
import { log } from '../utils/log.js';
import { getHistory, setHistory } from './storage.js';

const SCANS_COLLECTION = 'scans';

/**
 * Initialize Firestore with offline persistence
 */
export async function initFirestore() {
  if (!isFirebaseConfigured() || !db) {
    log.warn('Firestore not configured. Running in local-only mode.');
    return { error: null };
  }

  try {
    await enableIndexedDbPersistence(db);
    log.info('Firestore offline persistence enabled');
    return { error: null };
  } catch (error) {
    if (error.code === 'failed-precondition') {
      // Multiple tabs open, persistence can only be enabled in one tab at a time
      log.warn('Firestore persistence failed: Multiple tabs open');
    } else if (error.code === 'unimplemented') {
      // The current browser doesn't support persistence
      log.warn('Firestore persistence not supported in this browser');
    } else {
      log.error('Error enabling Firestore persistence:', error);
    }
    return { error };
  }
}

/**
 * Save a scan to Firestore
 * @param {object} scanData - The scan data to save
 * @param {string} scanData.value - The barcode value
 * @param {string} [scanData.format] - The barcode format (e.g., 'qr_code', 'ean_13')
 * @param {string} [scanData.title] - Product title from API
 * @param {string} [scanData.brand] - Product brand from API
 * @param {string} [scanData.description] - Product description from API
 * @param {object} [scanData.metadata] - Additional metadata
 * @returns {Promise<{error: null|Error, scanId: string|null}>}
 */
export async function saveScan(scanData) {
  const userId = getUserId();

  // If Firebase is not configured or user is not authenticated, save to local storage only
  if (!isFirebaseConfigured() || !db || !userId) {
    log.info('Saving scan locally (Firebase not available or user not authenticated)');
    
    try {
      // Save to local storage using existing storage service
      const [, history = []] = await getHistory();
      const newScan = {
        value: scanData.value,
        addedAt: Date.now(),
        expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), // 30 days (1 month)
        notified: false,
        preNotified: false,
        title: scanData.title || '',
        brand: scanData.brand || '',
        description: scanData.description || '',
        imageUrl: scanData.imageUrl || '',
        format: scanData.format || '',
        metadata: scanData.metadata || {}
      };
      
      await setHistory([...history, newScan]);
      return { error: null, scanId: null };
    } catch (error) {
      log.error('Error saving scan locally:', error);
      return { error, scanId: null };
    }
  }

  try {
    const scan = {
      userId,
      value: scanData.value,
      format: scanData.format || '',
      title: scanData.title || '',
      brand: scanData.brand || '',
      description: scanData.description || '',
      imageUrl: scanData.imageUrl || '',
      metadata: scanData.metadata || {},
      scannedAt: Timestamp.now(),
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    };

    const docRef = await addDoc(collection(db, SCANS_COLLECTION), scan);
    log.info('Scan saved to Firestore:', docRef.id);

    // Also save to local storage as a backup
    try {
      const [, history = []] = await getHistory();
        const localScan = {
          value: scanData.value,
          addedAt: Date.now(),
          expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), // 30 days (1 month)
          notified: false,
          preNotified: false,
          title: scanData.title || '',
          brand: scanData.brand || '',
          description: scanData.description || '',
          imageUrl: scanData.imageUrl || '',
          format: scanData.format || '',
          firestoreId: docRef.id
        };
      await setHistory([...history, localScan]);
    } catch (localError) {
      log.warn('Error saving to local storage:', localError);
      // Non-fatal, continue
    }

    return { error: null, scanId: docRef.id };
  } catch (error) {
    log.error('Error saving scan to Firestore:', error);

    // Fallback: save to local storage
    try {
      const [, history = []] = await getHistory();
      const localScan = {
        value: scanData.value,
        addedAt: Date.now(),
        expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), // 30 days (1 month)
        notified: false,
        preNotified: false,
        title: scanData.title || '',
        brand: scanData.brand || '',
        description: scanData.description || '',
        imageUrl: scanData.imageUrl || '',
        format: scanData.format || '',
        pendingSync: true // Mark for sync when online
      };
      await setHistory([...history, localScan]);
      log.info('Scan saved locally, will sync when online');
    } catch (localError) {
      log.error('Error saving to local storage:', localError);
    }

    return { error, scanId: null };
  }
}

/**
 * Get all scans for the current user
 * @param {number} [maxResults=100] - Maximum number of results to return
 * @returns {Promise<{error: null|Error, scans: Array}>}
 */
export async function getUserScans(maxResults = 100) {
  const userId = getUserId();

  // If Firebase is not configured or user is not authenticated, return local storage
  if (!isFirebaseConfigured() || !db || !userId) {
    log.info('Getting scans from local storage (Firebase not available or user not authenticated)');
    
    try {
      const [error, history = []] = await getHistory();
      if (error) {
        return { error, scans: [] };
      }

      // Transform local storage format to match Firestore format
      const scans = history.map(item => ({
        id: item.firestoreId || null,
        value: typeof item === 'string' ? item : item.value,
        title: item.title || '',
        brand: item.brand || '',
        description: item.description || '',
        format: item.format || '',
        scannedAt: item.addedAt ? new Date(item.addedAt) : new Date(),
        metadata: item.metadata || {}
      }));

      return { error: null, scans };
    } catch (error) {
      log.error('Error getting scans from local storage:', error);
      return { error, scans: [] };
    }
  }

  try {
    const scansQuery = query(
      collection(db, SCANS_COLLECTION),
      where('userId', '==', userId),
      orderBy('scannedAt', 'desc'),
      limit(maxResults)
    );

    const querySnapshot = await getDocs(scansQuery);
    const scans = [];

    querySnapshot.forEach(doc => {
      scans.push({
        id: doc.id,
        ...doc.data(),
        scannedAt: doc.data().scannedAt?.toDate() || new Date()
      });
    });

    log.info(`Retrieved ${scans.length} scans from Firestore`);
    return { error: null, scans };
  } catch (error) {
    log.error('Error getting scans from Firestore:', error);

    // Fallback: try to get from local storage
    try {
      const [localError, history = []] = await getHistory();
      if (!localError) {
        const scans = history.map(item => ({
          id: item.firestoreId || null,
          value: typeof item === 'string' ? item : item.value,
          title: item.title || '',
          brand: item.brand || '',
          description: item.description || '',
          format: item.format || '',
          scannedAt: item.addedAt ? new Date(item.addedAt) : new Date(),
          metadata: item.metadata || {}
        }));

        log.info('Returning scans from local storage (Firestore unavailable)');
        return { error: null, scans };
      }
    } catch (localError) {
      log.error('Error getting scans from local storage:', localError);
    }

    return { error, scans: [] };
  }
}

/**
 * Delete a scan from Firestore
 * @param {string} scanId - The ID of the scan to delete
 * @returns {Promise<{error: null|Error}>}
 */
export async function deleteScan(scanId) {
  const userId = getUserId();

  if (!isFirebaseConfigured() || !db || !userId || !scanId) {
    log.info('Deleting scan from local storage only');
    return { error: null };
  }

  try {
    await deleteDoc(doc(db, SCANS_COLLECTION, scanId));
    log.info('Scan deleted from Firestore:', scanId);
    return { error: null };
  } catch (error) {
    log.error('Error deleting scan from Firestore:', error);
    return { error };
  }
}

/**
 * Delete all scans for the current user
 * @returns {Promise<{error: null|Error, deletedCount: number}>}
 */
export async function deleteAllUserScans() {
  const userId = getUserId();

  if (!isFirebaseConfigured() || !db || !userId) {
    log.info('Deleting all scans from local storage only');
    
    try {
      await setHistory([]);
      return { error: null, deletedCount: 0 };
    } catch (error) {
      return { error, deletedCount: 0 };
    }
  }

  try {
    const scansQuery = query(
      collection(db, SCANS_COLLECTION),
      where('userId', '==', userId)
    );

    const querySnapshot = await getDocs(scansQuery);
    const batch = writeBatch(db);
    let count = 0;

    querySnapshot.forEach(doc => {
      batch.delete(doc.ref);
      count++;
    });

    await batch.commit();
    log.info(`Deleted ${count} scans from Firestore`);

    // Also clear local storage
    try {
      await setHistory([]);
    } catch (localError) {
      log.warn('Error clearing local storage:', localError);
    }

    return { error: null, deletedCount: count };
  } catch (error) {
    log.error('Error deleting all scans from Firestore:', error);
    return { error, deletedCount: 0 };
  }
}

/**
 * Sync pending scans from local storage to Firestore
 * This is called when the user comes back online
 * @returns {Promise<{error: null|Error, syncedCount: number}>}
 */
export async function syncPendingScans() {
  const userId = getUserId();

  if (!isFirebaseConfigured() || !db || !userId) {
    return { error: new Error('Firebase not configured or user not authenticated'), syncedCount: 0 };
  }

  try {
    const [error, history = []] = await getHistory();
    if (error) {
      return { error, syncedCount: 0 };
    }

    const pendingScans = history.filter(item => item.pendingSync === true);
    
    if (pendingScans.length === 0) {
      return { error: null, syncedCount: 0 };
    }

    let syncedCount = 0;
    const updatedHistory = [...history];

    for (const scan of pendingScans) {
      try {
        const result = await saveScan({
          value: scan.value,
          title: scan.title,
          brand: scan.brand,
          description: scan.description,
          format: scan.format,
          metadata: scan.metadata
        });

        if (!result.error && result.scanId) {
          // Update local scan with Firestore ID and remove pendingSync flag
          const index = updatedHistory.findIndex(h => h === scan);
          if (index !== -1) {
            updatedHistory[index] = {
              ...updatedHistory[index],
              firestoreId: result.scanId,
              pendingSync: false
            };
          }
          syncedCount++;
        }
      } catch (syncError) {
        log.error('Error syncing individual scan:', syncError);
      }
    }

    // Update local storage with synced data
    await setHistory(updatedHistory);
    log.info(`Synced ${syncedCount} pending scans to Firestore`);

    return { error: null, syncedCount };
  } catch (error) {
    log.error('Error syncing pending scans:', error);
    return { error, syncedCount: 0 };
  }
}


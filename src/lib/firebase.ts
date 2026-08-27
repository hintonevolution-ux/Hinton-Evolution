import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Use a singleton pattern to ensure we only initialize once
let app: FirebaseApp;
export const getFirebaseApp = (): FirebaseApp => {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApp();
  }
  return app;
};

// Export getters to defer module execution until need
export const getFirebaseDb = (): Firestore => {
  return getFirestore(getFirebaseApp(), firebaseConfig.firestoreDatabaseId);
};

export const getFirebaseAuth = (): Auth => {
  return getAuth(getFirebaseApp());
};

export const googleProvider = new GoogleAuthProvider();

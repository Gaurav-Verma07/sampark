import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectDatabaseEmulator, getDatabase } from 'firebase/database';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';

const devConfig = {
  apiKey: 'demo-sampark-key',
  authDomain: 'demo-sampark.firebaseapp.com',
  databaseURL: 'https://demo-sampark.asia-southeast1.firebasedatabase.app',
  projectId: 'demo-sampark',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'demo-sampark-key',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'demo-sampark.firebaseapp.com',
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || 'https://demo-sampark.asia-southeast1.firebasedatabase.app',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'demo-sampark',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MEASUREMENT_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || '',
};


export const app = initializeApp(import.meta.env.DEV ? devConfig : firebaseConfig);
export const auth = getAuth(app);

if (import.meta.env.DEV) {
  const db = getDatabase();
  const store = getFirestore();

  // -------
  connectAuthEmulator(auth, 'http://localhost:9099');
  connectDatabaseEmulator(db, 'localhost', 9000);
  connectFirestoreEmulator(store, 'localhost', 8000);
}

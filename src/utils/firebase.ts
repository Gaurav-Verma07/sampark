import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey:` ${import.meta.env.VITE_FIREBASE_API_KEY} `,
  authDomain: `${import.meta.env.VITE_FIREBASE_AUTH_DOMAIN  }`,
  projectId: `${import.meta.env.VITE_FIREBASE_PROJECT_ID  }`  ,
   databaseURL: `${import.meta.env.VITE_FIREBASE_DATABASE_URL}`|| '',
  storageBucket: `${import.meta.env.VITE_FIREBASE_STORAGE_BUCK}` , 
  messagingSenderId: `${import.meta.env.VITE_FIREBASE_MEASUREMENT_SENDER_ID}` , 
  appId: `${import.meta.env.VITE_FIREBASE_APP_ID  
  }`,
  measurementId: `${import.meta.env.VITE_FIREBASE_MEASUREMENT_}` , 
};
console.log(firebaseConfig)

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDxXmLx3MVOluWblunBE270XmJX5WO-PKs",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "beatrizlove-5d207.firebaseapp.com",
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://beatrizlove-5d207-default-rtdb.firebaseio.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "beatrizlove-5d207",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "beatrizlove-5d207.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "524989111888",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:524989111888:web:17244a1430904534fabb55",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-MR4SWNNZLL"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

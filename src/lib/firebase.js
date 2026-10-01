import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxXmLx3MVOluWblunBE270XmJX5WO-PKs",
  authDomain: "beatrizlove-5d207.firebaseapp.com",
  databaseURL: "https://beatrizlove-5d207-default-rtdb.firebaseio.com",
  projectId: "beatrizlove-5d207",
  storageBucket: "beatrizlove-5d207.firebasestorage.app",
  messagingSenderId: "524989111888",
  appId: "1:524989111888:web:17244a1430904534fabb55",
  measurementId: "G-MR4SWNNZLL"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// SEC-02 FIX: Sign in anonymously to authenticate Firestore operations.
// This ensures all reads/writes carry a valid auth token, allowing
// Firestore Security Rules to enforce `request.auth != null`.
export const authReady = new Promise((resolve) => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      unsubscribe();
      resolve(user);
    }
  });
  signInAnonymously(auth).catch((err) => {
    console.error("Firebase anonymous auth failed:", err);
    resolve(null);
  });
});

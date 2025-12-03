// ========================================
// FIREBASE CONFIGURATION
// ========================================
// This file is ready for Firebase integration.
// Simply replace the placeholder values with your actual Firebase credentials.
//
// STEPS TO ENABLE FIREBASE:
// 1. Create a Firebase project at https://console.firebase.google.com/
// 2. Enable Google Authentication in Firebase Console
// 3. Replace the placeholder values below with your actual Firebase config
// 4. Uncomment the code in src/components/Auth.js (marked with FIREBASE comments)
// 5. Uncomment the code in src/slices/authSlice.js (marked with FIREBASE comments)
// 6. Comment out or remove the MOCK authentication sections
// ========================================

import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

// Replace these values with your actual Firebase configuration
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signOut, onAuthStateChanged };
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'react-perfomance-review-app.firebaseapp.com',
  projectId: 'react-perfomance-review-app',
  storageBucket: 'react-perfomance-review-app.appspot.com',
  messagingSenderId: '806559866564',
  appId: '1:806559866564:web:59cd00068c0285492eb391',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();

// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyAyAw3rsLwuSh1KzXLtO5OTxVSW2fy2f2s",
  authDomain: "attendify-88a1e.firebaseapp.com",
  projectId: "attendify-88a1e",
  storageBucket: "attendify-88a1e.appspot.com",
  messagingSenderId: "425923830618",
  appId: "1:425923830618:web:0bb2f0182e8a63dd560963",
  measurementId: "G-DBVKNHVE0V"
};

// Initialize Firebase
const app = initializeApp(config);
const analytics = getAnalytics(app);

// Function to log in user
export async function loginUser(email: string, password: string) {
  try {
    const res = await firebase.auth().signInWithEmailAndPassword(email, password);

    console.log(res);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export default config;

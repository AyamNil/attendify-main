// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyAw3rsLwuSh1KzXLtO5OTxVSW2fy2f2s",
  authDomain: "attendify-88a1e.firebaseapp.com",
  projectId: "attendify-88a1e",
  storageBucket: "attendify-88a1e.appspot.com",
  messagingSenderId: "425923830618",
  appId: "1:425923830618:web:0bb2f0182e8a63dd560963",
  measurementId: "G-DBVKNHVE0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
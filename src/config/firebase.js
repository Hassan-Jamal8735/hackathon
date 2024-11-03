// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQeRAkAkrn4PrI6-Q4koj3i3gajmnU-8A",
  authDomain: "sharki-2.firebaseapp.com",
  projectId: "sharki-2",
  storageBucket: "sharki-2.appspot.com",
  messagingSenderId: "58567855855",
  appId: "1:58567855855:web:80f5ee902b06036302551a",
  measurementId: "G-6SV2W877WL"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export {analytics,auth, firestore, storage}
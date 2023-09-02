// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFuZ9xrwnF_HYrxVRZptLLwZiVNXUcCw8",
  authDomain: "snapread-af20f.firebaseapp.com",
  projectId: "snapread-af20f",
  storageBucket: "snapread-af20f.appspot.com",
  messagingSenderId: "232241254768",
  appId: "1:232241254768:web:7604e1be06175e1543ffb5",
  measurementId: "G-19H8H1YJH8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC98YU4a1YNgJaTOLBGOv6IB9lbXefDaGU",
  authDomain: "snapread-1e413.firebaseapp.com",
  projectId: "snapread-1e413",
  storageBucket: "snapread-1e413.appspot.com",
  messagingSenderId: "667036720849",
  appId: "1:667036720849:web:710ba39351532b697e6ff0",
  measurementId: "G-KN9G5W0M1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
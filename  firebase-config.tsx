// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDit0JiCTpshFrITMqWwGnFAcgp5x17tTY",
  authDomain: "bookworm-19685.firebaseapp.com",
  projectId: "bookworm-19685",
  storageBucket: "bookworm-19685.firebasestorage.app",
  messagingSenderId: "910522458582",
  appId: "1:910522458582:web:494fa0aef68cdb898b8477",
  measurementId: "G-NRB8XBQZVF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

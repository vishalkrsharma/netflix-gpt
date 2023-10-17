// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3zsjMm1mib6ekkWJPAMyQK7f3dY0GVsg",
  authDomain: "netflix-gpt-d0137.firebaseapp.com",
  projectId: "netflix-gpt-d0137",
  storageBucket: "netflix-gpt-d0137.appspot.com",
  messagingSenderId: "84334357013",
  appId: "1:84334357013:web:2b30fbc28405525d8f7c1c",
  measurementId: "G-N5WKJ6CQKK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6Mt99ZOnYBBqwoICGTrlsz61wrgp_EI8",
  authDomain: "netflix-gpt-d5cf6.firebaseapp.com",
  projectId: "netflix-gpt-d5cf6",
  storageBucket: "netflix-gpt-d5cf6.appspot.com",
  messagingSenderId: "284160927808",
  appId: "1:284160927808:web:e7ae5aee0a11cb89cbd7a5",
  measurementId: "G-YXTRCH1RQF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

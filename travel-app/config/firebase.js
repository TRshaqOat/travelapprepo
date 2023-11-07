// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-FQJpyVR0GG2wPIVhOkWHIntewqhQcMc",
  authDomain: "traveldb-a0538.firebaseapp.com",
  projectId: "traveldb-a0538",
  storageBucket: "traveldb-a0538.appspot.com",
  messagingSenderId: "208202201065",
  appId: "1:208202201065:web:3b3cd5a11b9f21102ffd78",
  measurementId: "G-DW8KN02H9K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

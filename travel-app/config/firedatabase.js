import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-FQJpyVR0GG2wPIVhOkWHIntewqhQcMc",
  authDomain: "traveldb-a0538.firebaseapp.com",
  projectId: "traveldb-a0538",
  storageBucket: "traveldb-a0538.appspot.com",
  messagingSenderId: "208202201065",
  appId: "1:208202201065:web:3b3cd5a11b9f21102ffd78",
  measurementId: "G-DW8KN02H9K",
};

const app = initializeApp(firebaseConfig);
const travelDB = getFirestore(app);
export { travelDB };

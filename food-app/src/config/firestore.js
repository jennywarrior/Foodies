import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA-EPw1DcysN_pWWr609kJZmW5RECc-pz0",
    authDomain: "testing-70520.firebaseapp.com",
    projectId: "testing-70520",
    storageBucket: "testing-70520.appspot.com",
    messagingSenderId: "832349890420",
    appId: "1:832349890420:web:2635cdfb8c39821a23ee21",
    measurementId: "G-Z6JJXR1HBW"
  };

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

export default db;
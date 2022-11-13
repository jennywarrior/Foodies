import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA-EPw1DcysN_pWWr609kJZmW5RECc-pz0",
    authDomain: "testing-70520.firebaseapp.com",
    projectId: "testing-70520",
    storageBucket: "testing-70520.appspot.com",
    messagingSenderId: "832349890420",
    appId: "1:832349890420:web:2635cdfb8c39821a23ee21",
    measurementId: "G-Z6JJXR1HBW"
  };

const app = initializeApp(firebaseConfig);

// gives us an auth instance
const auth = getAuth(app);

// in order to use this auth instance elsewhere
export default auth;
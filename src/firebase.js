// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaSgyPVy7FWINy9PiWqRJLCrLLLBSYzFA",
  authDomain: "tmdbpeliculas.firebaseapp.com",
  projectId: "tmdbpeliculas",
  storageBucket: "tmdbpeliculas.firebasestorage.app",
  messagingSenderId: "296402175400",
  appId: "1:296402175400:web:b14d456fcdafe34881499d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider,signInWithPopup};
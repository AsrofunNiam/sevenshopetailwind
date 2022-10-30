// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCvYaKGd0rL0NzI3jTrjYgxlaM9_ro67A",
    authDomain: "sevenshopetailwindfixtwo.firebaseapp.com",
    projectId: "sevenshopetailwindfixtwo",
    storageBucket: "sevenshopetailwindfixtwo.appspot.com",
    messagingSenderId: "392813580670",
    appId: "1:392813580670:web:f49f59c9a90341d434e32f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
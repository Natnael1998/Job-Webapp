// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDCwqdCGqULX3ajNUm027JlzOwzaukcopA",
  authDomain: "jobs-812c5.firebaseapp.com",
  projectId: "jobs-812c5",
  storageBucket: "jobs-812c5.appspot.com",
  messagingSenderId: "259233457436",
  appId: "1:259233457436:web:e08b9a73dd61cec4e606d9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Firebase Authentication
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb-MjX9wChl08BpI3UtxD2ZvS4b_Ke4PI",
  authDomain: "sample-c1c7b.firebaseapp.com",
  projectId: "sample-c1c7b",
  storageBucket: "sample-c1c7b.firebasestorage.app",
  messagingSenderId: "729098355493",
  appId: "1:729098355493:web:bbe9d016cb0d14b4fed0cc"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth()

export default app;
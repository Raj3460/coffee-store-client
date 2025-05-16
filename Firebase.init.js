// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnmw4v8P2vMEw8bmdr3U_OTk_52S8JUHc",
  authDomain: "coffee-store-application-ecada.firebaseapp.com",
  projectId: "coffee-store-application-ecada",
  storageBucket: "coffee-store-application-ecada.firebasestorage.app",
  messagingSenderId: "846652170659",
  appId: "1:846652170659:web:4f9747ad70a63593427a16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);
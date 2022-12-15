// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhMn8Uk1z85tKNt3Z9PEwCE1rkNUcmZ2U",
  authDomain: "splash-clone.firebaseapp.com",
  projectId: "splash-clone",
  storageBucket: "splash-clone.appspot.com",
  messagingSenderId: "980016502931",
  appId: "1:980016502931:web:d26d4e2cc939e21174d566",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);

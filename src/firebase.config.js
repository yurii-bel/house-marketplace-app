import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCZLva-LilcVa5bCGg89aRoUYOyiP8Wqs",
  authDomain: "house-marketplace-app-9e55d.firebaseapp.com",
  projectId: "house-marketplace-app-9e55d",
  storageBucket: "house-marketplace-app-9e55d.appspot.com",
  messagingSenderId: "1052126347292",
  appId: "1:1052126347292:web:fd84e38196fd3c03ef9fd9",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

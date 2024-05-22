import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBBO_q0s8CuKKUx3DKiQ1Xj05NZgZU-P9E",
  authDomain: "reactchat-e930e.firebaseapp.com",
  projectId: "reactchat-e930e",
  storageBucket: "reactchat-e930e.appspot.com",
  messagingSenderId: "1073518706532",
  appId: "1:1073518706532:web:5a0df26919b149f11c0471"
};  

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

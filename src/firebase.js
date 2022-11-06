
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC0Vt9LIhh20rGHStbKA9Bya5gg9xLxMbA",
  authDomain: "chat-462c2.firebaseapp.com",
  projectId: "chat-462c2",
  storageBucket: "chat-462c2.appspot.com",
  messagingSenderId: "671608524122",
  appId: "1:671608524122:web:50e8673a809b10d21ab763"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =  getAuth()
export const storage = getStorage();
export const db = getFirestore()
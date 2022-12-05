// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAS6yT12HV4tYLIlxY88mK0-5dvoQWbQ8",
  authDomain: "whatsapp-199eb.firebaseapp.com",
  projectId: "whatsapp-199eb",
  storageBucket: "whatsapp-199eb.appspot.com",
  messagingSenderId: "684667843310",
  appId: "1:684667843310:web:a3921a5a6297a065bff9ff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();



// Create a root reference

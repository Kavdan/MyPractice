import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDklxYBDWqDeBfvOqnrddy6ieNs5XNkekc",
    authDomain: "realtimeappbyreactandts.firebaseapp.com",
    projectId: "realtimeappbyreactandts",
    storageBucket: "realtimeappbyreactandts.appspot.com",
    messagingSenderId: "1044890162210",
    appId: "1:1044890162210:web:b3de5653af8cc0c5c7267b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app)
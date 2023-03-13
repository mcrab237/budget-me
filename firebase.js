// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7y6ce7kdFT9r_ow-zJH6k32Y0vb4T7Qk",
  authDomain: "budget-me-6c4b6.firebaseapp.com",
  projectId: "budget-me-6c4b6",
  storageBucket: "budget-me-6c4b6.appspot.com",
  messagingSenderId: "482884981489",
  appId: "1:482884981489:web:5d3c0c479c5382ddac8f50"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export function sigin(email,password){
    return signInWithEmailAndPassword(auth, email, password)
}

export function signup(email,password){
    return createUserWithEmailAndPassword(auth, email,password)
}
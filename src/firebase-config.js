import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX8SuNX4p2-9J1pjQ2wnzMtJ1i_O3af_4",
  authDomain: "minor-blog.firebaseapp.com",
  projectId: "minor-blog",
  storageBucket: "minor-blog.appspot.com",
  messagingSenderId: "266321427646",
  appId: "1:266321427646:web:13777e0dc9286fcda272ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

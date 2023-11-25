import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// 
const firebaseConfig = {
  apiKey: "AIzaSyCRFzbXb-jK3fkDbCmGURbqKb-cppeai7w",
  authDomain: "auth-blog-5bf33.firebaseapp.com",
  projectId: "auth-blog-5bf33",
  storageBucket: "auth-blog-5bf33.appspot.com",
  messagingSenderId: "334851178857",
  appId: "1:334851178857:web:f70f30b06116bae7cd7df8"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAUnppA-cGuNDRZhZUHmO2hDLj01QjZGaM",
  authDomain: "strife-4c89f.firebaseapp.com",
  projectId: "strife-4c89f",
  storageBucket: "strife-4c89f.appspot.com",
  messagingSenderId: "667447039660",
  appId: "1:667447039660:web:6351df1c4fd67ca2b87109"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const provider = new GoogleAuthProvider();
export{firebaseApp, db, provider};
  
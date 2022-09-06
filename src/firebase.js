import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBS2j_13jivQZhejUqgsyKf68xBgM9hLOU",
  authDomain: "blog-921f4.firebaseapp.com",
  projectId: "blog-921f4",
  storageBucket: "blog-921f4.appspot.com",
  messagingSenderId: "244978725784",
  appId: "1:244978725784:web:8c63c7eb580885586871ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth,provider,db}
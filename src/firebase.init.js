import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyATWz8QlCQHEPqV01yqzirK43p9mSbaVIk",
  authDomain: "zainab-f2cc5.firebaseapp.com",
  projectId: "zainab-f2cc5",
  storageBucket: "zainab-f2cc5.appspot.com",
  messagingSenderId: "637716439337",
  appId: "1:637716439337:web:8b527b61269c3b27461738"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth( app );

export default auth;
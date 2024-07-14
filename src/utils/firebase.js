// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";

import {
  getFirestore,
  collection,
  doc,
  getDoc,
  updateDoc,
  setDoc,
  runTransaction,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCo4kCMRWy_QOdPpgppqDKv3o2xBqMBlQ",
  authDomain: "portfolio-f5329.firebaseapp.com",
  projectId: "portfolio-f5329",
  storageBucket: "portfolio-f5329.appspot.com",
  messagingSenderId: "332073028179",
  appId: "1:332073028179:web:b15a2badcba1012b8354a6",
  measurementId: "G-DJ5QNCF0TK",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db, runTransaction };

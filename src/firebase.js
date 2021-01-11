// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBRECcacIqpoISIqjlm09rRhRLnnLrEeCc",
  authDomain: "clone-36ea8.firebaseapp.com",
  projectId: "clone-36ea8",
  storageBucket: "clone-36ea8.appspot.com",
  messagingSenderId: "871937463222",
  appId: "1:871937463222:web:e98e4b47092f01d5c46717",
  measurementId: "G-7LMZCQT1BM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

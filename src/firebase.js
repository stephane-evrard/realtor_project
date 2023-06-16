// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfwFTFYrYlDYIC-ayOW2NFrM4d3bMZczg",
  authDomain: "realtor-react-88bff.firebaseapp.com",
  projectId: "realtor-react-88bff",
  storageBucket: "realtor-react-88bff.appspot.com",
  messagingSenderId: "874519828279",
  appId: "1:874519828279:web:caff9148eb7963f3072cb2"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
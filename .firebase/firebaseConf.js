
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyATdK93216_2VwBuME3rqwPQFtsMTq8PTQ",
  authDomain: "valve-37ff1.firebaseapp.com",
  projectId: "valve-37ff1",
  storageBucket: "valve-37ff1.appspot.com",
  messagingSenderId: "766156319208",
  appId: "1:766156319208:web:2e6f2c526053a1e5ae9c5d",
  measurementId: "G-KZP85DS7TS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app)

export {db,storage}

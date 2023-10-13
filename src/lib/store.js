import { writable } from "svelte/store";
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const products = writable([]);

db.collection("products")
  .get()
  .then((querySnapshot) => {
    const productsArray = [];
    querySnapshot.forEach((doc) => {
      productsArray.push(doc.data());
    });
    products.set(productsArray);
  });
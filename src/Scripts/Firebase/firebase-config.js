import  firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkJw4zaaskIiJ7AlLK5sXX0DMnJGNeWCI",
  authDomain: "almacen-y-pedidos-ybn.firebaseapp.com",
  databaseURL: "https://almacen-y-pedidos-ybn.firebaseio.com",
  projectId: "almacen-y-pedidos-ybn",
  storageBucket: "almacen-y-pedidos-ybn.appspot.com",
  messagingSenderId: "492069026336",
  appId: "1:492069026336:web:fe82263910b4a11c7e1a45",
  measurementId: "G-7BV7HMRLMJ",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();

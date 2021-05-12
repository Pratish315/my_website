import firebase from "firebase/app"
import "firebase/firestore"
import 'firebase/analytics'

const firebaseConfig = {
  
  authDomain: "mywebsite-313419.firebaseapp.com",
  projectId: "mywebsite-313419",
  storageBucket: "mywebsite-313419.appspot.com",
  messagingSenderId: "673774154921",
  appId: "1:673774154921:web:e1c6d5fde287fafa17a5b8",
  measurementId: "G-3ER08NNTLH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics(); //have to disable ad blocker

const fireBase = firebase.firestore()
export default fireBase;
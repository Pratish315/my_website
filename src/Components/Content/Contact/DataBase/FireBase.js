import firebase from "firebase/app"
import "firebase/firestore"
import 'firebase/analytics'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_KEY,
  projectId: "myprofessionalportfolio",
  storageBucket: process.env.REACT_APP_FIREBASE_STOARGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics(); //have to disable ad blocker

const fireBase = firebase.firestore()
export default fireBase;


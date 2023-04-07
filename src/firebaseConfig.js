// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvk3G0tkG-hjt1JmDEaO6hao_GgIHYiG0",
    authDomain: "react-jdr-774ae.firebaseapp.com",
    databaseURL: "https://react-jdr-774ae-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-jdr-774ae",
    storageBucket: "react-jdr-774ae.appspot.com",
    messagingSenderId: "1055577460321",
    appId: "1:1055577460321:web:1c918f5eeab61d20c16420"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firestore
const firestore = firebase.firestore();

// Auth
const auth = firebase.auth();

export { firebase, firestore, auth };


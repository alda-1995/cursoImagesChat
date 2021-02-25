import firebase from 'firebase/app'
require('firebase/firestore');
require('firebase/auth');
require('firebase/storage');

const firebaseConfig = {
    apiKey: "AIzaSyCbIX0f3sP1RszkFil0COfhnpotCcQyAjU",
    authDomain: "login-3434a.firebaseapp.com",
    projectId: "login-3434a",
    storageBucket: "login-3434a.appspot.com",
    messagingSenderId: "836322498360",
    appId: "1:836322498360:web:3a7b3624dc89cd06f4d3cd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { firebase, db, auth, storage }
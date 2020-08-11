import firebase, { firestore } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCgEuumpnkdmhCzdIqJWrtBuDYHOyp9WX0",
  authDomain: "tinder-clone-281a8.firebaseapp.com",
  databaseURL: "https://tinder-clone-281a8.firebaseio.com",
  projectId: "tinder-clone-281a8",
  storageBucket: "tinder-clone-281a8.appspot.com",
  messagingSenderId: "908255443830",
  appId: "1:908255443830:web:74cf22ebf368abda659857",
  measurementId: "G-4EYQZYYGSJ",
};

const fireBaseApp = firebase.initializeApp(firebaseConfig);

const database = fireBaseApp.firestore();

export default database;

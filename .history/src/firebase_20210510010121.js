import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDmVyrfqJ29cSKXkIIk_-B5S7YrZgPHakg",
  authDomain: "disney-plus-clone-f47b0.firebaseapp.com",
  projectId: "disney-plus-clone-f47b0",
  storageBucket: "disney-plus-clone-f47b0.appspot.com",
  messagingSenderId: "302645081789",
  appId: 
  measurementId: "G-DRVLJKWRWG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

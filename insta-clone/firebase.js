import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDELAWWfPa1LBd1vQkZ-sfkwdPvnPop1aM",
  authDomain: "rn-instagram-clone-ae613.firebaseapp.com",
  projectId: "rn-instagram-clone-ae613",
  storageBucket: "rn-instagram-clone-ae613.appspot.com",
  messagingSenderId: "577065759391",
  appId: "1:577065759391:web:7155edaa7b6174c563e8aa"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore()

export { firebase, db }
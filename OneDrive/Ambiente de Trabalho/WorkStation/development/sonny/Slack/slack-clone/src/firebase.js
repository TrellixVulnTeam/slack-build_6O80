
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCl-IglvyAXctLEN2O8toK0iXcrmwUptVw",
  authDomain: "slack-clone-kendevs-40f7b.firebaseapp.com",
  projectId: "slack-clone-kendevs-40f7b",
  storageBucket: "slack-clone-kendevs-40f7b.appspot.com",
  messagingSenderId: "945727390149",
  appId: "1:945727390149:web:576f8cabecc8bdd2754bac"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();

 export {db, auth, provider};
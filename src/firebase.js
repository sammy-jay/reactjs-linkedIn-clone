import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCmad3B1Qubi27tavajWePJzDeALYzq7xw",
  authDomain: "reactjs-linkedin-clone-e74f9.firebaseapp.com",
  projectId: "reactjs-linkedin-clone-e74f9",
  storageBucket: "reactjs-linkedin-clone-e74f9.appspot.com",
  messagingSenderId: "641234692394",
  appId: "1:641234692394:web:e244fa03625ab6c39e5653"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;
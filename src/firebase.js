import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCSlxB60Ada6MW0URUK5J7K2ad-EMQYDNA",
  authDomain: "facebook-clone-f6ce5.firebaseapp.com",
  databaseURL: "https://facebook-clone-f6ce5.firebaseio.com",
  projectId: "facebook-clone-f6ce5",
  storageBucket: "facebook-clone-f6ce5.appspot.com",
  messagingSenderId: "642890158604",
  appId: "1:642890158604:web:6fc30ca82edead51f0d429"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
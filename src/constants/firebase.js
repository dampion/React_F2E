// Import the Firebase modules that you need in your app.
import firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/datastore';

// Initalize and export Firebase.
const config = {
  apiKey: "AIzaSyAloTNSkfU0fJJLU_zVeG41_h6PyiKRx9w",
  authDomain: "todolist-react-96baa.firebaseapp.com",
  databaseURL: "https://todolist-react-96baa.firebaseio.com",
  projectId: "todolist-react-96baa",
  storageBucket: "https://todolist-react-96baa.firebaseio.com/",
  messagingSenderId: "841470153269"
};
firebase.initializeApp(config);

const database = firebase.database();

export { database };
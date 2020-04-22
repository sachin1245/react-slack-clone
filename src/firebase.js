import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

  var firebaseConfig = {
    apiKey: "AIzaSyBZMD7Z4K-yJcJKF0m9DDz-OWJd3VuTjUk",
    authDomain: "react-slack-clone-sc.firebaseapp.com",
    databaseURL: "https://react-slack-clone-sc.firebaseio.com",
    projectId: "react-slack-clone-sc",
    storageBucket: "react-slack-clone-sc.appspot.com",
    messagingSenderId: "87350767565",
    appId: "1:87350767565:web:77628a483a9715de0d5e84",
    measurementId: "G-91MVHJ0W92"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
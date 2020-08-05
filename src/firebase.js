import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCRQS9l-X-Z6qaNhxGe7zj9fFszw-kKQAE",
    authDomain: "a4csci3130-abfd0.firebaseapp.com",
    databaseURL: "https://a4csci3130-abfd0.firebaseio.com",
    projectId: "a4csci3130-abfd0",
    storageBucket: "a4csci3130-abfd0.appspot.com",
    messagingSenderId: "828911501441",
    appId: "1:828911501441:web:0e4ac6019f1e28dc6acd80"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
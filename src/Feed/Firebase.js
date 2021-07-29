import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAyc7t3i5LYz-qNaA5UQmkKb8S5cCD2K6o",
    authDomain: "linkedin-clone-81667.firebaseapp.com",
    projectId: "linkedin-clone-81667",
    storageBucket: "linkedin-clone-81667.appspot.com",
    messagingSenderId: "761668929575",
    appId: "1:761668929575:web:23e59b9821802185a22602"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {auth,db};
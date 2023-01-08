import "firebase/firestore";
import "firebase/auth"
import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyBhhwuZQHkskshRRXj7OZKRVelF8hI1sl4",
  authDomain: "tugas-signal-clone.firebaseapp.com",
  projectId: "tugas-signal-clone",
  storageBucket: "tugas-signal-clone.appspot.com",
  messagingSenderId: "1090471030824",
  appId: "1:1090471030824:web:05545bcd083e454aea451d",
  measurementId: "G-TLGTT3QXCR"
};

  let app;
  if(firebase.apps.length === 0)
  {
    app = firebase.initializeApp(firebaseConfig);
  }
  else {
      app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export  { db, auth };
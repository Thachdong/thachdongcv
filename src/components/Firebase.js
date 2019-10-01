import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
  {
    apiKey: "AIzaSyD5uLSaz_Sv2ZJspczx5H6138sAJWx27EU",
    authDomain: "thach-dong-cv.firebaseapp.com",
    databaseURL: "https://thach-dong-cv.firebaseio.com",
    projectId: "thach-dong-cv",
    storageBucket: "thach-dong-cv.appspot.com",
    messagingSenderId: "392964968013",
    appId: "1:392964968013:web:d71664a4768b3aa4259604",
    measurementId: "G-JB1G106WNN"
  }
);

const db = firebaseApp.firestore();

export { db };
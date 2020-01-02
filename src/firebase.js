import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAhMyGjB7_w0P4wi9vuJCrDeTz9_SPX4bQ',
  authDomain: 'rockitpizza-f5ebd.firebaseapp.com',
  databaseURL: 'https://rockitpizza-f5ebd.firebaseio.com',
  projectId: 'rockitpizza-f5ebd',
  storageBucket: 'rockitpizza-f5ebd.appspot.com',
  messagingSenderId: '376863861886',
  appId: '1:376863861886:web:0c5bb28e3bd4b3b0083c2f',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({prompt: 'select_account'});

export const singInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

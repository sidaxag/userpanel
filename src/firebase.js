import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc, updateDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCUkrwWYMTmVm7I_d5lmAcm_gPvFiWHepA",
  authDomain: "usermanagement-f834c.firebaseapp.com",
  projectId: "usermanagement-f834c",
  storageBucket: "usermanagement-f834c.appspot.com",
  messagingSenderId: "463087255664",
  appId: "1:463087255664:web:6035ca72b9bcaf2382b4b5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, createUserWithEmailAndPassword, signInWithEmailAndPassword, doc, setDoc, updateDoc };
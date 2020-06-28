import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCB0tptxXWVw2CIhmTZL0Pxx4_lCIwpeaM",
    authDomain: "crwn-db-784b2.firebaseapp.com",
    databaseURL: "https://crwn-db-784b2.firebaseio.com",
    projectId: "crwn-db-784b2",
    storageBucket: "crwn-db-784b2.appspot.com",
    messagingSenderId: "616061157319",
    appId: "1:616061157319:web:1d146550600e448ea1e3e2"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import { initializeApp } from 'firebase/app'

import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCegQuA9oNpNNP-iVew7wlbjINGdsszw2E",
    authDomain: "w7-yujie-feabe.firebaseapp.com",
    projectId: "w7-yujie-feabe",
    storageBucket: "w7-yujie-feabe.appspot.com",
    messagingSenderId: "76396260165",
    appId: "1:76396260165:web:f7e221637797a3ed5aac2c"
};

// Initialize Firebase
initializeApp(firebaseConfig)
const db = getFirestore()
export default db
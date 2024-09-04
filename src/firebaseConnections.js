import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

/* copiar as informações do firebase config*/
const firebaseConfig = {
    apiKey: "AIzaSyB3MPGfcEqGV5ogW0Q42ph3vpkzDRajugo",
    authDomain: "lista-atividades-aa612.firebaseapp.com",
    projectId: "lista-atividades-aa612",
    storageBucket: "lista-atividades-aa612.appspot.com",
    messagingSenderId: "851475418062",
    appId: "1:851475418062:web:83d37423447d39b125399f"
}

const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp);

export {db, auth};
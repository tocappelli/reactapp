
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDg3xcl8IIyj0kgzJfUruFmHmqnY55xC54",
  authDomain: "backend-appreact.firebaseapp.com",
  projectId: "backend-appreact",
  storageBucket: "backend-appreact.appspot.com",
  messagingSenderId: "643409014366",
  appId: "1:643409014366:web:bc8a17325c80f61be44ecf"
};


const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app)
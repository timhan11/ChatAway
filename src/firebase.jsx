import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlhPl4RPRvb3JO0quFU-ga8dtMf3TRCYk",
  authDomain: "chataway-f340f.firebaseapp.com",
  projectId: "chataway-f340f",
  storageBucket: "chataway-f340f.appspot.com",
  messagingSenderId: "365524041455",
  appId: "1:365524041455:web:61b7514a2a3761a635e51a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import{GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {

  apiKey: "AIzaSyAU86wnzTOer2yfhuCSEsohtb5cdyeUHA4",
  authDomain: "block-master-ab717.firebaseapp.com",
  projectId: "block-master-ab717",
  storageBucket: "block-master-ab717.appspot.com",
  messagingSenderId: "1092106046442",
  appId: "1:1092106046442:web:8b6f7fc7cece2bb3438093"

};

const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const db = getFirestore();

export{
    app,
    google,
    db
}
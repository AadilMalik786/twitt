
import {initializeApp} from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";
// import {getstor}
// import {getSt}

const firebaseConfig = {
  apiKey: "AIzaSyD6AN4gQtzsqjUU9T5Z8z8P-2cbS0Yr9i0",
  authDomain: "twit-c11ab.firebaseapp.com",
  projectId: "twit-c11ab",
  storageBucket: "twit-c11ab.appspot.com",
  messagingSenderId: "559430164848",
  appId: "1:559430164848:web:6263b05d74990a3ca12fb5",
  measurementId: "G-JDBLPF65GN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore and Auth instances
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);


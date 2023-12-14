import {initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBFHj84ry9HID8DpU_V-G2wB_QBH1VzWAU",
  authDomain: "twitter-1b1de.firebaseapp.com",
  projectId: "twitter-1b1de",
  storageBucket: "twitter-1b1de.appspot.com",
  messagingSenderId: "333868844425",
  appId: "1:333868844425:web:ca964c8ed877c356d90d58",
  measurementId: "G-WT5F1ZRP8X"
};
  
  // Initialize Firebase
 const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);



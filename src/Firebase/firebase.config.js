// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACGi6NbiizKsl9xnxxADKY4o0ENaV-yg8",
  authDomain: "auth-firebase-daisyui.firebaseapp.com",
  projectId: "auth-firebase-daisyui",
  storageBucket: "auth-firebase-daisyui.firebasestorage.app",
  messagingSenderId: "698324626013",
  appId: "1:698324626013:web:07cbbb2f823c205a427bb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app);

export default auth;
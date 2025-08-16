// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtRdJYawhqaGIdQQL4UQ-j0stPrvUed2c",
  authDomain: "miniblog-7fb8f.firebaseapp.com",
  projectId: "miniblog-7fb8f",
  storageBucket: "miniblog-7fb8f.firebasestorage.app",
  messagingSenderId: "69732421640",
  appId: "1:69732421640:web:635ed6e0ef826afae101bd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

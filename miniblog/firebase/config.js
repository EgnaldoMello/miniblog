// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtRdJYawhqaGIdQQL4UQ-j0stPrvUed2c",
  authDomain: "miniblog-7fb8f.firebaseapp.com",
  projectId: "miniblog-7fb8f",
  storageBucket: "miniblog-7fb8f.firebasestorage.app",
  messagingSenderId: "69732421640",
  appId: "1:69732421640:web:55c8d683c66d3c75e101bd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

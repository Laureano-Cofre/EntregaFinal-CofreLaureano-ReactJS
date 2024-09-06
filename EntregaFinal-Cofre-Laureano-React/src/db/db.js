// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo_RGIn5I6z3qA-Vi7rAK_kuuHAf_XV1w",
  authDomain: "ecommerce-cofrelaureano.firebaseapp.com",
  projectId: "ecommerce-cofrelaureano",
  storageBucket: "ecommerce-cofrelaureano.appspot.com",
  messagingSenderId: "212908608089",
  appId: "1:212908608089:web:c7513c4194ab17fb1aff48"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db
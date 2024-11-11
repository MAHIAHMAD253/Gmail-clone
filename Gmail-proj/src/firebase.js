// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBREIMiyW9OZPj8OvCTmqEEjvGA1dXYwwA",
  authDomain: "clone-265f8.firebaseapp.com",
  projectId: "clone-265f8",
  storageBucket: "clone-265f8.appspot.com",
  messagingSenderId: "427856472790",
  appId: "1:427856472790:web:8b506769ea33363a47f777",
  measurementId: "G-Y17MVYZS60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
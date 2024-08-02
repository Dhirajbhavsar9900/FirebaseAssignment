// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCscAjDLFbSGlwfUQHeEH5_idXfmeqZ0OU",
  authDomain: "assignmentathuntication.firebaseapp.com",
  projectId: "assignmentathuntication",
  storageBucket: "assignmentathuntication.appspot.com",
  messagingSenderId: "965769109049",
  appId: "1:965769109049:web:663f896989852ece9ab7e8",
  measurementId: "G-FP1B8ZEV6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
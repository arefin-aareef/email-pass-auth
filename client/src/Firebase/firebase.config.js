// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ6fSD9pUbJOhjq0lOWI5KCqHCyPtTEM8",
  authDomain: "email-password-auth-f3f42.firebaseapp.com",
  projectId: "email-password-auth-f3f42",
  storageBucket: "email-password-auth-f3f42.appspot.com",
  messagingSenderId: "1046306384609",
  appId: "1:1046306384609:web:6c13cb2fb51f35842b65a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
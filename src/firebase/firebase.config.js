// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbgsChsbxhMQ4oGjqXi4pFunaC3w3-If0",
  authDomain: "travel-agency-fc780.firebaseapp.com",
  projectId: "travel-agency-fc780",
  storageBucket: "travel-agency-fc780.appspot.com",
  messagingSenderId: "1035297194387",
  appId: "1:1035297194387:web:7f93752ad2fd8d2592e866",
  measurementId: "G-HYEBLF97LB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
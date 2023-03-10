// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBTdB9NyuAHCvsnEZiiRfPk7QGKesPAak",
  authDomain: "login-con-firebase-b98bc.firebaseapp.com",
  projectId: "login-con-firebase-b98bc",
  storageBucket: "login-con-firebase-b98bc.appspot.com",
  messagingSenderId: "761748267732",
  appId: "1:761748267732:web:542c3ea9de5f1ebee35141",
  measurementId: "G-J8EKWDC6NB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

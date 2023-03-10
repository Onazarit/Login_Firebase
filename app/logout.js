import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js"

const logout = document.querySelector('#logout')
const imgBienvenido = document.getElementById("imagenInicio");
const email2 = document.getElementById("login-email");
const password2 = document.getElementById("login-password");

logout.addEventListener('click', async () =>{
   await signOut(auth)
   console.log("Se cerro sesión");
   imgBienvenido.setAttribute("src", "");
   email2.value = "";
   password2.value ="";
})
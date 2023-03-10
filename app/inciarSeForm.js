import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js"

const loginForm = document.querySelector("#login-form");
const msjBienvenido = document.getElementById("mensajeBienvenido");


loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  console.log(email, password);
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    console.log(credentials);
    const modal = bootstrap.Modal.getInstance(document.querySelector('#loginModal'));
    modal.hide();
    msjBienvenido.innerHTML = credentials.user.email
    
  } catch (error) {
    console.log(error.code);
    if(error.code === 'auth/wrong-password'){
        showMessage("Contraseña Incorrecta", "error")
    } else if(error.code === 'auth/user-not-found'){
        showMessage("Usuario no encontrado", "error")
    }else{
        showMessage(error.message,"error")
    }
        
  }
});

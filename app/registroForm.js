import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js"

const registroForm = document.querySelector('#registro-form');
const msjBienvenido = document.getElementById("mensajeBienvenido");

registroForm.addEventListener('submit', async (e) =>{
    e.preventDefault();

    const email = registroForm['registro-email'].value;
    const password = registroForm['registro-password'].value;

    console.log(email, password);

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials);

        const registroModal = document.querySelector("#registroModal");
        const modal = bootstrap.Modal.getInstance(registroModal);
        modal.hide();
        msjBienvenido.innerHTML = userCredentials.user.email
        showMessage("Correo registrado", "success")

    } catch (error) {
        console.log(error.message);
        console.log(error.catch);

        if (error.code === 'auth/email-already-in-use'){
            showMessage("Correo ya en uso", "error")
        }
        else if(error.code === 'auth/invalid-email'){
            showMessage("Correo invalido", "error")
        } else if(error.code === 'auth/weak-password'){
            showMessage("Contraseña ya en uso, intenta utilizando mas de 6 caracteres", "error")
        } else if(error.code) {
            alert("Algo salio mal")
        }

    }
})
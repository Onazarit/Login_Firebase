import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js"

const googleButton = document.querySelector('#googleLogueo')
const imgBienvenido = document.getElementById("imagenInicio");
const msjBienvenido = document.getElementById("mensajeBienvenido");


googleButton.addEventListener('click', async () =>{

    const provider = new GoogleAuthProvider()

    try {
        const credentials = await signInWithPopup(auth, provider)
        console.log(credentials);

        const modal = bootstrap.Modal.getInstance(document.querySelector('#loginModal'));
        modal.hide();

        showMessage("Bienvenido " + credentials.user.email, "success")
        msjBienvenido.innerHTML = credentials.user.displayName
        imgBienvenido.setAttribute("src", credentials.user.photoURL);
    } catch (error) {
        alert(error)
    }
})
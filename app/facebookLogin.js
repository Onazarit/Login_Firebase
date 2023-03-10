import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js"

const facebookButton = document.querySelector('#facebookLogueo')
const imgBienvenido = document.getElementById("imagenInicio");
const msjBienvenido = document.getElementById("mensajeBienvenido");

facebookButton.addEventListener('click', async () =>{

    const provider = new FacebookAuthProvider()

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
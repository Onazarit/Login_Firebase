import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./app/firebase.js"

import './app/registroForm.js'
import './app/logout.js'
import './app/inciarSeForm.js'
import './app/googleLogin.js'
import './app/facebookLogin.js'
import {loginCheck} from './app/loginCheck.js'

console.log("Buenas");
onAuthStateChanged(auth, async (user) =>{
    if(user){
        loginCheck(user);
    } else{
        loginCheck(user);
    }
})
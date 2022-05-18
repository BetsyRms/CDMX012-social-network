import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
import { loginGoogle } from "../lib/auth.js";
import { onNavigate } from "../main.js";

export const logIn =()=>{
  const logInDiv = document.createElement('div');
    logInDiv.className = 'logInDiv'

  const textH2 = document.createElement('h2');
    textH2.textContent = 'Login whit Google'

  const logo = document.createElement('img');
    logo.src = 'E-bender.png'

  const google = document.createElement('img');
    google.className = 'google'
    google.src = 'Google-Icon.png'

  const buttonLogin = document.createElement('button');
    buttonLogin.className = 'buttonLogin'
    buttonLogin.addEventListener('click', (e)=>{
      onAuthStateChanged(getAuth(), (user) => {
        if (user) {
          onNavigate('/post');
        } else {
          loginGoogle();
          onNavigate('/');
        }
      });
    });
    
  logInDiv.append(logo, textH2, buttonLogin, google);
  return logInDiv;
}

import { loginGoogle } from "../lib/auth.js";

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
      loginGoogle()
    });
    
  logInDiv.append(logo, textH2, buttonLogin, google);
  return logInDiv;
}
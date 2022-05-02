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

  const buttomLogin = document.createElement('button');
    buttomLogin.className = 'buttomLogin'
    buttomLogin.addEventListener('click', ()=>{
      onNavigate('/post');
    });

  logInDiv.append(logo, textH2, buttomLogin, google);
  return logInDiv;
}
import { onNavigate } from "../main.js";

export const home =()=>{
  const homeDiv = document.createElement('div');
    homeDiv.className = 'homeDiv'

  const logo = document.createElement('img');
    logo.src = 'E-bender.png'

  const nodoH1 = document.createElement('h1');
    nodoH1.textContent = 'Choice your element'

  const buttonElement = document.createElement('button');
    buttonElement.className = 'buttonElement'
    buttonElement.addEventListener('click', () => {
      onNavigate('/logIn');
    })
  homeDiv.append(logo, nodoH1, buttonElement);
  return homeDiv;
}
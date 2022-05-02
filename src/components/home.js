import { onNavigate } from "../main.js";

export const home =()=>{
  const homeDiv = document.createElement('div');
    homeDiv.className = 'homeDiv'

  const logo = document.createElement('img');
    logo.src = 'E-bender.png'

  const nodoH1 = document.createElement('h1');
    nodoH1.textContent = 'Choice your element'

  const buttomElement = document.createElement('button');
    buttomElement.className = 'buttomElement'
    buttomElement.addEventListener('click', () => {
      onNavigate('/logIn');
    })
  homeDiv.append(logo, nodoH1, buttomElement);
  return homeDiv;
}
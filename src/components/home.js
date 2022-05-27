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

// let arr = [[2,5,6],[3,2,9],[1,3,5]];

// for (let i=0; i<arr.length; i++){
//   for(let x=0; x<arr[i].length; x++){
//     console.log(x);
//   } 
// }
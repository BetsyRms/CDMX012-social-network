import { onNavigate } from "../main.js";

export const post =()=>{
  const postDiv = document.createElement('div');
    postDiv.className = 'postDiv'
  const header = document.createElement('div');
    header.className = 'header'
  const logo = document.createElement('img');
    logo.className = 'logo';
    logo.src = 'E-bender.png'
  const water = document.createElement('img');
    water.className = 'water';
    water.src = 'water.png'
  const nodoH1 = document.createElement('h1');
    nodoH1.textContent = 'Hi, water-bender!'
  const logOut = document.createElement('button');
    logOut.className = 'logOut'
    logOut.textContent = 'Log out'
    logOut.addEventListener('click', () => {
    onNavigate('/');
  });
  header.append(water, logo, logOut);
  postDiv.append(header, nodoH1);
  return postDiv;
}
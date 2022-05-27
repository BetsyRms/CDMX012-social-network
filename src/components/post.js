import { exit } from "../lib/auth.js";
import { createPost } from "../lib/auth.js";
import { listPost } from "./listPost.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

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
      const logOut = document.createElement('button');
        logOut.className = 'logOut'
        logOut.textContent = 'Log out'
        logOut.addEventListener('click', () => {
          exit().then(()=>{
            console.log('bye');
          })
        });
      
    const nodoH3 = document.createElement('h3');
       nodoH3.textContent = 'Hi, water-bender!';
      
    const inputPost = document.createElement('textarea');
       inputPost.className = 'inputPost'
       inputPost.placeholder = 'Create your post'

    const buttonPost = document.createElement('button');
        buttonPost.className = 'buttonPost'
        buttonPost.textContent = 'Post'
        buttonPost.addEventListener('click', ()=>{
          createPost(inputPost.value).then(()=>{
            inputPost.value = ''
            // if(inputPost.value === ''){

            // }
          }).catch(()=>{
            console.log('no se guardó');
          })
        });
    
  
  header.append(water, logo, logOut);
  postDiv.append(header, nodoH3, inputPost, buttonPost, listPost() );
  return postDiv;
}
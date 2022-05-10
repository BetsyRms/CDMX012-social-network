import { exit } from "../lib/auth.js";
import {createPost} from "../lib/auth.js"
import { divPost } from "./listPost.js";

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
          console.log('fuera')
          })
          .catch(()=>{
            console.log('error');
          })
        });

    const nodoH3 = document.createElement('h3');
       nodoH3.textContent = 'Hi, water-bender!';
      
    const inputPost = document.createElement('input');
       inputPost.className = 'inputPost'
       inputPost.placeholder = 'Create your post'

    const buttonPost = document.createElement('button');
        buttonPost.className = 'buttonPost'
        buttonPost.textContent = 'Post'
        buttonPost.addEventListener('click', ()=>{
          createPost(inputPost.value).then(()=>{
            inputPost.value = '';
          }).catch(()=>{
            console.log('no se guardó');
          })

        });
    
    const divMuro = document.createElement('div');
      divMuro.className = 'divMuro'
    
  header.append(water, logo, logOut);
  postDiv.append(header, nodoH3, inputPost, buttonPost, divMuro, divPost());
  return postDiv;
}
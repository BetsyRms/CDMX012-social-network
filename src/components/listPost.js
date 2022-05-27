import { db, delatePost, auth } from '../lib/auth.js'
import { collection, query, onSnapshot } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export const listPost=()=>{

  const div = document.createElement('div')
  const q = query(collection(db, "text"));

  // trae post de firebase
  onSnapshot(q, (querySnapshot) => {
    while(div.firstChild){
      div.removeChild(div.firstChild);
    }
    querySnapshot.forEach((doc) => {
      const divPost = document.createElement('div');
        divPost.className = 'divPrueba'
      const email = document.createElement('p')
        email.textContent = doc.data().email
      const texto = document.createElement('p')
        texto.textContent = doc.data().text
      const imgDelate = document.createElement('img');
        imgDelate.src = 'https://img.icons8.com/external-outline-astudio/32/000f/external-delete-office-stuff-outline-astudio.png'   
      const btnDelate = document.createElement('button');
        btnDelate.value = doc.id
        btnDelate.className = 'btnDelate'
        btnDelate.append(imgDelate);
        console.log(auth.currentUser.email)   
      divPost.append(email, texto);
      if(auth.currentUser.email === doc.data().email){
        divPost.append(btnDelate)
      }
      div.append(divPost);
    });
    const arrayDelate = document.querySelectorAll('.btnDelate')
      arrayDelate.forEach((button)=>{
        button.addEventListener('click', ()=>{
        delatePost(button.value)
        })
      })
    console.log({arrayDelate});
  });
return div
}
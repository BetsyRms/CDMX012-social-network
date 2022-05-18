import { db } from '../lib/auth.js'

import { collection, query, onSnapshot } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export const listPost=()=>{

  const div = document.createElement('div')

  const q = query(collection(db, "text"));

  // trae post de firebase
  onSnapshot(q, (querySnapshot) => {
    const notes = [];
    querySnapshot.forEach((doc) => {
        notes.push(doc.data().text);
    });
    notes.forEach((current)=>{
      const divPost = document.createElement('div');
      divPost.className = 'divPost'
      const newPost = document.createElement('p');
      newPost.textContent = current
      div.append(divPost, newPost);

    })
    console.log("Posts ", notes);
  });

return div
}
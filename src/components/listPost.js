import { db, delatePost, auth } from '../lib/auth.js'
import { collection, query, onSnapshot, orderBy } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export const listPost=()=>{

  const sectionPosts = document.createElement('section')
  sectionPosts.className = 'sectionPosts'
  const q = query(collection(db, "text"), orderBy('day', 'desc'));

  // trae post de firebase
  onSnapshot(q, (querySnapshot) => {
    while(sectionPosts.firstChild){
      sectionPosts.removeChild(sectionPosts.firstChild);
    }
    querySnapshot.forEach((doc) => {
      console.log(doc.data())
      const post = document.createElement('section');
        post.className = 'post'

      const headerPost = document.createElement('section')
        headerPost.className = 'headerPost'

      const userWater = document.createElement('section')
        userWater.className = 'userWater'

      const water = document.createElement('img')
        water.src = './components/water.png'
        water.className = 'waterPost'

      const userName = document.createElement('p')
        userName.textContent = doc.data().name
        userName.className = 'userName'

      const texto = document.createElement('p')
        texto.textContent = doc.data().text

      const imgDelate = document.createElement('img');
        imgDelate.src = './components/delate.png'
        imgDelate.className = 'imgDelate'

      const btnDelate = document.createElement('button');
        btnDelate.value = doc.id
        btnDelate.className = 'btnDelate'

      const space = document.createElement('div')
        space.className
        btnDelate.append(imgDelate);

      userWater.append(water, userName)
      headerPost.append(userWater)
        if(auth.currentUser.email === doc.data().email){
          headerPost.append(btnDelate)
        }else{
          headerPost.append(space)
        }
    
      post.append(headerPost, texto);
      sectionPosts.append(post);
    });
    const arrayDelate = document.querySelectorAll('.btnDelate')
      arrayDelate.forEach((button)=>{
        button.addEventListener('click', ()=>{
        delatePost(button.value)
        })
      })
    console.log({arrayDelate});
  });
return sectionPosts
}
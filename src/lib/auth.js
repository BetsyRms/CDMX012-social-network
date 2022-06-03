import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, Timestamp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyB3FlX-VGJy_bLWpNdkLUtgBAlFF7whkE8",
    authDomain: "e-bender.firebaseapp.com",
    projectId: "e-bender",
    storageBucket: "e-bender.appspot.com",
    messagingSenderId: "1022695404666",
    appId: "1:1022695404666:web:219f04dd4f5971022a37c3"
  };

  initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  export const auth = getAuth();

  export const loginGoogle = ()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
  }

export const exit = ()=>signOut(auth)
  
export const db = getFirestore();

// crea el post en firestore
export const createPost = async (text)=> {
  await addDoc(collection(db, 'text'), {text, email: auth.currentUser.email, name: auth.currentUser.displayName, day: Timestamp.now()})
  // console.log(auth.currentUser);
}
export const getPost = () => getDocs(collection(db, 'text'));

export const delatePost = async (id)=>{
  await deleteDoc(doc(db, "text", id));
  console.log({id})
}



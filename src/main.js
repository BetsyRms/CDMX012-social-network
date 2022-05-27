import {home} from './components/home.js'
import {logIn} from './components/logIn.js'
import {post} from './components/post.js'
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

const rootDiv = document.getElementById('root');

const routes = {
    '/' : home,
    '/logIn' : logIn,
    '/post' : post
  };

export const onNavigate = (pathname) =>{
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while(rootDiv.firstChild){
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.append(routes[pathname]());
}

  window.onpopstate = () => {
    rootDiv.append(routes[window.location.pathname]());
  }

  let component = routes[window.location.pathname];

  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      onNavigate('/post');
    } else {
      onNavigate('/');
    }
  });

  rootDiv.append(component());

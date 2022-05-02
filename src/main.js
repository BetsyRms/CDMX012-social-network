import {home} from './components/home.js'
import {logIn} from './components/logIn.js'
import {post} from './components/post.js'

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

  rootDiv.append(component());

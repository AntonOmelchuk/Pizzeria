import {useState, useEffect} from 'react';

const auth = window.firebase.auth();
const provider = new window.firebase.auth.GoogleAuthProvider();

export const useAuthentication = () => {
  const [authenticated, setAuthenticated] = useState();
  const login = () => auth.signInWithPopup(provider);
  const logout = () => auth.signOut();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user) {
        setAuthenticated(user)
      } else {
        setAuthenticated()
      }
    }, err => console.log(err))
  }, []);


  return {
    login,
    logout,
    authenticated
  };
};

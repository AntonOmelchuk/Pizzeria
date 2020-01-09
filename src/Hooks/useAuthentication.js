import {useState, useEffect} from 'react';

const auth = window.firebase.auth();
const provider = new window.firebase.auth.GoogleAuthProvider();

export const useAuthentication = () => {
  const [authenticated, setAuthenticated] = useState();
  const login = () => auth.sighInWithPopup(provider);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user) setAuthenticated(user)
    }, err => console.log(err))
  }, []);


  return {
    login,
    authenticated
  };
};

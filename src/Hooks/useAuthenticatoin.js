import {useEffect, useState} from 'react';
import {auth, googleProvider} from '../firebase';

export const useAuthentication = () => {
  const [authenticated, setAuthenticated] = useState('loading');

  const login = () => {
    auth.signInWithPopup(googleProvider);
  };

  const logout = () => {
    auth.signOut();
  };

  useEffect(() => {
    auth.onAuthStateChanged(
      user => {
        if (user) {
          setAuthenticated(user);
        } else {
          setAuthenticated();
        }
      },
      error => console.log(error)
    );
  }, []);

  return {
    login,
    logout,
    loggedIn: authenticated,
  };
};

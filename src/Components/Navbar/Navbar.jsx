import React from 'react';
import {LoginButton, Logo, NavbarContainer, UserStatus} from './navbar.style';

const Navbar = ({login, logout, loggedIn}) => {
  return (
    <NavbarContainer>
      <Logo>
        RockItPizza{' '}
        <span role='img' aria-label='pizza slice'>
          🍕
        </span>
      </Logo>
      <UserStatus>
        <LoginButton>
          {loggedIn === 'loading' ? (
            'Loading...'
          ) : loggedIn ? (
            <>
              <span style={{cursor: 'auto'}}> Hi {loggedIn.displayName} </span>
              <i className='fas fa-sign-in-alt' onClick={logout} />
            </>
          ) : (
            <span onClick={login}>
              Log In <i className='fas fa-sign-in-alt' />
            </span>
          )}
        </LoginButton>
      </UserStatus>
    </NavbarContainer>
  );
};

export default Navbar;

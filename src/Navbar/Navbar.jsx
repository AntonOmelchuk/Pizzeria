import React from 'react';

import {LoginButton, Logo, NavbarStyled, UserStatus} from './navbar.style';

export const Navbar = ({login, logout, authenticated}) => {

  return (
    <NavbarStyled>
      <Logo>
        RockIt Pizza{' '}
        <span role='img' aria-label='pizza slice'>
          🍕
        </span>
      </Logo>
      <UserStatus>
        {authenticated === 'loading' ? 'loading...' :
          (authenticated ? (<>{`Hi, ${authenticated.displayName.split(' ')[0]}!`}
            <LoginButton onClick={logout}>LogOut</LoginButton></>) : (
            <LoginButton onClick={login}>LogIn</LoginButton>
          ))}
      </UserStatus>
    </NavbarStyled>
  );
};

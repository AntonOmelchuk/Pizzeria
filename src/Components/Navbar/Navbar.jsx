import React from 'react';
import {Logo, NavbarContainer} from './navbar.style';

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>
        RockItPizza{' '}
        <span role='img' aria-label='pizza slice'>
          🍕
        </span>
      </Logo>
    </NavbarContainer>
  );
};

export default Navbar;

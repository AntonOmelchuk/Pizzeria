import React from 'react';
import {Logo, NavbarContainer} from './navbar.style';
import logoImage from '../../assets/slice-of-pizza.png';

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>
        <span>
          RockItPizza <img src={logoImage} alt='Logo' />
        </span>
      </Logo>
    </NavbarContainer>
  );
};

export default Navbar;

import styled from 'styled-components';

import {pizzaRed} from '../Styles/colors';
import {Title} from '../Styles/title';

export const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 4px #380502;
`;

export const UserStatus = styled.div`
  color: #fff;
  font-size: 14px;
  margin-right: 30px;
`;

export const LoginButton = styled.span`
  cursor: pointer;
  margin-left: 12px;
`;

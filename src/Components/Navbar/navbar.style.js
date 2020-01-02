import styled from 'styled-components';
import {pizzaRed} from '../../Styles/colors';
import {Title} from '../../Styles/title';

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  background-color: ${pizzaRed};

  position: fixed;
  z-index: 999;
`;

export const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  position: relative;
  text-shadow: 1px 1px 4px #380502;
`;

export const UserStatus = styled.div`
  color: white;
  font-size: 18px;
  margin-right: 30px;
`;

export const LoginButton = styled.span`
  cursor: pointer;
`;

import styled from 'styled-components';
import {pizzaRed} from '../../Styles/colors';
import {Title} from '../../Styles/title';

export const NavbarContainer = styled.div`
  background-color: ${pizzaRed};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
`;
export const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  position: relative;
  text-shadow: -2px -2px 4px #380502;

  img {
    height: 27px;
    position: absolute;
    top: -3px;
    left: 111px;
  }
`;

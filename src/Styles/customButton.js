import styled from 'styled-components';
import {Title} from './title';
import {pizzaRed} from './colors';

export const CustomButton = styled(Title)`
  margin: 10px;
  padding: 10px;
  width: 200px;
  height: 20px;
  border-radius: 5px;
  background-color: ${pizzaRed};
  text-align: center;
  cursor: pointer;

  ${({disabled}) =>
    disabled &&
    `
    opactity: .5; 
    background-color: grey; 
    pointer-events: none; 
  `}
`;

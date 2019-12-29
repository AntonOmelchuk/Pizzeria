import styled from 'styled-components';
import {Title} from '../Styles/title';
import {pizzaRed} from '../Styles/colors';

export const QuantityInputContainer = styled(Title)`
  display: flex;
  height: 24px;
`;

export const QuantityInputItem = styled.input`
  font-size: 18px;
  width: 24px;
  text-align: center;
  border: none;
  outline: none;
`;

export const IncrementButton = styled.div`
  width: 23px;
  color: ${pizzaRed};
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  line-height: 23px;
  margin: 0px 10px;
  border: 1px solid ${pizzaRed};
  ${({disabled}) =>
    disabled &&
    `opacity: 0.5; 
     pointer-events: none; 
     `}
  &:hover {
    background-color: #ffe3e3;
  }
`;

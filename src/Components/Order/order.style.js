import styled from 'styled-components';
import {DialogContent, DialogFooter} from '../FoodDialog/foodDialog.style';
import {Title} from '../../Styles/title';
import {CustomButton} from '../../Styles/customButton';

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  height: calc(100% - 48px);
  position: fixed;
  right: 0;
  top: 48px;
  z-index: 10;

  background-color: aliceblue;
  box-shadow: 4px 0 5px 4px grey;
`;

export const OrderContent = styled(DialogContent)`
  height: 100%;
  padding: 20px;
`;

export const OrderItemContainer = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid grey;

  ${({editable}) =>
    editable
      ? `
  &:hover {
    cursor: pointer;
      background-color: #e7e7e7;
  }`
      : `
  pointer-events: none; 
  `}
`;

export const OrderItem = styled(Title)`
  padding: 10px 0;
  display: grid;
  grid-template-columns: 33px 150px 20px 60px;
  justify-content: space-between;
`;

export const Toppings = styled.div`
  color: gray;
  font-size: 10px;
`;

export const CheckoutButton = styled(CustomButton)``;

export const OrderFooter = styled(DialogFooter)``;

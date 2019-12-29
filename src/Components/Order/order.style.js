import styled from 'styled-components';
import {DialogContent, DialogFooter} from '../FoodDialog/foodDialog.style';

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

export const OrderFooter = styled(DialogFooter)``;

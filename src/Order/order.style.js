import styled from 'styled-components';
import {DialogContent} from '../FoodDialog/foodDialog.style';

export const OrderItem = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

export const DetailItem = styled.div`
  color: gray;
  font-size: 10px;
`;

export const OrderStyled = styled.div`
  position: fixed;
  right: 0;
  top: 48px;
  width: 340px;
  background-color: white;
  height: calc(100% - 48px);
  z-index: 10;
  box-shadow: 4px 0 5px 4px grey;
  display: flex;
  flex-direction: column;
`;

export const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`;

export const OrderContainer = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid grey;
  ${({editable}) =>
  editable
    ? `
    &:hover {
      cursor: pointer;
      background-color: #e7e7e7;
    }
  `
    : `
    pointer-events: none; 
  `}
`;
import React from 'react';
import {OrderContainer, OrderContent, OrderFooter} from './order.style';
import {ConfirmButton} from '../FoodDialog/foodDialog.style';

const Order = () => {
  return (
    <OrderContainer>
      <OrderContent>Your order is empty.</OrderContent>
      <OrderFooter>
        <ConfirmButton>Checkout</ConfirmButton>
      </OrderFooter>
    </OrderContainer>
  );
};
export default Order;

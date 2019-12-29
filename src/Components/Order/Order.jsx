import React from 'react';
import {OrderContainer, OrderContent, OrderFooter} from './order.style';
import {ConfirmButton} from '../FoodDialog/foodDialog.style';

const Order = ({orders}) => {
  return (
    <OrderContainer>
      <OrderContent>
        {!orders.length ? (
          'Your order is empty.'
        ) : (
          <div>You have {orders.length} orders</div>
        )}
      </OrderContent>
      <OrderFooter>
        <ConfirmButton>Checkout</ConfirmButton>
      </OrderFooter>
    </OrderContainer>
  );
};
export default Order;

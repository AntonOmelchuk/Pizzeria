import React from 'react';
import {
  OrderContainer,
  OrderContent,
  OrderFooter,
  OrderItem,
  OrderItemContainer,
} from './order.style';
import {ConfirmButton} from '../FoodDialog/foodDialog.style';

const Order = ({orders}) => {
  return (
    <OrderContainer>
      {!orders.length ? (
        <OrderContent>Your order is empty.</OrderContent>
      ) : (
        <OrderContent>
          Your orders:
          {orders.map(order => (
            <OrderItemContainer>
              <OrderItem>{order}</OrderItem>
            </OrderItemContainer>
          ))}
        </OrderContent>
      )}
      <OrderFooter>
        <ConfirmButton>Checkout</ConfirmButton>
      </OrderFooter>
    </OrderContainer>
  );
};
export default Order;

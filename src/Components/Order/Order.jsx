import React from 'react';
import {
  OrderContainer,
  OrderContent,
  OrderFooter,
  OrderItem,
  OrderItemContainer,
} from './order.style';
import {ConfirmButton} from '../FoodDialog/foodDialog.style';
import {formatPrice} from '../Menu/dataFood';

const Order = React.memo(({orders}) => {
  return (
    <OrderContainer>
      {!orders.length ? (
        <OrderContent>Your order is empty.</OrderContent>
      ) : (
        <OrderContent>
          Your orders:
          {orders.map((order, index) => (
            <OrderItemContainer key={order.id}>
              <OrderItem>
                <div>{index + 1}</div>
                <div>{order.name}</div>
                <div />
                <div>{formatPrice(order.price)}</div>
              </OrderItem>
            </OrderItemContainer>
          ))}
        </OrderContent>
      )}
      <OrderFooter>
        <ConfirmButton>Checkout</ConfirmButton>
      </OrderFooter>
    </OrderContainer>
  );
});

export default Order;

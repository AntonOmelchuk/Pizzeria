import React from 'react';
import {
  OrderContainer,
  OrderContent,
  OrderFooter,
  OrderItem,
  OrderItemContainer,
  Toppings,
} from './order.style';

import {CheckoutButton} from './order.style';
import {formatPrice} from '../Menu/dataFood';
import {getTotalPrice} from '../FoodDialog/FoodDialog';

const Order = React.memo(({orders, setOrders, setOpenFood}) => {
  const total = orders.reduce(
    (total, order) => total + getTotalPrice(order),
    0
  );

  const deleteOrder = index => {
    const newOrder = orders.filter((_, i) => i !== index);
    setOrders(newOrder);
  };

  return (
    <OrderContainer>
      {!orders.length ? (
        <OrderContent>Your order is empty.</OrderContent>
      ) : (
        <OrderContent>
          Your orders:
          {orders.map((order, index) => (
            <OrderItemContainer key={index} editable>
              <OrderItem
                onClick={() => {
                  setOpenFood({...order, index});
                }}
              >
                <div>
                  <span>{order.quantity} &times;</span>
                </div>
                <div>{order.name === 'Drinks' ? order.choice : order.name}</div>
                <div
                  onClick={e => {
                    e.stopPropagation();
                    deleteOrder(index);
                  }}
                  style={{cursor: 'pointer'}}
                >
                  🗑
                </div>
                <div>{formatPrice(getTotalPrice(order))}</div>
              </OrderItem>
              <Toppings>
                {order.toppings
                  .filter(topping => topping.checked)
                  .map(topping => topping.name)
                  .join(', ')}
              </Toppings>
            </OrderItemContainer>
          ))}
          <OrderItemContainer>
            <OrderItem>
              <div />
              <div>Total</div>
              {formatPrice(total)}
            </OrderItem>
          </OrderItemContainer>
        </OrderContent>
      )}
      <OrderFooter>
        <CheckoutButton>Checkout</CheckoutButton>
      </OrderFooter>
    </OrderContainer>
  );
});

export default Order;

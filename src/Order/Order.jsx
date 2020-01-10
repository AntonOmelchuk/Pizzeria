import React from 'react';

import {DetailItem, OrderContainer, OrderContent, OrderItem, OrderStyled} from './order.style';
import {ConfirmButton, DialogFooter} from '../Dialogs/dialog.style';

import {formatPrice} from '../Data/FoodData';
import {getPrice} from '../Dialogs/FoodDialog';

const database = window.firebase.database();

export const Order = ({
                        orders,
                        setOrders,
                        setOpenFood,
                        login,
                        authenticated,
                        setOpenOrderDialog
}) => {
  const total = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);

  const deleteItem = index => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };

  const sendOrder = (orders, {email, displayName}) => {
    const orderRef = database.ref('orders').push();

    const newOrder = orders.map(order => {
      return Object.keys(order).reduce((acc, orderKey) => {
        if(!order[orderKey]) {
          return acc
        }
        if(orderKey === 'toppings') {
            return {
              ...acc,
              [orderKey]: order[orderKey]
                .filter(({checked}) => checked)
                .map(({name}) => name)
            }
        }

        return {
          ...acc,
          [orderKey]: order[orderKey]
        }
      }, {})});

    orderRef.set({
      order: newOrder,
      email,
      displayName
    })
  };

  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent>Your order is empty.</OrderContent>
      ) : (
        <OrderContent>
          {' '}
          <OrderContainer> Your Order: </OrderContainer>{' '}
          {orders.map((order, index) => (
            <OrderContainer editable key={index}>
              <OrderItem
                onClick={() => {
                  setOpenFood({...order, index});
                }}
              >
                <div>{order.quantity}</div>
                <div>{order.name}</div>
                <div
                  style={{cursor: 'pointer'}}
                  onClick={e => {
                    e.stopPropagation();
                    deleteItem(index);
                  }}
                >
                  🗑
                </div>
                <div>{formatPrice(getPrice(order))}</div>
              </OrderItem>
              <DetailItem>
                {order.toppings
                  .filter(t => t.checked)
                  .map(topping => topping.name)
                  .join(', ')}
              </DetailItem>
              {order.choice && <DetailItem>{order.choice}</DetailItem>}
            </OrderContainer>
          ))}
          <OrderContainer>
            <OrderItem>
              <div />
              <div>Total</div>
              <div>{formatPrice(total)}</div>
            </OrderItem>
          </OrderContainer>
        </OrderContent>
      )}
      {orders.length > 0 && <DialogFooter>
        <ConfirmButton onClick={() => {
          if(authenticated) {
            setOpenOrderDialog(true);
            sendOrder(orders, authenticated);
          } else {
            login()
          }
        }}>Checkout</ConfirmButton>
      </DialogFooter>}
    </OrderStyled>
  );
};

import React from 'react';

import {formatPrice} from '../Data/FoodData';
import {QuantityInput} from '../QuantityInput/QuantityInput';
import {useQuantity} from '../Hooks/useQuantity';
import {Toppings} from '../Toppings/Toppings';
import {useToppings} from '../Hooks/useToppings';
import {useChoice} from '../Hooks/useChoice';
import {Choices} from '../Choice/Choices';
import {
  ConfirmButton,
  Dialog,
  DialogBanner,
  DialogBannerName,
  DialogContent,
  DialogFooter,
  DialogShadow,
} from './dialog.style';

const pricePerTopping = 0.5;

export const getPrice = order => {
  return (
    order.quantity *
    (order.price +
      order.toppings.filter(t => t.checked).length * pricePerTopping)
  );
};

const hasToppings = food => {
  return food.section === 'Pizza';
};

const FoodDialogContainer = ({openFood, setOpenFood, setOrders, orders}) => {
  const quantity = useQuantity(openFood && openFood.quantity);
  const toppings = useToppings(openFood.toppings);
  const choiceRadio = useChoice(openFood.choice);
  const isEditing = openFood.index > -1;

  const close = () => setOpenFood();

  const order = {
    ...openFood,
    quantity: quantity.value,
    toppings: toppings.toppings,
    choice: choiceRadio.value,
  };

  const editOrder = () => {
    const newOrders = [...orders];
    newOrders[openFood.index] = order;
    setOrders(newOrders);
    close();
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    close();
  };

  return (
    <>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName> {openFood.name} </DialogBannerName>
        </DialogBanner>
        <DialogContent>
          <QuantityInput quantity={quantity} />
          {hasToppings(openFood) && (
            <>
              <h3> Would you like toppings? </h3>
              <Toppings {...toppings} />
            </>
          )}
          {openFood.choices && (
            <Choices openFood={openFood} choiceRadio={choiceRadio} />
          )}
        </DialogContent>
        <DialogFooter>
          <ConfirmButton
            onClick={isEditing ? editOrder : addToOrder}
            disabled={openFood.choices && !choiceRadio.value}
          >
            {isEditing ? `Update order: ` : `Add to order: `}
            {formatPrice(getPrice(order))}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export const FoodDialog = props => {
  if (!props.openFood) return null;
  return <FoodDialogContainer {...props} />;
};

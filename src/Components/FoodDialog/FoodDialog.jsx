import React from 'react';
import {
  ConfirmButton,
  DialogBanner,
  DialogBannerLabel,
  DialogContainer,
  DialogContent,
  DialogFooter,
  DialogOverlay,
} from './foodDialog.style';
import {formatPrice} from '../Menu/dataFood';
import QuantityInput from '../QuantityInput/QuantityInput';
import useQuantity from '../../Hooks/useQuantity';
import Toppings from '../Toppings/Toppings';
import {useToppings} from '../../Hooks/useToppings';
import {useChoice} from '../../Hooks/useChoice';
import DrinksChoice from '../DrinksChoice/DrinksChoice';

export const getTotalPrice = order => {
  const toppingsPrice = 0.5;
  const toppingsTotalPrice =
    order.toppings.filter(t => t.checked).length * toppingsPrice;
  return order.quantity * (order.price + toppingsTotalPrice);
};

const FoodDialogContainer = ({openFood, setOpenFood, orders, setOrders}) => {
  const quantity = useQuantity(openFood && openFood.quantity);
  const toppings = useToppings(openFood.toppings);
  const choiceDrink = useChoice(openFood.choice);

  const isEdit = openFood.index > -1;

  const checkSection = section => section === openFood.section;

  const order = {
    ...openFood,
    quantity: quantity.value,
    toppings: toppings.toppings,
    choice: choiceDrink.choice,
  };

  const closeFoodDialog = () => setOpenFood();

  const editOrder = () => {
    const newOrders = [...orders];
    newOrders[openFood.index] = order;
    setOrders(newOrders);
    closeFoodDialog();
  };

  const onHandleClick = () => {
    setOrders([...orders, order]);
    closeFoodDialog();
  };

  return (
    <>
      <DialogOverlay onClick={() => setOpenFood()} />
      <DialogContainer>
        <DialogBanner img={openFood.img}>
          <DialogBannerLabel>{openFood.name}</DialogBannerLabel>
        </DialogBanner>
        <DialogContent>
          <QuantityInput quantity={quantity} />
          {checkSection('Pizza') && (
            <>
              <h3>Would you like toppings? (Any for {formatPrice(0.5)})</h3>
              <Toppings {...toppings} />
            </>
          )}
          {checkSection('Drinks') && (
            <>
              <DrinksChoice openFood={openFood} choiceDrink={choiceDrink} />
            </>
          )}
        </DialogContent>
        <DialogFooter>
          <ConfirmButton
            onClick={isEdit ? editOrder : onHandleClick}
            disabled={checkSection('Drinks') && !choiceDrink.choice}
          >
            {' '}
            {isEdit ? 'Edit order: ' : 'Add to order: '}
            {formatPrice(getTotalPrice(order))}
          </ConfirmButton>
        </DialogFooter>
      </DialogContainer>
    </>
  );
};

export const FoodDialog = props => {
  if (!props.openFood) return null;

  return <FoodDialogContainer {...props} />;
};

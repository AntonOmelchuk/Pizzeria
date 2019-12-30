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

  const order = {
    ...openFood,
    quantity: quantity.value,
    toppings: toppings.toppings,
    choice: choiceDrink.choice,
  };

  const onHandleClick = () => {
    setOrders([...orders, order]);
    setOpenFood();
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
          {openFood.section === 'Pizza' && (
            <>
              <h3>Would you like toppings? (Any for {formatPrice(0.5)})</h3>
              <Toppings {...toppings} />
            </>
          )}
          {openFood.section === 'Drinks' && (
            <>
              <DrinksChoice openFood={openFood} choiceDrink={choiceDrink} />
            </>
          )}
        </DialogContent>
        <DialogFooter>
          <ConfirmButton onClick={onHandleClick}>
            Add to order: {formatPrice(getTotalPrice(order))}
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

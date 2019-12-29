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
import QuantityInput from '../QuantityInput';
import useQuantity from '../../Hooks/useQuantity';

export const getTotalPrice = order => order.price * order.quantity;

const FoodDialogContainer = ({openFood, setOpenFood, orders, setOrders}) => {
  const quantity = useQuantity(openFood && openFood.quantity);

  const order = {
    ...openFood,
    quantity: quantity.value,
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
        <DialogContent>{<QuantityInput quantity={quantity} />}</DialogContent>
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

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

const FoodDialog = ({openFood, setOpenFood, orders, setOrders}) => {
  const onHandleClick = () => {
    const order = {
      ...openFood,
    };

    setOrders([...orders, order]);
    setOpenFood();
  };

  return openFood ? (
    <>
      <DialogOverlay onClick={() => setOpenFood()} />
      <DialogContainer>
        <DialogBanner img={openFood.img}>
          <DialogBannerLabel>{openFood.name}</DialogBannerLabel>
        </DialogBanner>
        <DialogContent />
        <DialogFooter>
          <ConfirmButton onClick={onHandleClick}>
            Add to order: {formatPrice(openFood.price)}
          </ConfirmButton>
        </DialogFooter>
      </DialogContainer>
    </>
  ) : null;
};

export default FoodDialog;

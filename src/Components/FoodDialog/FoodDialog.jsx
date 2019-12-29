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

const FoodDialog = ({openFood, setOpenFood, orders, setOrders}) => {
  const onHandleClick = () => {
    setOrders([...orders, openFood.name]);
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
          <ConfirmButton onClick={onHandleClick}>Add to order</ConfirmButton>
        </DialogFooter>
      </DialogContainer>
    </>
  ) : null;
};

export default FoodDialog;

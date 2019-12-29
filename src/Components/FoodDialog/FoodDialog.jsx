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

const FoodDialog = ({openFood, setOpenFood}) => {
  return openFood ? (
    <>
      <DialogOverlay onClick={() => setOpenFood()} />
      <DialogContainer>
        <DialogBanner img={openFood.img}>
          <DialogBannerLabel>{openFood.name}</DialogBannerLabel>
        </DialogBanner>
        <DialogContent />
        <DialogFooter>
          <ConfirmButton>Add to order</ConfirmButton>
        </DialogFooter>
      </DialogContainer>
    </>
  ) : null;
};

export default FoodDialog;

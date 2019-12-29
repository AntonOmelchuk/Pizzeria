import React from 'react';
import {
  DialogBanner,
  DialogBannerLabel,
  DialogContainer,
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
      </DialogContainer>
    </>
  ) : null;
};

export default FoodDialog;

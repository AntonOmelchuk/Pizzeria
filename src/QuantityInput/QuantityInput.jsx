import React from 'react';

import {
  IncrementButton,
  IncrementContainer,
  QuantityInputStyled,
} from './quantityInput.style';

export const QuantityInput = ({quantity}) => {
  return (
    <IncrementContainer>
      <div>Quantity:</div>
      <IncrementButton onClick={() => {
          quantity.setValue(quantity.value - 1)}}
        disabled={quantity.value === 1}>
        -
      </IncrementButton>
      <QuantityInputStyled {...quantity} />
      <IncrementButton onClick={() => {
          quantity.setValue(quantity.value + 1)}}>
        +
      </IncrementButton>
    </IncrementContainer>
  );
};

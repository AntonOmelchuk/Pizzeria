import React from 'react';
import {
  IncrementButton,
  QuantityInputContainer,
  QuantityInputItem,
} from './quantityInput.style';

const QuantityInput = ({quantity}) => {
  const {value, setValue} = quantity;

  return (
    <QuantityInputContainer>
      <div>Quantity: </div>
      <IncrementButton
        disabled={value <= 1}
        onClick={() => setValue(value - 1)}
      >
        {' '}
        -{' '}
      </IncrementButton>
      <QuantityInputItem {...quantity} maxLength='2' />
      <IncrementButton
        disabled={value >= 99}
        onClick={() => setValue(value + 1)}
      >
        {' '}
        +{' '}
      </IncrementButton>
    </QuantityInputContainer>
  );
};

export default QuantityInput;

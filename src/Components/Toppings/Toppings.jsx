import React from 'react';
import {
  CheckboxLabel,
  ToppingCheckbox,
  ToppingsContainer,
} from './toppings.style';

const Toppings = ({toppings, checkTopping}) => {
  return (
    <ToppingsContainer>
      {toppings.map(topping => (
        <CheckboxLabel key={topping.id}>
          <ToppingCheckbox
            type='checkbox'
            checked={topping.checked}
            onChange={() => checkTopping(topping.id)}
          />
          {topping.name}
        </CheckboxLabel>
      ))}
    </ToppingsContainer>
  );
};

export default Toppings;

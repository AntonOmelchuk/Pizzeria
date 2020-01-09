import React from 'react';
import {CheckboxLabel, ToppingCheckbox, ToppingGrid} from './toppings.style';

export const Toppings = ({toppings, checkTopping}) =>  (
  <ToppingGrid>
    {toppings.map((topping, i) => (
      <CheckboxLabel key={topping.name}>
        <ToppingCheckbox
          type='checkbox'
          checked={topping.checked}
          onChange={() => {
            checkTopping(i);
          }}
        />
        {topping.name}
      </CheckboxLabel>
    ))}
  </ToppingGrid>
);

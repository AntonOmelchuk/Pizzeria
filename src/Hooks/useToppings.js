import {useState} from 'react';

export const useToppings = defaultTopping => {
  const [toppings, setToppings] = useState(
    defaultTopping || getDefaultToppings()
  );

  const checkTopping = id => {
    const newToppings = [...toppings];
    newToppings[id].checked = !newToppings[id].checked;
    setToppings(newToppings);
  };

  return {
    toppings,
    setToppings,
    checkTopping,
  };
};

const toppingsList = [
  'Extra Cheese',
  'Pepperoni',
  'Sausage',
  'Onions',
  'Peppers',
  'Pineapple',
  'Ham',
  'Spinach',
  'Artichokes',
  'Mushrooms',
  'Anchovies',
];

const getDefaultToppings = () => {
  return toppingsList.map((topping, index) => ({
    id: index,
    name: topping,
    checked: false,
  }));
};

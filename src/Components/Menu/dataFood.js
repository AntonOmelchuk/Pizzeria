import cheesePizza from '../../assets/pizza.png';
import pepperoniPizza from '../../assets/pizza2.jpeg';
import chickenPizza from '../../assets/chicken-pizza.jpeg';
import veggiePizza from '../../assets/healthy-pizza.jpeg';
import burger from '../../assets/burger.jpeg';
import gyro from '../../assets/gyro.jpeg';
import shrimp from '../../assets/sandwich.jpeg';
import fries from '../../assets/fries.jpeg';
import chickenFingers from '../../assets/chicken-fingers.jpeg';
import drinks from '../../assets/drinks.jpg';

export const formatPrice = price => {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

const foodItems = [
  {
    id: 1,
    name: 'Cheese Pizza',
    img: cheesePizza,
    section: 'Pizza',
    price: 10,
  },
  {
    id: 2,
    name: 'Pepperoni Pizza',
    img: pepperoniPizza,
    section: 'Pizza',
    price: 15,
  },
  {
    id: 3,
    name: 'Chicken Pizza',
    img: chickenPizza,
    section: 'Pizza',
    price: 20,
  },
  {
    id: 4,
    img: veggiePizza,
    name: 'Veggie Pizza',
    section: 'Pizza',
    price: 20,
  },
  {
    id: 5,
    img: burger,
    name: 'Burger',
    section: 'Sandwich',
    price: 3,
  },
  {
    id: 6,
    img: gyro,
    name: 'Gyro',
    section: 'Sandwich',
    price: 4.5,
  },
  {
    id: 7,
    img: shrimp,
    name: 'Shrimp PoBoy',
    section: 'Sandwich',
    price: 6,
  },
  {
    id: 8,
    img: fries,
    name: 'Fries',
    section: 'Sides',
    price: 1,
  },
  {
    id: 9,
    img: chickenFingers,
    name: 'Chicken Fingers',
    section: 'Sides',
    price: 4,
  },
  {
    id: 10,
    img: drinks,
    price: 1,
    name: 'Drinks',
    section: 'Drinks',
    choices: ['Coca-Cola', 'Fanta', 'Sprite'],
  },
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});

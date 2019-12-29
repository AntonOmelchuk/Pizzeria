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
    img: '/img/pizza.png',
    section: 'Pizza',
    price: 10,
  },
  {
    id: 2,
    name: 'Pepperoni Pizza',
    img: '/img/pizza2.jpeg',
    section: 'Pizza',
    price: 15,
  },
  {
    id: 3,
    name: 'Chicken Pizza',
    img: '/img/chicken-pizza.jpeg',
    section: 'Pizza',
    price: 20,
  },
  {
    id: 4,
    img: '/img/healthy-pizza.jpeg',
    name: 'Veggie Pizza',
    section: 'Pizza',
    price: 20,
  },
  {
    id: 5,
    img: '/img/burger.jpeg',
    name: 'Burger',
    section: 'Sandwich',
    price: 3,
  },
  {
    id: 6,
    img: '/img/gyro.jpeg',
    name: 'Gyro',
    section: 'Sandwich',
    price: 4.5,
  },
  {
    id: 7,
    img: '/img/sandwich.jpeg',
    name: 'Shrimp PoBoy',
    section: 'Sandwich',
    price: 6,
  },
  {
    id: 8,
    img: '/img/fries.jpeg',
    name: 'Fries',
    section: 'Sides',
    price: 1,
  },
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});

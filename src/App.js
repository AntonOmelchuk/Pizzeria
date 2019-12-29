import React from 'react';

import {GlobalStyle} from './Styles/globalStyle';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Menu from './Components/Menu/Menu';
import FoodDialog from './Components/FoodDialog/FoodDialog';
import Order from './Components/Order/Order';
import useOpenFood from './Hooks/useOpenFood';
import useOrder from "./Hooks/useOrder";

const App = () => {
  const openFood = useOpenFood();
  const orders = useOrder();

  return (
    <>
      <GlobalStyle />
      <FoodDialog />
      <Navbar />
      <Banner />
      <FoodDialog {...openFood} {...orders} />
      <Menu {...openFood} />
      <Order {...orders} />
    </>
  );
};

export default App;

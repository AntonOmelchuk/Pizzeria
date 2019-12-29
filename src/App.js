import React, {useState} from 'react';

import {GlobalStyle} from './Styles/globalStyle';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Menu from './Components/Menu/Menu';
import FoodDialog from './Components/FoodDialog/FoodDialog';
import Order from './Components/Order/Order';

const App = () => {
  const [openFood, setOpenFood] = useState();

  return (
    <>
      <GlobalStyle />
      <FoodDialog />
      <Navbar />
      <Banner />
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood} />
      <Menu setOpenFood={setOpenFood} />
      <Order />
    </>
  );
};

export default App;

import React from 'react';

import {GlobalStyle} from './Styles/GlobalStyle';

import {Navbar} from './Navbar/Navbar';
import {Order} from './Order/Order';
import {Banner} from './Banner/Banner';
import {Menu} from './Menu/Menu';
import {FoodDialog} from './Dialogs/FoodDialog';
import OrderDialog from './Dialogs/OrderDialog';

import {useOpenFood} from './Hooks/useOpenFood';
import {useOrders} from './Hooks/useOrders';
import {useTitle} from './Hooks/useTitle';
import {useAuthentication} from './Hooks/useAuthentication';
import {useOrderDialog} from './Hooks/useOrderDialog';

const App = () => {
  const openFood = useOpenFood();
  const orders = useOrders();
  const auth = useAuthentication();
  const orderDialog = useOrderDialog();
  useTitle({...openFood, ...orders});

  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} />
      <OrderDialog {...orderDialog} {...orders} />
      <Navbar {...auth} />
      <Order {...orders} {...openFood} {...auth} {...orderDialog} />
      <Banner />
      <Menu {...openFood} />
    </>
  );
};

export default App;

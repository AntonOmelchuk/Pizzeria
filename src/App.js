import React from 'react';

import {GlobalStyle} from './globalStyle';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
    </>
  );
};

export default App;

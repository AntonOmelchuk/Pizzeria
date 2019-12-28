import React from 'react';

import {GlobalStyle} from './globalStyle';
import Navbar from './Navbar/Navbar';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <h1>Pizza</h1>
      <h3>Hello Slice Pizza</h3>
    </>
  );
};

export default App;

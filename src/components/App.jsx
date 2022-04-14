/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@styles/app.css';
import Layout from '@components/Layout';
import Router from '@router';
import AppContext from '@context/AppContext';
import useCart from '@hooks/useCart';

// eslint-disable-next-line react/function-component-definition
const App = () => {
  const cart = useCart();
  return (
    <AppContext.Provider value={cart}>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;

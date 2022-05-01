/* eslint-disable import/no-unresolved */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppContext from '@context/AppContext';

const initialState = {
  state: {
    cart: [],
  },
};

const LayoutMock = ({ children }) => {
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>{children}</BrowserRouter>
    </AppContext.Provider>
  );
};

export default LayoutMock;

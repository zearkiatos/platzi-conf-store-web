/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import initialState from '@mocks/initialState';

const useCart = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) =>
    setState({
      ...state,
      cart: [...state.cart, payload],
    });

  const removeFromCart = (payload) =>
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
    });

  const addToBuyer = (payload) =>
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });

  const addNewOrder = (payload) =>
    setState({
      ...state,
      orders: [...state.orders, payload],
    });

  return {
    addToCart,
    addToBuyer,
    addNewOrder,
    removeFromCart,
    state,
  };
};

export default useCart;

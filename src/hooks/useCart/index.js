/* eslint-disable import/no-unresolved */
import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '@config';
import initialState from '@mocks/initialState';

const useCart = () => {
  const [state, setState] = useState(initialState);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios(`${config.PLATZI_CONF_STORE.API}/api/products`);
    setProducts(response.data.data);
  };

  useEffect(() => {
    getProducts();
  }, []);
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
    products
  };
};

export default useCart;

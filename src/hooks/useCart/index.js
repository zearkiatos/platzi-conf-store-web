/* eslint-disable import/no-unresolved */
import { useState, useEffect } from 'react';
import { getProducts }  from '@clients/Products';
import initialState from '@mocks/initialState';

const useCart = () => {
  const [state, setState] = useState(initialState);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const productsGetted = await getProducts();
    setProducts(productsGetted);
  }

  useEffect(() => {
    fetchProducts();
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

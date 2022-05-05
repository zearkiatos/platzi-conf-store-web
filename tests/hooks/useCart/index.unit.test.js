/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import { useState as useStateMock } from 'react';
import useCart from '@hooks/useCart';
import ProductBuilder from '../../builders/productBuilder';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
  useEffect: jest.fn(),
}));

describe('Suite unit test for useCart custom hook', () => {
  beforeEach(() => {
    useStateMock.mockImplementation((initialState) => {
      let state = initialState;
      const setState = (newState) => {
        const payload = {
          ...initialState,
          newState,
        };
        state = payload;
        return payload;
      };
      const getState = () => state;
      return [get getState(), setState];
    });
    
  });
  test('Should add a new product to the cart', () => {
    const payload = new ProductBuilder().build();
    const { addToCart, state } = useCart();
    const expectedState = {
      buyer: [],
      cart: [payload],
      orders: [],
    };

    addToCart(payload);

    expect(state).toEqual(expectedState);
  });
});

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

const closure = (initial) => (newPayload) => ({
  ...initial,
  cart: [newPayload],
});

const closureRemove = (initial) => () => ({
  ...initial,
  cart: [],
});

describe('Suite unit test for useCart custom hook', () => {
  test('Should add a new product to the cart', () => {
    const mockPayload = new ProductBuilder().build();
    useStateMock.mockImplementation((initialState) => {
      const add = closure(initialState);
      const state = add(mockPayload);

      const setState = (newState) => {
        const payload = {
          ...initialState,
          ...newState
        };
        return payload;
      };

      return [state, setState];
    });
    const { addToCart } = useCart();
    const expectedState = {
      buyer: [],
      cart: [mockPayload],
      orders: [],
    };

    addToCart(mockPayload);
    const { state } = useCart();

    expect(state).toEqual(expectedState);
  });

  test('Should remove a product from cart', () => {
    const mockPayload = new ProductBuilder().build();
    useStateMock.mockImplementation((initialState) => {
      const remove = closureRemove(initialState);
      const state = remove(mockPayload);

      const setState = (newState) => {
        const payload = {
          ...initialState,
          ...newState,
        };
        return payload;
      };

      return [state, setState];
    });
    const { removeFromCart, state } = useCart();
    const expectedState = {
      buyer: [],
      cart: [],
      orders: [],
    };

    removeFromCart(mockPayload);

    expect(state).toEqual(expectedState);
  });
});

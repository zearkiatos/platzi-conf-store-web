/* eslint-disable no-undef */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable import/imports-first */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { mount, shallow } from 'enzyme';
import LayoutMock from '../__mocks__/LayoutMock';
import Product from '@components/Product';
import ProductBuilder from '../builders/productBuilder';
import environmentUtils from '../utils/environmentUtils';

describe('Suite unit test for Product component', () => {
  beforeAll(() => {
    environmentUtils.setUpDomEnvironment();
  });
  test('Should render component product', () => {
    const productComponent = shallow(
      <LayoutMock>
        <Product />
      </LayoutMock>
    );

    expect(productComponent.length).toEqual(1);
  });

  test('Should check the buy button', () => {
    const handleAddToCart = jest.fn();
    const productMock = new ProductBuilder().build();
    const wrapper = mount(
      <LayoutMock>
        <Product
          key={productMock.id}
          product={productMock}
          handleAddToCart={handleAddToCart}
        />
      </LayoutMock>
    );

    wrapper.find('button').simulate('click');

    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});

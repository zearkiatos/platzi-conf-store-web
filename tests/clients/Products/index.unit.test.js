/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import axios from 'axios';
import { getProducts } from '@clients/Products';
import ProductBuilder from '../../builders/productBuilder';

jest.mock('axios');
describe('Suite unit test for product client', () => {
  test('Should execute and get products from Api', async () => {
    const productsMock = [new ProductBuilder().build()];
    axios.mockImplementation(() =>
      Promise.resolve({ data: { data: productsMock } })
    );

    const products = await getProducts();

    expect(axios).toHaveBeenCalled();
    expect(products).toEqual(productsMock);
  });
});

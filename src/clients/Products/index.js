/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import config from '@config';

export const getProducts = async () => {
  const response = await axios(`${config.PLATZI_CONF_STORE.API}/api/products`);
  return response.data.data;
};


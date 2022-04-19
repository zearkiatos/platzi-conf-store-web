/* eslint-disable import/no-unresolved */
import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '@config';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `${config.GOOGLE_MAPS.API_BASE_URL}?address=${address}&key=${config.GOOGLE_MAPS.API_KEY}`;

  const getLocation = async () => {
    const response = await axios(API);
    console.log(response);
    return response.data.results[0];
  }
  useEffect(() => {
    const fetchLocation = async () => {
        const response = await getLocation();
        setMap(response.geometry.location);
    };
    fetchLocation();
  }, []);

  return map;
};

export default useGoogleAddress;

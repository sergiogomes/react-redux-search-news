import axios from 'axios';

import { URL, KEY } from '../constants/api';

export const get = (endPoint: string) => {
  const API_KEY = `&apiKey=${KEY}`;
  return axios.get(URL + endPoint + API_KEY).then((response) => {
    return response.data;
  });
};

// TODO:
// Implement post function

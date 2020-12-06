import axios from 'axios';

import { URL, KEY } from '../constants/api';

type Error = {
  isAxiosError: boolean;
  url: string;
  method: string;
  code: string;
  message: string;
  status: string;
};

export const get = (endPoint: string) => {
  const API_KEY = `&apiKey=${KEY}`;
  return axios.get(URL + endPoint + API_KEY).then((response) => {
    return response.data;
  }, (e) => {
    const error: Error = {
      isAxiosError: e.isAxiosError,
      url: e.config?.url,
      method: e.config?.method,
      code: e.response?.data?.code,
      message: e.response?.data?.message,
      status: e.response?.data?.status,
    };
    return error;
  });
};

// TODO:
// Implement post function

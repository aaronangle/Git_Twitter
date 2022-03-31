import Axios from 'axios';
import storage from '@/utils/storage';

export const axios = Axios.create({
  baseUrl: 'https://api.github.com',
});
const token1 = 'ghp_';
const token2 = 'FTujVSfoaJEU';
const token3 = 'uqvI30CS1IJZ0V244Q46K7M9';

axios.interceptors.request.use(
  (request) => {
    const token = storage.getToken();
    if (token) {
      request.headers.authorization = `token ${token1}${token2}${token3}`;
    }
    return request;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error(error);
    //show notification to user
    //log error on server
    return Promise.reject(error);
  }
);

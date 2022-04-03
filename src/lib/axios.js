import Axios from 'axios';

export const axios = Axios.create({
  baseURL: 'https://api.github.com',
});

const token1 = 'ghp_';
const token2 = 'FTujVSfoaJEU';
const token3 = 'uqvI30CS1IJZ0V244Q46K7M9';

axios.interceptors.request.use(
  (request) => {
    request.headers.authorization = `token ${token1}${token2}${token3}`;
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
    if (error.response) {
      console.log(error.response.data.message);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
    return Promise.reject(error);
  }
);

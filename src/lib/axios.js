import Axios from "axios";
import storage from "@/utils/storage";

export const axios = Axios.create({
  baseUrl: "https://facebook.com",
});

axios.interceptors.request.use(
  (request) => {
    const token = storage.getToken();
    if (token) {
      request.headers.authorization = `${token}`;
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

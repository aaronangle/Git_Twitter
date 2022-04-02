import { axios } from 'lib/axios';

export const getEvents = ({ pageParam = 1 }) => {
  return axios.get(`/events?page=${pageParam}`);
};

import { useQuery } from 'react-query';

import { axios } from 'lib/axios';

const page = Math.floor(Math.random() * 100);

export const getUsers = () => {
  return axios(`/search/users?q=""&page=${page}&per_page=5`);
};

export const useUsers = () => {
  return useQuery(['whoToFollow'], getUsers, { staleTime: 300000 });
};

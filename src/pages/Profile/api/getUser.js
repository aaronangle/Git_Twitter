import { useQuery } from 'react-query';

import { axios } from 'lib/axios';

export const getUser = ({ queryKey }) => {
  const username = queryKey[1];
  return axios(`/users/${username}`);
};

export const useUser = (username) => {
  return useQuery(['user', username], getUser, { staleTime: 600000 });
};

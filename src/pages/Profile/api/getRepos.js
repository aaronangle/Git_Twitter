import { useQuery } from 'react-query';

import { axios } from 'lib/axios';

export const getRepos = ({ queryKey }) => {
  const username = queryKey[1];
  return axios(`/users/${username}/repos`);
};

export const useRepos = (username) => {
  return useQuery(['repos', username], getRepos, { staleTime: 600000 });
};

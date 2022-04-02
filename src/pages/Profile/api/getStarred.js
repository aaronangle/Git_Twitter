import { useQuery } from 'react-query';

import { axios } from 'lib/axios';

export const getStarred = ({ queryKey }) => {
  const username = queryKey[1];
  return axios(`/users/${username}/starred`);
};

export const useStarred = (username) => {
  return useQuery(['starred', username], getStarred, { staleTime: 600000 });
};

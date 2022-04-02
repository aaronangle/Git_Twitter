import { useInfiniteQuery } from 'react-query';

import { axios } from 'lib/axios';

export const getTopics = ({ pageParam = 1, queryKey }) => {
  const query = queryKey[1];
  return axios(`/search/topics?q=${query}&per_page=20&page=${pageParam}`);
};

export const useTopics = (pageCount, query) => {
  return useInfiniteQuery(['topics', query], getTopics, {
    getNextPageParam: (lastPage) => {
      if (lastPage && lastPage.length < 20) {
        return false;
      }
      return pageCount;
    },
  });
};

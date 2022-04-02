import { useInfiniteQuery } from 'react-query';

import { axios } from 'lib/axios';

export const getEvents = ({ pageParam = 1 }) => {
  return axios.get(`/events?page=${pageParam}`);
};

export const useEvents = (pageCount) => {
  return useInfiniteQuery(['events'], getEvents, {
    getNextPageParam: (lastPage) => {
      if (lastPage.length === 30) {
        return pageCount;
      } else {
        return false;
      }
    },
  });
};

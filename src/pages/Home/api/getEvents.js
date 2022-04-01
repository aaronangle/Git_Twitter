import { axios } from 'lib/axios';

export const getEvents = (pageCount = 1) => {
  console.log(pageCount);
  return axios.get(`/events?page=${pageCount}`);
};

// export const useEvents = useQuery('repoData', () => getEvents());

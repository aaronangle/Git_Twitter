import React, { useEffect, useState } from 'react';

import { RowContainer } from 'components/RowContainer';
import { EventRow } from 'components/EventRow';
import { IntersectionObserverContainer } from 'components/IntersectionObserverContainer';

import { axios } from 'lib/axios';

export const UserEvents = ({ username }) => {
  const [events, setEvents] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const [keepFetching, setKeepFetching] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios(`/users/${username}/events?page=${pageCount}`).then(res => {
      setEvents(e => [...e, ...res]);
      setLoading(false);
      if (res.length < 30) {
        setKeepFetching(false);
      }
    });
  }, [pageCount, username]);

  function onIntersect() {
    setPageCount(c => c + 1);
  }

  return (
    <>
      {events.map(event => {
        return (
          <RowContainer key={event.id}>
            <EventRow event={event} />
          </RowContainer>
        );
      })}
      {keepFetching && <IntersectionObserverContainer onIntersect={onIntersect} isLoading={isLoading} />}
      {!isLoading && <h3 className="text--center">No {events.length > 0 && 'More'} Events</h3>}
    </>
  );
};

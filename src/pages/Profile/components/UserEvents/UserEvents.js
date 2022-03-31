import React, { useEffect, useState } from 'react';

import { RowContainer } from 'components/RowContainer';
import { EventRow } from 'components/EventRow';
import { IntersectionObserverContainer } from 'components/IntersectionObserverContainer';
import { Spinner } from 'components/Spinner';

import { axios } from 'lib/axios';

export const UserEvents = ({ username }) => {
  const [events, setEvents] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (pageCount > 9) return;
    setLoading(true);
    axios(`/users/${username}/events?page=${pageCount}`).then((res) => {
      setEvents((e) => [...e, ...res]);
      setLoading(false);
    });
  }, [pageCount, username]);

  function onIntersect() {
    setPageCount((c) => c + 1);
  }

  return (
    <>
      {events.map((event) => {
        return (
          <RowContainer key={event.id}>
            <EventRow event={event} />
          </RowContainer>
        );
      })}
      {isLoading ? <Spinner /> : <IntersectionObserverContainer onIntersect={onIntersect} />}
      {!isLoading && <h3 className="text--center">No {events.length > 0 && 'More'} Events to Show</h3>}
    </>
  );
};

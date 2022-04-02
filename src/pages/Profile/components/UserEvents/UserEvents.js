import React, { useState, useCallback } from 'react';

import { RowContainer } from 'components/Elements/RowContainer';
import { EventRow } from 'components/Elements/EventRow';
import { IntersectionObserverContainer } from 'components/Functional/IntersectionObserverContainer';
import { Spinner } from 'components/Elements/Spinner';

import { useUserEvents } from 'pages/Profile/api/getUserEvents';

export const UserEvents = ({ username }) => {
  const [pageCount, setPageCount] = useState(2);

  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useUserEvents(
    pageCount,
    username
  );

  const onIntersect = useCallback(() => {
    fetchNextPage();
    setPageCount((c) => c + 1);
  }, [fetchNextPage]);

  if (status === 'loading') return <Spinner />;
  if (status === 'error') return <p>Error: {error.message}</p>;
  return (
    <>
      {data.pages.map((events) => {
        return events.map((event) => {
          return (
            <RowContainer key={event.id}>
              <EventRow event={event} />
            </RowContainer>
          );
        });
      })}
      {hasNextPage && !isFetchingNextPage && (
        <IntersectionObserverContainer onIntersect={onIntersect} isLoading={isFetchingNextPage} />
      )}
      {!isFetchingNextPage && !hasNextPage && <h3 className="text--center">No More Events</h3>}
    </>
  );
};

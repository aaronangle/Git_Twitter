import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { WelcomeMessage } from './components/WelcomeMessage/WelcomeMessage';
import { PageContainer } from 'components/Layouts/PageContainer';
import { PageHeader } from 'components/Layouts/PageHeader';
import { RowContainer } from 'components/Elements/RowContainer';
import { EventRow } from 'components/Elements/EventRow';
import { IntersectionObserverContainer } from 'components/Functional/IntersectionObserverContainer';
import { Spinner } from 'components/Elements/Spinner';

import { useEvents } from './api/getEvents';

export const Home = () => {
  const [pageCount, setPageCount] = useState(2);

  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useEvents(pageCount);

  console.log(data);

  const onIntersect = useCallback(() => {
    fetchNextPage();
    setPageCount((c) => c + 1);
  }, [fetchNextPage]);

  if (status === 'loading') return <Spinner />;
  if (status === 'error') return <p>Error: {error.message}</p>;
  return (
    <>
      <PageContainer>
        <PageHeader>
          <h2>Latest Events</h2>
        </PageHeader>
        <WelcomeMessage />
        {data.pages.map((events) => {
          return events.map((event, index) => {
            return (
              <Link
                to={'/profile/' + event.actor.login}
                key={index}
                className="text--no-underline text--text-color"
              >
                <RowContainer>
                  <EventRow event={event} />
                </RowContainer>
              </Link>
            );
          });
        })}
        {hasNextPage && !isFetchingNextPage && (
          <IntersectionObserverContainer onIntersect={onIntersect} isLoading={isFetchingNextPage} />
        )}
        {!isFetchingNextPage && !hasNextPage && <h3 className="text--center">No More Events</h3>}
      </PageContainer>
    </>
  );
};

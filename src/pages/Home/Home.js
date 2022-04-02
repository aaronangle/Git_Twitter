import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { WelcomeMessage } from './components/WelcomeMessage/WelcomeMessage';
import { PageContainer } from 'components/PageContainer';
import { PageHeader } from 'components/PageHeader';
import { RowContainer } from 'components/RowContainer';
import { EventRow } from 'components/EventRow';
import { IntersectionObserverContainer } from 'components/IntersectionObserverContainer';

import { getEvents } from './api/getEvents';
import { useInfiniteQuery } from 'react-query';

import storage from 'utils/storage';
import { Spinner } from 'components/Spinner';

let hasVisitedSite = storage.hasVisitedSite();

if (!hasVisitedSite) {
  storage.setHasVisitedSite(true);
}

export const Home = () => {
  const [pageCount, setPageCount] = useState(2);
  const [showWelcome, setShowWelcome] = useState(!hasVisitedSite);

  useEffect(() => {
    if (!showWelcome) {
      hasVisitedSite = true;
    }
  }, [showWelcome]);

  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery(
    ['events'],
    getEvents,
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length === 30) {
          return pageCount;
        } else {
          return false;
        }
      },
    }
  );

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
        {showWelcome && <WelcomeMessage setShowWelcome={setShowWelcome} />}
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

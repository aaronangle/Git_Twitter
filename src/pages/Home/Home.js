import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { WelcomeMessage } from './components/WelcomeMessage/WelcomeMessage';
import { PageContainer } from 'components/PageContainer';
import { PageHeader } from 'components/PageHeader';
import { RowContainer } from 'components/RowContainer';
import { EventRow } from 'components/EventRow';
import { IntersectionObserverContainer } from 'components/IntersectionObserverContainer';

import { axios } from 'lib/axios';
import storage from 'utils/storage';

let hasVisitedSite = storage.hasVisitedSite();

if (!hasVisitedSite) {
  storage.setHasVisitedSite(true);
}

export const Home = () => {
  const [events, setEvents] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [showWelcome, setShowWelcome] = useState(!hasVisitedSite);
  const [isLoading, setIsLoading] = useState(true);
  const [keepFetching, setKeepFetching] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios(`/events?page=${pageCount}`).then(res => {
      setEvents(e => [...e, ...res]);
      setIsLoading(false);
      if (res.length < 30) {
        setKeepFetching(false);
      }
    });
  }, [pageCount]);

  useEffect(() => {
    if (!showWelcome) {
      hasVisitedSite = true;
    }
  }, [showWelcome]);

  function onIntersect() {
    setPageCount(c => c + 1);
  }

  return (
    <>
      <PageContainer>
        <PageHeader>
          <h2>Latest Events</h2>
        </PageHeader>
        {showWelcome && <WelcomeMessage setShowWelcome={setShowWelcome} />}
        {events.map((event, index) => {
          return (
            <Link to={'/profile/' + event.actor.login} key={index} className="text--no-underline text--text-color">
              <RowContainer>
                <EventRow event={event} />
              </RowContainer>
            </Link>
          );
        })}
        {keepFetching && <IntersectionObserverContainer onIntersect={onIntersect} isLoading={isLoading} />}
        {!isLoading && <h3 className="text--center">No More Events</h3>}
      </PageContainer>
    </>
  );
};

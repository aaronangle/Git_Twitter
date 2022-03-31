import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { WelcomeMessage } from './components/WelcomeMessage/WelcomeMessage';
import { PageContainer } from 'components/PageContainer';
import { PageHeader } from 'components/PageHeader';
import { RowContainer } from 'components/RowContainer';
import { EventRow } from 'components/EventRow';
import { Spinner } from 'components/Spinner';

import { axios } from 'lib/axios';
import storage from 'utils/storage';

let hasVisitedSite = storage.hasVisitedSite();

if (!hasVisitedSite) {
  storage.setHasVisitedSite(true);
}

export const Home = () => {
  const [events, setEvents] = useState([]);
  const [showWelcome, setShowWelcome] = useState(!hasVisitedSite);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios(`/events?page=1`).then((res) => {
      setEvents(res);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!showWelcome) {
      hasVisitedSite = true;
    }
  }, [showWelcome]);

  return (
    <>
      <PageContainer>
        <PageHeader>
          <h2>Latest Events</h2>
        </PageHeader>
        {showWelcome && <WelcomeMessage setShowWelcome={setShowWelcome} />}
        {events.map((event) => {
          return (
            <Link to={'/profile/' + event.actor.login} key={event.id} className="text--no-underline text--text-color">
              <RowContainer>
                <EventRow event={event} />
              </RowContainer>
            </Link>
          );
        })}
        {isLoading && <Spinner />}
      </PageContainer>
    </>
  );
};

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { PageContainer } from 'components/PageContainer';
import { PageHeader } from 'components/PageHeader';
import { RowContainer } from 'components/RowContainer';
import { EventRow } from 'components/EventRow';

import { axios } from 'lib/axios';

export const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios(`/events?page=1`)
      .then((res) => res.json())
      .then((res) => {
        setEvents(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <PageContainer>
        <PageHeader>
          <h2>Latest Events</h2>
        </PageHeader>
        {events.map((event) => {
          return (
            <Link to={'/profile/' + event.actor.login} key={event.id} className="text--no-underline text--text-color">
              <RowContainer>
                <EventRow event={event} />
              </RowContainer>
            </Link>
          );
        })}
      </PageContainer>
    </>
  );
};

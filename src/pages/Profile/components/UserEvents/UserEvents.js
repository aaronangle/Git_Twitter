import React from 'react';
import { RowContainer } from 'components/RowContainer';
import { EventRow } from 'components/EventRow';

export const UserEvents = ({ events }) => {
  return (
    <>
      {events.map((event) => {
        return (
          <RowContainer>
            <EventRow event={event} />
          </RowContainer>
        );
      })}
    </>
  );
};

import React from 'react';

import { CommitsDropdown } from 'components/Elements/CommitsDropdown';
import { Avatar } from 'components/Elements/Avatar';

import { joinClassNames, formatEventTime } from 'utils';

import styles from './styles.module.css';

export const EventRow = ({ event }) => {
  return (
    <>
      <div>
        <div className={styles.row}>
          <div className="fs-row f-no-wrap">
            <Avatar img={event.actor.avatar_url} />
            <div className="ml-1">
              <div className="fs-row">
                <h4 className="m-0">@{event.actor.login} </h4>
                <p className={joinClassNames(styles.row__company, 'text--muted', 'm-0')}>
                  {event?.org?.login}{' '}
                </p>
              </div>
              <div>
                <p className={joinClassNames(styles['row__event'], 'm-0')}>
                  {event.type} - {event.repo.name}
                </p>
                {event.payload.commits && <CommitsDropdown event={event} />}
              </div>
            </div>
          </div>
          <p className={joinClassNames(styles.row__date, 'text--muted mt-0')}>
            {formatEventTime(event.created_at)}
          </p>
        </div>
      </div>
    </>
  );
};

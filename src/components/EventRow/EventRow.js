import React from 'react';

import { CommitsDropdown } from 'components/CommitsDropdown';

import { joinClassNames } from 'utils/helpers';

import styles from './styles.module.css';

export const EventRow = ({ event }) => {
  return (
    <>
      <div>
        <div className={styles.row}>
          <div className="fs-row f-no-wrap">
            <img className={styles.row__avatar} src={event.actor.avatar_url} alt="avatar" />
            <div className="ml-1">
              <div className="fs-row">
                <h4 className="m-0">@{event.actor.login} </h4>
                <p className={joinClassNames(styles.row__company, 'text--muted', 'm-0')}>{event?.org?.login} </p>
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
            {new Date(event.created_at).toLocaleString([], { month: 'short', day: 'numeric', hour12: true, hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>
    </>
  );
};

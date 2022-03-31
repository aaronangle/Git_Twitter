import React from 'react';
import { joinClassNames } from 'utils/helpers';
import styles from './styles.module.css';

export const WelcomeMessage = ({ setShowWelcome }) => {
  return (
    <>
      <div className={joinClassNames(styles.box, 'fc-col')}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className={styles.box__x} onClick={() => setShowWelcome(false)}>
          <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
        </svg>
        <h2>Welcome to Git_Tweeter 👋</h2>
        <p className="text--center">
          This site was built with React, React Query, CSS modules, and the GitHub API. GitHub only allows 30 API calls per minute. I've tried my best to reduce the number of calls
          made by caching the data, but if you do run into fetch error just wait a few seconds and refresh.
        </p>
      </div>
    </>
  );
};

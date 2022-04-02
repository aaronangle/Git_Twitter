import React, { useState } from 'react';

import { joinClassNames, pluralizeName } from 'utils';

import styles from './styles.module.css';

export const CommitsDropdown = ({ event }) => {
  const {
    payload: { commits },
  } = event;

  const [showCommits, setShowCommits] = useState(false);

  function handleCommitClick(e) {
    e.preventDefault();
    setShowCommits((c) => !c);
  }

  return (
    <div className="">
      <p className="text--primary hover fs-row mb-0 " onClick={(e) => handleCommitClick(e)}>
        {commits.length} {pluralizeName('commit', commits.length)}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className={joinClassNames(styles.svg, showCommits && styles['svg--rotate'])}
        >
          <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
        </svg>
      </p>
      {showCommits && (
        <div className={styles.cont}>
          {commits.map((commit, index) => {
            return (
              <p className={styles['commit']} key={index}>
                <span className={styles['commit__span']}>{commit.author.name}</span> -{' '}
                {commit.message}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

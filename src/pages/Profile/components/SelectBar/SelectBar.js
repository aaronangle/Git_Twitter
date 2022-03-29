import React from 'react';
import styles from './styles.module.css';
import { joinClassNames } from 'utils/joinClassNames';

export const SelectBar = ({ user, setSelectedView }) => {
  return (
    <>
      <div className={styles.row}>
        <p className={joinClassNames(styles.selected, styles.link)} onClick={() => setSelectedView('events')}>
          Events
        </p>
        <p className={styles.link} onClick={() => setSelectedView('repos')}>
          Repos
        </p>
        <p className={styles.link} onClick={() => setSelectedView('starred')}>
          Starred
        </p>
      </div>
    </>
  );
};

import React from 'react';
import styles from './styles.module.css';
import { joinClassNames } from 'utils/helpers';

export const SelectBar = ({ selectedView, setSelectedView }) => {
  return (
    <>
      <div className={styles.row}>
        <p className={joinClassNames(styles.link, selectedView == 'events' && styles.selected)} onClick={() => setSelectedView('events')}>
          Events
        </p>
        <p className={joinClassNames(styles.link, selectedView == 'repos' && styles.selected)} onClick={() => setSelectedView('repos')}>
          Repos
        </p>
        <p className={joinClassNames(styles.link, selectedView == 'starred' && styles.selected)} onClick={() => setSelectedView('starred')}>
          Starred
        </p>
      </div>
    </>
  );
};

import React from 'react';
import styles from './styles.module.css';
import { joinClassNames } from '../../../../utils/joinClassNames';

export const SelectBar = ({ user }) => {
  return (
    <>
      <div className={styles.row}>
        <p className={joinClassNames(styles.selected, styles.link)}>Events</p>
        <p className={styles.link}>Repos</p>
        <p className={styles.link}>Starred</p>
      </div>
    </>
  );
};

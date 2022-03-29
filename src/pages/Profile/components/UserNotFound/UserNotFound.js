import React from 'react';
import { UsersSearch } from '../../../../components/UsersSearch';
import styles from './styles.module.css';

export const UserNotFound = ({ username }) => {
  return (
    <div className={styles.cont}>
      <h3>Hmm... we couldn't find {username} on GitHub. Try searching for a different user</h3>
      <UsersSearch />
    </div>
  );
};
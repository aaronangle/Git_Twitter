import React from 'react';
import { WhoToFollow } from '../../components/WhoToFollow';
import { NavigationBar } from '../../components/NavigationBar';
import { UsersSearch } from '../../components/UsersSearch';

import styles from './styles.module.css';

export const MainLayout = ({ children }) => {
  return (
    <div className={styles.cont}>
      <div className={styles.cont__left}>
        <div className={styles.left__inner}>
          <NavigationBar />
        </div>
      </div>
      <div className={styles.cont__main}>{children}</div>
      <div className={styles.cont__right}>
        <div className={styles.right__inner}>
          <UsersSearch />
          <WhoToFollow />
        </div>
      </div>
    </div>
  );
};

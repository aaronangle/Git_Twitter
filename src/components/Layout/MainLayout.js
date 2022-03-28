import React from 'react';
import { WhoToFollow } from '../../components/WhoToFollow';
import { NavigationBar } from '../../components/NavigationBar';

import styles from './styles.module.css';

export const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <NavigationBar />
      </div>
      <div className={styles.main}>{children}</div>
      <div className={styles.right}>
        <WhoToFollow />
      </div>
    </div>
  );
};

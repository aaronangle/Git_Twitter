import React from 'react';
import styles from './styles.module.css';

export const PageContainer = ({ children }) => {
  return <div className={styles.cont}>{children}</div>;
};

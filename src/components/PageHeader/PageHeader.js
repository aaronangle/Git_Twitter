import React from 'react';
import styles from './styles.module.css';

export const PageHeader = ({ children }) => {
  return <div className={styles.header}>{children}</div>;
};

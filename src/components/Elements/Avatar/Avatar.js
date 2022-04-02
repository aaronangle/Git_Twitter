import React from 'react';

import styles from './styles.module.css';

export const Avatar = ({ img }) => {
  return <img src={img} className={styles.avatar} alt="avatar" />;
};

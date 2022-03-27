import React from 'react';
import { Button } from '../../components/Button/Button';
import styles from './styles.module.css';
export const Landing = () => {
  return (
    <div className={styles.flexRow}>
      <div className={styles.side}></div>
      <div className={styles.center}>
        <h1>Welcome to Tweeter</h1>
        <p>A Twitter clone built by me with React and CSS modules.</p>
        <Button className={'btn-primary'}>Continue</Button>
      </div>
    </div>
  );
};

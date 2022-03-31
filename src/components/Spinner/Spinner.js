import React from 'react';
import styles from './styles.module.css';
import { joinClassNames } from 'utils/helpers';

export const Spinner = () => {
  return (
    <div className={styles['container-loading']}>
      <div className={styles['sk-fading-circle']}>
        <div className={joinClassNames(styles['sk-circle1'], styles['sk-circle'])}></div>
        <div className={joinClassNames(styles['sk-circle2'], styles['sk-circle'])}></div>
        <div className={joinClassNames(styles['sk-circle3'], styles['sk-circle'])}></div>
        <div className={joinClassNames(styles['sk-circle4'], styles['sk-circle'])}></div>
        <div className={joinClassNames(styles['sk-circle5'], styles['sk-circle'])}></div>
        <div className={joinClassNames(styles['sk-circle6'], styles['sk-circle'])}></div>
        <div className={joinClassNames(styles['sk-circle7'], styles['sk-circle'])}></div>
        <div className={joinClassNames(styles['sk-circle8'], styles['sk-circle'])}></div>
        <div className={joinClassNames(styles['sk-circle9'], styles['sk-circle'])}></div>
        <div className={joinClassNames(styles['sk-circle10'], styles['sk-circle'])}></div>
        <div className={joinClassNames(styles['sk-circle11'], styles['sk-circle'])}></div>
        <div className={joinClassNames(styles['sk-circle12'], styles['sk-circle'])}></div>
      </div>
    </div>
  );
};

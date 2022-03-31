import React from 'react';

import { joinClassNames } from 'utils/helpers';

import styles from './styles.module.css';

export const CheckboxSlider = ({ onChange, checked }) => {
  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={() => onChange()} checked={checked} />
      <span className={joinClassNames(styles.slider, styles.round)}></span>
    </label>
  );
};

import React from 'react';
import styles from './styles.module.css';

export const Button = ({ children, onClick, className = '' }) => {
  const classes = className
    .split(' ')
    .map(el => styles[el])
    .join(' ');
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

import React from 'react';

import styles from './styles.module.css';

export const Notification = () => {
  return (
    <>
      {state.show && (
        <div className={styles.box}>
          <div className={styles.box__close}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
            </svg>
          </div>
          <h3 className="m-0">{state.title}</h3>
          <p className="mb-0">{state.message}</p>
        </div>
      )}
    </>
  );
};

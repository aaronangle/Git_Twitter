import React, { useEffect } from 'react';

import { Spinner } from 'components/Elements/Spinner';

import useElementOnScreen from 'hooks/useElementOnScreen';

import styles from './styles.module.css';

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};

export const IntersectionObserverContainer = ({ onIntersect, isLoading }) => {
  const [intersectionRef, isVisible] = useElementOnScreen(options);

  useEffect(() => {
    if (isVisible) {
      onIntersect();
    }
  }, [isVisible, onIntersect]);

  return (
    <>
      {isLoading && <Spinner />}
      <div className={styles.observer} ref={intersectionRef}></div>
    </>
  );
};

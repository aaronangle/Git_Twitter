import React, { useEffect, useCallback } from 'react';
import { Spinner } from 'components/Spinner';

import styles from './styles.module.css';
import useElementOnScreen from 'hooks/useElementOnScreen';

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};

export const IntersectionObserverContainer = ({ onIntersect, isLoading }) => {
  const [intersectionRef, isVisible] = useElementOnScreen(options);

  const callIntersect = useCallback(() => {
    onIntersect();
  }, [onIntersect]);

  useEffect(() => {
    if (isVisible) {
      callIntersect();
    }
  }, [isVisible, callIntersect]);

  return (
    <>
      {isLoading && <Spinner />}
      <div className={styles.observer} ref={intersectionRef}></div>
    </>
  );
};

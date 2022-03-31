import React, { useEffect, useRef } from 'react';

import styles from './styles.module.css';

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};

export const IntersectionObserverContainer = ({ onIntersect }) => {
  const intersectionRef = useRef(null);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      onIntersect();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (intersectionRef.current) observer.observe(intersectionRef.current);
    return () => {
      if (intersectionRef.current) observer.unobserve(intersectionRef.current);
    };
  }, [intersectionRef]);

  return (
    <>
      <div className={styles.observer} ref={intersectionRef}></div>
    </>
  );
};

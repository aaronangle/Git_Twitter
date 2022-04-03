import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components/Elements/Button/Button';

import styles from './styles.module.css';

export const Landing = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.side}>
        <img src={require('../../assets/reactlogo.png')} alt="" className={styles['side__logo']} />
      </div>
      <div className={styles.main}>
        <h1 className="mb-0">Welcome to Git_Tweeter</h1>
        <p>
          A Twitter-ish clone for GitHub data &amp; users built by&nbsp;
          <a
            href="https://aaronangle.github.io/Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            me
          </a>
          &nbsp;with React, React-Query, and CSS modules, using GitHub's API
        </p>
        <Link to={'/home'}>
          <Button className={'btn-primary'}>
            <div className={'fc-row'}>
              Continue
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
              </svg>
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
};

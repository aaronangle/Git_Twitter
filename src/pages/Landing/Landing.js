<<<<<<< HEAD
import React, { useState } from "react";
import { Register } from "components/Register";
import { Login } from "components/Login";
export const Landing = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <h1>Join Tweeter Today</h1>
      <button className="button-primary" onClick={() => setShowRegister(true)}>
        Register
      </button>
      <button className="button-primary" onClick={() => setShowLogin(true)}>
        Login
      </button>
      {showLogin && <Login />}
      {showRegister && <Register />}
=======
import React from 'react';
import { Button } from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export const Landing = () => {
  return (
    <div className={styles.logoRow}>
      <div className={styles.side}>
        <img src={require('../../assets/logo192.png')} alt="" className={styles.logo} />
      </div>
      <div className={styles.center}>
        <h1>Welcome to Tweeter</h1>
        <p>
          A Twitter-ish clone for GitHub data &amp; users built by&nbsp;
          <a href="https://aaronangle.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">
            me
          </a>
          &nbsp;with React, Redux, and CSS modules, using GitHub's API
        </p>
        <Link to={'/home'}>
          <Button className={'btn-primary'}>
            <div className={styles.flexRow}>
              Continue
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className={styles.white}>
                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
              </svg>
            </div>
          </Button>
        </Link>
      </div>
>>>>>>> origin/main
    </div>
  );
};

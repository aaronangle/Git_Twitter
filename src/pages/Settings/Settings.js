import React, { useState, useEffect } from 'react';

import { PageContainer } from 'components/PageContainer';
import { PageHeader } from 'components/PageHeader';

import storage from 'utils/storage';
import { joinClassNames } from 'utils/helpers';

import styles from './styles.module.css';

export const Settings = () => {
  const [theme, setTheme] = useState(storage.getTheme() || 'light');

  useEffect(() => {
    console.log(theme);
    if (theme === 'light') {
      document.documentElement.setAttribute('color-mode', 'light');
    } else if (theme === 'hacker') {
      document.documentElement.setAttribute('color-mode', 'hacker');
    } else {
      document.documentElement.setAttribute('color-mode', 'dark');
    }
    storage.setTheme(theme);
  }, [theme]);

  return (
    <>
      <PageContainer>
        <PageHeader>
          <h2>Settings</h2>
        </PageHeader>
        <h3 className="text--center">Select a Theme</h3>
        <div className="fc-row">
          <label htmlFor="light">
            <div className={joinClassNames(styles.box, 'fc-row')}>
              <input type="radio" name="theme" id="light" className={styles.box__radio} onChange={() => setTheme('light')} checked={theme === 'light'} />
              <p className={styles.box__text}>Light</p>
            </div>
          </label>
          <label htmlFor="dark">
            <div className={joinClassNames(styles.box, styles['box--dark'], 'fc-row')}>
              <input type="radio" name="theme" id="dark" className={styles.box__radio} onChange={() => setTheme('dark')} checked={theme === 'dark'} />
              <p className={joinClassNames(styles.box__text, styles['box__text--dark'])}>Dark</p>
            </div>
          </label>
          <label htmlFor="hacker">
            <div className={joinClassNames(styles.box, styles['box--hacker'], 'fc-row')}>
              <input type="radio" name="theme" id="hacker" className={styles.box__radio} onChange={() => setTheme('hacker')} checked={theme === 'hacker'} />
              <p className={joinClassNames(styles.box__text, styles['box__text--hacker'])}>Hacker</p>
            </div>
          </label>
        </div>
      </PageContainer>
    </>
  );
};

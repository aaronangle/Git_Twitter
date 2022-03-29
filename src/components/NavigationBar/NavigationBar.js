import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';
import { joinClassNames } from '../../utils/joinClassNames';

const navigationItems = [
  {
    name: 'Home',
    route: '/home',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className={styles.link__svg}>
        <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path>
      </svg>
    ),
  },
  {
    name: 'Notifications',
    route: '/notifications',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className={styles.link__svg}>
        <path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"></path>
      </svg>
    ),
  },
  {
    name: 'Profile',
    route: '/profile/aaronangle',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className={styles.link__svg}>
        <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
      </svg>
    ),
  },
  {
    name: 'Settings',
    route: '/settings',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className={styles.link__svg}>
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
      </svg>
    ),
  },
];

export const NavigationBar = () => {
  const [selected, setSelected] = useState('Home');

  function isSelected(name) {
    if (name === selected) return styles['link--selected'];
  }

  return (
    <div className={styles['cont']}>
      {navigationItems.map((navItem, index) => {
        return (
          <Link key={index} to={navItem.route} className="text--no-underline text--text-color">
            <div className={joinClassNames(styles.link, isSelected(navItem.name))} onClick={() => setSelected(navItem.name)}>
              {navItem.svg}
              <h3 className={styles['link__text']}>{navItem.name}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

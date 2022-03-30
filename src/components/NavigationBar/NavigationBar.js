import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';
import { joinClassNames } from 'utils/helpers';

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
    name: 'Topics',
    route: '/topics',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M19.875 3H4.125C2.953 3 2 3.897 2 5v14c0 1.103.953 2 2.125 2h15.75C21.047 21 22 20.103 22 19V5c0-1.103-.953-2-2.125-2zm0 16H4.125c-.057 0-.096-.016-.113-.016-.007 0-.011.002-.012.008L3.988 5.046c.007-.01.052-.046.137-.046h15.75c.079.001.122.028.125.008l.012 13.946c-.007.01-.052.046-.137.046z"></path>
        <path d="M6 7h6v6H6zm7 8H6v2h12v-2h-4zm1-4h4v2h-4zm0-4h4v2h-4z"></path>
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

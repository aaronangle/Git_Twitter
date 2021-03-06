import React, { useState } from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

export const UsersSearch = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  function searchUser() {
    navigate(`/profile/${search}`);
  }

  return (
    <div className={styles.cont}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className={styles.cont__svg}>
        <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
      </svg>
      <input
        className={styles.cont__input}
        type="text"
        placeholder="Search GitHub username"
        onKeyUp={(e) => e.key === 'Enter' && searchUser()}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

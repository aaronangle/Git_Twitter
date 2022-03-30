import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from '../Spinner';
import styles from './styles.module.css';

export const WhoToFollow = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const page = Math.floor(Math.random() * 100);
    fetch(`https://api.github.com/search/users?q=""&page=${page}&per_page=5`)
      .then(res => res.json())
      .then(res => {
        setUsers(res.items);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.card}>
      <h3>Who To Follow</h3>
      {loading && <Spinner />}
      {users.map((user, index) => {
        return (
          <Link key={index} to={`/profile/${user.login}`}>
            <div className={styles.row}>
              <img src={user.avatar_url} alt="avatar" className={styles.avatar} />
              <div className={styles.userDetails}>
                <h4>{user.login}</h4>
                <p>@{user.login}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

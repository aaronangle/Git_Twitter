import { Avatar } from 'components/Avatar';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export const WhoToFollow = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const page = Math.floor(Math.random() * 100);
    fetch(`https://api.github.com/search/users?q=""&page=${page}&per_page=5`)
      .then(res => res.json())
      .then(res => {
        setUsers(res.items);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div className={styles.card}>
      <h3 className="ml-1 mt-0 mb-1">Who To Follow</h3>
      {users.map((user, index) => {
        return (
          <Link key={index} to={`/profile/${user.login}`} className="text--no-underline">
            <div className={styles['card__row']}>
              <Avatar img={user.avatar_url} />
              <div className="ml-1">
                <h4 className="m-0 text--text-color">{user.login}</h4>
                <p className="m-0 text--muted">@{user.login}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

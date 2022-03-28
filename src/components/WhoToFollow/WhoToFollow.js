import React, { useEffect, useState } from 'react';
import { Spinner } from '../Spinner';
import styles from './styles.module.css';

export const WhoToFollow = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(res => {
        setUsers(res.results);
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
          <div key={index} className={styles.row}>
            <img src={user.picture.medium} alt="avatar" className={styles.avatar} />
            <div className={styles.userDetails}>
              <h4>
                {user.name.first} {user.name.last}
              </h4>
              <p>@{user.email.split('@')[0]}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';

import { Avatar } from 'components/Elements/Avatar';
import { Spinner } from 'components/Elements/Spinner';

import { useUsers } from './api/getUsers';

import styles from './styles.module.css';

export const WhoToFollow = () => {
  const { isLoading, isError, data, error } = useUsers();

  if (isLoading) return <Spinner />;
  if (isError) return <p>{error.message}</p>;

  return (
    <div className={styles.card}>
      <h3 className="ml-1 mt-0 mb-1">Who To Follow</h3>
      {data.items.map((user, index) => {
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

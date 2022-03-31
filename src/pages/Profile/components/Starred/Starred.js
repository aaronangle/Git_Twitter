import React, { useState, useEffect } from 'react';

import { RowContainer } from 'components/RowContainer';
import { Avatar } from 'components/Avatar';
import { Badge } from '../Badge/Badge';

import { axios } from 'lib/axios';

import styles from './styles.module.css';

export const Starred = ({ username }) => {
  const [starred, setStarred] = useState([]);
  useEffect(() => {
    axios(`/users/${username}/starred`)
      .then((res) => res.json())
      .then((res) => {
        setStarred(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [username]);
  return (
    <>
      {starred.map((repo, index) => {
        return (
          <a key={index} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text--no-underline text--text-color">
            <RowContainer>
              <div className={styles['row__header']}>
                <div className="fc-row">
                  <Avatar img={repo.owner.avatar_url} />
                  <div className="ml-1">
                    <h3 className="mb-0">{repo.name}</h3>
                    <p className="text--muted mt-0">{repo.language}</p>
                  </div>
                </div>
                <div className="fc-row">
                  <Badge count={repo.forks} />
                  <Badge isStars={true} count={repo.stargazers_count} />
                </div>
              </div>
              <p>{repo.description}</p>
              {repo.topics.map((topic) => {
                return (
                  <p key={topic} className={styles['row__topic']}>
                    {topic}
                  </p>
                );
              })}
            </RowContainer>
          </a>
        );
      })}
    </>
  );
};

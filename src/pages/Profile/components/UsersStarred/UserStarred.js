import React from 'react';

import { RowContainer } from 'components/Elements/RowContainer';
import { Avatar } from 'components/Elements/Avatar';
import { Spinner } from 'components/Elements/Spinner';
import { Badge } from '../Badge/Badge';

import { useStarred } from 'pages/Profile/api/getStarred';

import styles from './styles.module.css';

export const UserStarred = ({ username }) => {
  const { isLoading, isError, data, error } = useStarred(username);

  if (isLoading) return <Spinner />;

  if (isError) return <p>{error.message}</p>;

  return (
    <>
      {data.map((repo, index) => {
        return (
          <a
            key={index}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text--no-underline text--text-color"
          >
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
      <h3 className="text--center">No {data.length > 0 && 'More'} Starred Repos</h3>
    </>
  );
};

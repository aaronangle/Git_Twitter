import React from 'react';

import { RowContainer } from 'components/Elements/RowContainer';
import { Spinner } from 'components/Elements/Spinner';
import { Badge } from '../Badge/Badge';

import { useRepos } from 'pages/Profile/api/getRepos';

import styles from './styles.module.css';

export const UserRepos = ({ username }) => {
  const { isLoading, isError, data, error } = useRepos(username);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) return <p>{error.message}</p>;

  return (
    <>
      {data.map((repo, index) => {
        return (
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className={'text--no-underline text--text-color'}
          >
            <RowContainer>
              <div className={styles.row}>
                <h3>{repo.name}</h3>
                <div className="fs-row">
                  <Badge count={repo.forks} />
                  <Badge isStars={true} count={repo.stargazers_count} />
                  {repo.has_issues && <Badge isIssue={true} />}
                </div>
              </div>
            </RowContainer>
          </a>
        );
      })}
      <h3 className="text--center">No {data.length > 0 && 'More'} Repos</h3>
    </>
  );
};

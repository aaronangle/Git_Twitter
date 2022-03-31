import React, { useEffect, useState } from 'react';

import { RowContainer } from 'components/RowContainer';
import { Badge } from '../Badge/Badge';

import { axios } from 'lib/axios';

import styles from './styles.module.css';

export const Repos = ({ username }) => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    axios(`/users/${username}/repos`)
      .then((res) => {
        setRepos(res);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [username]);

  return (
    <>
      {repos.map((repo, index) => {
        return (
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" key={index} className={'text--no-underline text--text-color'}>
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
    </>
  );
};

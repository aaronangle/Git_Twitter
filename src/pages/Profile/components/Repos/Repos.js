import React, { useEffect, useState } from 'react';
import { RowContainer } from 'components/RowContainer';
import styles from './styles.module.css';
import { joinClassNames } from 'utils/helpers';

export const Repos = ({ username }) => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(res => res.json())
      .then(res => {
        setRepos(res);
      })
      .catch(err => {
        console.error(err);
      });
  }, [username]);

  return (
    <>
      {repos.map((repo, index) => {
        return (
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" key={index} className={'text--no-underline text--text-color'}>
            <div className={styles.row}>
              <h3>{repo.name}</h3>
              <div className="fs-row">
                <div className={joinClassNames('fc-row', styles.row__badge)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M5.559 8.855c.166 1.183.789 3.207 3.087 4.079C11 13.829 11 14.534 11 15v.163c-1.44.434-2.5 1.757-2.5 3.337 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337V15c0-.466 0-1.171 2.354-2.065 2.298-.872 2.921-2.896 3.087-4.079C19.912 8.441 21 7.102 21 5.5 21 3.57 19.43 2 17.5 2S14 3.57 14 5.5c0 1.552 1.022 2.855 2.424 3.313-.146.735-.565 1.791-1.778 2.252-1.192.452-2.053.953-2.646 1.536-.593-.583-1.453-1.084-2.646-1.536-1.213-.461-1.633-1.517-1.778-2.252C8.978 8.355 10 7.052 10 5.5 10 3.57 8.43 2 6.5 2S3 3.57 3 5.5c0 1.602 1.088 2.941 2.559 3.355zM17.5 4c.827 0 1.5.673 1.5 1.5S18.327 7 17.5 7 16 6.327 16 5.5 16.673 4 17.5 4zm-4 14.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5.673-1.5 1.5-1.5 1.5.673 1.5 1.5zM6.5 4C7.327 4 8 4.673 8 5.5S7.327 7 6.5 7 5 6.327 5 5.5 5.673 4 6.5 4z"></path>
                  </svg>
                  <p className={styles.badge__text}>
                    Forks <span className={styles.badge__count}>{repo.forks}</span>
                  </p>
                </div>
                <div className={joinClassNames('fc-row', styles.row__badge)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"></path>
                  </svg>
                  <p className={styles.badge__text}>
                    Stars <span className={styles.badge__count}>{repo.stargazers_count}</span>
                  </p>
                </div>
                {repo.has_issues && (
                  <div className={joinClassNames('fc-row', styles.row__badge, styles['row__badge--issues'])}>
                    <p className={styles.badge__text}>Issues</p>
                  </div>
                )}
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
};

import { RowContainer } from 'components/RowContainer';
import React, { useState, useEffect } from 'react';

export const Starred = ({ username }) => {
  const [starred, setStarred] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/starred`)
      .then(res => res.json())
      .then(res => {
        setStarred(res);
      })
      .catch(err => {
        console.error(err);
      });
  }, [username]);
  return (
    <>
      {starred.map((repo, index) => {
        return (
          <RowContainer key={index}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <p>{repo.forks}</p>
            <p>{repo.html_url}</p>
            <p>{repo.language}</p>
            <p>{repo.stargazers_count}</p>
            <p>{repo.topics}</p>
            <p>{repo.created_at}</p>
            <p>{repo.owner.avatar_url}</p>
          </RowContainer>
        );
      })}
    </>
  );
};

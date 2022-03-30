import React, { useEffect, useState } from 'react';

import { PageContainer } from 'components/PageContainer';
import { PageHeader } from 'components/PageHeader';
import { RowContainer } from 'components/RowContainer';
import { TopicSelectionBar } from './components/TopicSelectionBar/TopicSelectionBar';

import styles from './styles.module.css';

export const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const query = encodeURIComponent('javascript OR c# OR ember');
    fetch(`https://api.github.com/search/topics?q=${query}&per_page=20`)
      .then((res) => res.json())
      .then((res) => {
        setTopics(res.items.filter((el) => el.display_name));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <PageContainer>
      <PageHeader>
        <h2>Topics</h2>
      </PageHeader>
      <TopicSelectionBar />
      {topics.map((topic, index) => {
        return (
          <RowContainer key={index}>
            <h3>{topic.display_name}</h3>
            <p>
              <b>Released:</b> {topic.released}
            </p>
            <p>
              <b>Creator:</b> {topic.created_by}
            </p>
            <p className={styles.row__text}>{topic.description}</p>
          </RowContainer>
        );
      })}
    </PageContainer>
  );
};

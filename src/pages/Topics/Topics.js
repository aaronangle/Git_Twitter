import React, { useEffect, useState } from 'react';

import { PageContainer } from 'components/PageContainer';
import { PageHeader } from 'components/PageHeader';
import { RowContainer } from 'components/RowContainer';
import { Spinner } from 'components/Spinner';
import { TopicSelectionBar } from './components/TopicSelectionBar/TopicSelectionBar';

import { axios } from 'lib/axios';

import styles from './styles.module.css';

export const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState(['JavaScript']);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const query = encodeURIComponent(selectedTopics.join(' OR '));
    axios(`/search/topics?q=${query}&per_page=20`).then((res) => {
      setTopics(res.items.filter((el) => el.display_name));
      setIsLoading(false);
    });
  }, [selectedTopics]);

  return (
    <PageContainer>
      <PageHeader>
        <div className="fs-row">
          <h2 className="mr-1">Topics</h2>
          <p className="text--muted">Select up to 5 topics</p>
        </div>
      </PageHeader>
      <TopicSelectionBar selectedTopics={selectedTopics} setSelectedTopics={setSelectedTopics} />
      {isLoading && <Spinner />}
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

import React, { useEffect, useState, useCallback } from 'react';

import { PageContainer } from 'components/Layouts/PageContainer';
import { PageHeader } from 'components/Layouts/PageHeader';
import { RowContainer } from 'components/Elements/RowContainer';
import { IntersectionObserverContainer } from 'components/Functional/IntersectionObserverContainer';
import { TopicSelectionBar } from './components/TopicSelectionBar/TopicSelectionBar';
import { Spinner } from 'components/Elements/Spinner';

import { useTopics } from './api/getTopics';

import styles from './styles.module.css';

export const Topics = () => {
  const [selectedTopics, setSelectedTopics] = useState(['JavaScript']);
  const [pageCount, setPageCount] = useState(2);

  const query = encodeURIComponent(selectedTopics.join(' OR '));
  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useTopics(
    pageCount,
    query
  );

  useEffect(() => {
    setPageCount(2);
  }, [selectedTopics]);

  const onIntersect = useCallback(() => {
    fetchNextPage();
    setPageCount((c) => c + 1);
  }, [fetchNextPage]);

  return (
    <PageContainer>
      <PageHeader>
        <div className="fs-row">
          <h2 className="mr-1">Topics</h2>
          <p className="text--muted">Select up to 5 topics</p>
        </div>
      </PageHeader>
      <TopicSelectionBar selectedTopics={selectedTopics} setSelectedTopics={setSelectedTopics} />
      {status === 'loading' ? (
        <Spinner />
      ) : status === 'error' ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
          {data.pages.map((topics) => {
            return topics.map((topic, index) => {
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
            });
          })}
          {hasNextPage && !isFetchingNextPage && (
            <IntersectionObserverContainer
              onIntersect={onIntersect}
              isLoading={isFetchingNextPage}
            />
          )}
          {!isFetchingNextPage && !hasNextPage && (
            <h3 className="text--center">No {data.pages.length > 0 && 'More'} Topics</h3>
          )}
        </>
      )}
    </PageContainer>
  );
};

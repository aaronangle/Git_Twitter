import React from 'react';

import { joinClassNames } from 'utils/helpers';

import styles from './styles.module.css';

const topics = ['JavaScript', 'React', 'Redux', 'C#', 'C++', 'C', 'Java', 'HTML', 'CSS', 'Go', 'Python', 'Node', 'SQL', 'MongoDB', 'TypeScript', 'Vue', 'Angular', 'Rust'];

export const TopicSelectionBar = ({ selectedTopics, setSelectedTopics }) => {
  function handleClick(topic) {
    if (selectedTopics.includes(topic) && selectedTopics.length > 1) {
      setSelectedTopics(selectedTopics.filter(el => el !== topic));
    } else if (selectedTopics.length <= 4) {
      setSelectedTopics([...selectedTopics, topic]);
    }
  }

  return (
    <div className={styles.cont}>
      {topics.map(topic => {
        return (
          <div key={topic} className={joinClassNames(styles.box, selectedTopics.includes(topic) && styles['box--selected'])} onClick={() => handleClick(topic)}>
            <p className={styles['box__text']}>{topic}</p>
          </div>
        );
      })}
    </div>
  );
};

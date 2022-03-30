import React from 'react';
import styles from './styles.module.css';

const topics = ['JavaScript', 'C#', 'C++', 'C', 'Java', 'React', 'HTML', 'CSS', 'Go', 'Python', 'Node', 'SQL', 'MongoDB', 'TypeScript', 'Vue', 'Angular', 'SCSS'];
export const TopicSelectionBar = () => {
  return (
    <div className={styles.cont}>
      {topics.map(topic => {
        return (
          <div className={styles.box}>
            <p className={styles['box__text']}>{topic}</p>
          </div>
        );
      })}
    </div>
  );
};

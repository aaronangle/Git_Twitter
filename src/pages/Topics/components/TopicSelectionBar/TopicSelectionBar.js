import React, { useRef } from 'react';

import { joinClassNames } from 'utils';

import styles from './styles.module.css';

const topics = [
  'JavaScript',
  'React',
  'Redux',
  'C#',
  'C++',
  'C',
  'Java',
  'HTML',
  'CSS',
  'Go',
  'Python',
  'Node',
  'SQL',
  'MongoDB',
  'TypeScript',
  'Vue',
  'Angular',
  'Rust',
  'Ruby',
  'Kotlin',
  'Swift',
];

export const TopicSelectionBar = ({ selectedTopics, setSelectedTopics }) => {
  const scrollRef = useRef(null);

  function handleClick(topic) {
    if (selectedTopics.includes(topic) && selectedTopics.length > 1) {
      setSelectedTopics(selectedTopics.filter((el) => el !== topic));
    } else if (selectedTopics.length <= 4) {
      setSelectedTopics([...selectedTopics, topic]);
    }
  }

  function scroll(scrollRight) {
    if (scrollRight) {
      scrollRef.current.scrollLeft -= scrollRef.current.clientWidth;
    } else {
      scrollRef.current.scrollLeft += scrollRef.current.clientWidth;
    }
  }

  return (
    <>
      <div className={joinClassNames(styles.arrows, 'fc-row')}>
        <div
          className={joinClassNames(styles.arrows__arrow, styles['arrow--left'], 'fc-row', 'hover')}
          onClick={() => scroll(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
          </svg>
        </div>
        <div
          className={joinClassNames(
            styles.arrows__arrow,
            styles['arrow--right'],
            'fc-row',
            'hover'
          )}
          onClick={() => scroll(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
          </svg>
        </div>
      </div>
      <div className={styles.cont} ref={scrollRef}>
        {topics.map((topic) => {
          return (
            <div
              key={topic}
              className={joinClassNames(
                styles.box,
                selectedTopics.includes(topic) && styles['box--selected']
              )}
              onClick={() => handleClick(topic)}
            >
              <p className={styles['box__text']}>{topic}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

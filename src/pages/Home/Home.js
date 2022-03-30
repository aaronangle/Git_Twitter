import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Row } from '../../components/Row/Row';

import styles from './styles.module.css';

export const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/events?page=1`)
      .then(res => res.json())
      .then(res => {
        setEvents(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className={styles.cont}>
        {/* change the user search to fixed */}
        <div className={styles.cont__header}>
          <h2 className="ml-1 mr-1">Latest Events</h2>
          <p className="muted">Keep scrolling to check out the lazy loading</p>
        </div>
        {events.map(event => {
          return (
            <Link to={'/profile/' + event.actor.login} key={event.id} className="text--no-underline text--text-color">
              <Row>
                <img className={styles.row__avatar} src={event.actor.avatar_url} alt="avatar" />
                <h4 className="">@{event.actor.login}</h4>
                <div className=""></div>
                <div className="">{new Date(event.created_at).toLocaleString([], { month: 'short', day: 'numeric', hour12: true, hour: '2-digit', minute: '2-digit' })}</div>
                <div className="">
                  {event.type} - {event.repo.name}
                </div>
              </Row>
            </Link>
          );
        })}
      </div>
    </>
  );
};

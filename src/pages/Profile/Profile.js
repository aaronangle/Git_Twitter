import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserInfo } from './components/UserInfo/UserInfo';
import { UserEvents } from './components/UserEvents/UserEvents';
import { UserNotFound } from './components/UserNotFound/UserNotFound';

export const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [events, setEvents] = useState([]);

  useEffect(async () => {
    Promise.all([fetch(`https://api.github.com/users/${username}`), fetch(`https://api.github.com/users/${username}/events`)])
      .then(async res => Promise.all(res.map(r => r.json())))
      .then(res => {
        setUser(res[0]);
        setEvents(res[1]);
      })
      .catch(err => {
        console.log(err);
      });
  }, [username]);

  if (!user.login) {
    return <UserNotFound username={username} />;
  }
  return (
    <>
      <UserInfo user={user} />
      <UserEvents events={events} />
    </>
  );
};

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserInfo } from './components/UserInfo/UserInfo';
import { UserEvents } from './components/UserEvents/UserEvents';
import { UserNotFound } from './components/UserNotFound/UserNotFound';
import { SelectBar } from './components/SelectBar/SelectBar';
import { Repos } from './components/Repos/Repos';
import { Starred } from './components/Starred/Starred';

export const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [events, setEvents] = useState([]);
  const [selectedView, setSelectedView] = useState('events');

  useEffect(() => {
    Promise.all([fetch(`https://api.github.com/users/${username}`), fetch(`https://api.github.com/users/${username}/events`)])
      .then(async res => Promise.all(res.map(r => r.json())))
      .then(res => {
        setUser(res[0]);
        setEvents(res[1]);
      })
      .catch(err => {
        console.error(err);
      });
  }, [username]);

  if (!user.login) {
    return <UserNotFound username={username} />;
  }

  return (
    <>
      <UserInfo user={user}>
        <SelectBar selectedView={selectedView} setSelectedView={setSelectedView} />
      </UserInfo>
      {selectedView === 'events' && <UserEvents events={events} />}
      {selectedView === 'repos' && <Repos username={username} />}
      {selectedView === 'starred' && <Starred username={username} />}
    </>
  );
};

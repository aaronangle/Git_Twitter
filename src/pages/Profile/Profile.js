import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { UserInfo } from './components/UserInfo/UserInfo';
import { UserEvents } from './components/UserEvents/UserEvents';
import { UserNotFound } from './components/UserNotFound/UserNotFound';
import { SelectBar } from './components/SelectBar/SelectBar';
import { Repos } from './components/Repos/Repos';
import { Starred } from './components/Starred/Starred';
import { Spinner } from 'components/Spinner';

import { axios } from 'lib/axios';

export const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [selectedView, setSelectedView] = useState('events');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios(`/users/${username}`).then((res) => {
      setUser(res);
      setIsLoading(false);
    });
  }, [username]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!user.login) {
    return <UserNotFound username={username} />;
  }

  return (
    <>
      <UserInfo user={user}>
        <SelectBar selectedView={selectedView} setSelectedView={setSelectedView} />
      </UserInfo>
      {selectedView === 'events' && <UserEvents username={username} />}
      {selectedView === 'repos' && <Repos username={username} />}
      {selectedView === 'starred' && <Starred username={username} />}
    </>
  );
};

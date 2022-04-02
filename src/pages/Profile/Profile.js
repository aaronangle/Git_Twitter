import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { UserInfo } from './components/UserInfo/UserInfo';
import { UserEvents } from './components/UserEvents/UserEvents';
import { UserNotFound } from './components/UserNotFound/UserNotFound';
import { SelectBar } from './components/SelectBar/SelectBar';
import { Repos } from './components/Repos/Repos';
import { Starred } from './components/Starred/Starred';
import { Spinner } from 'components/Elements/Spinner';

import { useUser } from './api/getUser';

export const Profile = () => {
  const { username } = useParams();
  const [selectedView, setSelectedView] = useState('events');

  const { isLoading, isError, data, error } = useUser(username);

  if (isLoading) return <Spinner />;

  if (isError) return <p>{error.message}</p>;

  if (!data.login) {
    return <UserNotFound username={username} />;
  }

  return (
    <>
      <UserInfo user={data}>
        <SelectBar selectedView={selectedView} setSelectedView={setSelectedView} />
      </UserInfo>
      {selectedView === 'events' && <UserEvents username={username} />}
      {selectedView === 'repos' && <Repos username={username} />}
      {selectedView === 'starred' && <Starred username={username} />}
    </>
  );
};

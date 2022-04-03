import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { UserInfo } from './components/UserInfo/UserInfo';
import { UserEvents } from './components/UserEvents/UserEvents';
import { UserNotFound } from './components/UserNotFound/UserNotFound';
import { SelectBar } from './components/SelectBar/SelectBar';
import { UserRepos } from './components/UserRepos/UserRepos';
import { UserStarred } from './components/UsersStarred/UserStarred';
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
      {selectedView === 'repos' && <UserRepos username={username} />}
      {selectedView === 'starred' && <UserStarred username={username} />}
    </>
  );
};

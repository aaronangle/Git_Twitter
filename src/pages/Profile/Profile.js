import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserInfo } from './components/UserInfo';

export const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(res => {
        setUser(res);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <UserInfo user={user} />
    </>
  );
};

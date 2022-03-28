import React from 'react';
import { WhoToFollow } from '../../components/WhoToFollow';
import { NavigationBar } from '../../components/NavigationBar';

export const Home = () => {
  return (
    <>
      <NavigationBar />
      <WhoToFollow />
    </>
  );
};

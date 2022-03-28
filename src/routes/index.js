import { useRoutes } from 'react-router-dom';

import { Landing } from '../pages/Landing';
import { Home } from '../pages/Home';
import { Notifications } from '../pages/Notifications';
import { Profile } from '../pages/Profile';
import { Settings } from '../pages/Settings';

export const AppRoutes = () => {
  const element = useRoutes([
    { path: '/', element: <Landing /> },
    { path: '/home', element: <Home /> },
    { path: '/notifications', element: <Notifications /> },
    { path: '/profile', element: <Profile /> },
    { path: '/Settings', element: <Settings /> },
  ]);
  return <>{element}</>;
};

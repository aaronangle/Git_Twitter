import { useRoutes, Outlet } from 'react-router-dom';

import { Landing } from '../pages/Landing';
import { Home } from '../pages/Home';
import { Notifications } from '../pages/Notifications';
import { Profile } from '../pages/Profile';
import { Settings } from '../pages/Settings';

import { MainLayout } from '../components/Layout';

const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export const AppRoutes = () => {
  const element = useRoutes([
    { path: '/', element: <Landing /> },
    {
      path: '/',
      element: <App />,
      children: [
        { path: '/home', element: <Home /> },
        { path: '/notifications', element: <Notifications /> },
        { path: '/profile', element: <Profile /> },
        { path: '/Settings', element: <Settings /> },
      ],
    },
  ]);
  return <>{element}</>;
};

import { lazy } from 'react';
import { useRoutes, Outlet } from 'react-router-dom';

import { Landing } from '../pages/Landing';

import { MainLayout } from '../components/Layouts/Layout';

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
        { path: '/home', element: lazy(() => import('../pages/Home')) },
        { path: '/topics', element: lazy(() => import('../pages/Topics')) },
        { path: '/profile/:username', element: lazy(() => import('../pages/Profile')) },
        { path: '/settings', element: lazy(() => import('../pages/Settings')) },
      ],
    },
  ]);
  return <>{element}</>;
};

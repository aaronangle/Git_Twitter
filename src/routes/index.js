import { useRoutes, Outlet } from 'react-router-dom';

import { Landing } from '../pages/Landing';
import { Home } from '../pages/Home';
import { Topics } from '../pages/Topics';
import { Profile } from '../pages/Profile';
import { Settings } from '../pages/Settings';

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
        { path: '/home', element: <Home /> },
        { path: '/topics', element: <Topics /> },
        { path: '/profile/:username', element: <Profile /> },
        { path: '/settings', element: <Settings /> },
      ],
    },
  ]);
  return <>{element}</>;
};

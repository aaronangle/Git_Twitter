import { useRoutes } from "react-router-dom";

import { Landing } from "pages/Landing";

export const AppRoutes = () => {
  const commonRoutes = [{ path: "/", element: <Landing /> }];
  const element = useRoutes([...commonRoutes]);
  return <>{element}</>;
};

import { ProgressContext } from '@/common/context/progress-context';
import { ErrorElement } from '@/components/error-element';
import { PageLoader } from '@/components/loaders';
import React, { Suspense } from 'react';
import {
  Outlet,
  ScrollRestoration,
  createBrowserRouter,
  useLocation,
} from 'react-router-dom';
import TopBarProgress from 'react-topbar-progress-indicator';
import NotFound from '../components/notFound';
import { PrivateRoute, privateRouteLoader } from './private.base';
import { privateRoutes } from './private.router';
import { PublicRoute, publicRouteLoader } from './public.base';
import { publicRoutes } from './public.router';

// TODO: Update top bar progress color
TopBarProgress.config({
  barColors: {
    '1.0': '#00a8cc',
  },
  barThickness: 2,
  shadowBlur: 2,
});

function RouterLayout() {
  const location = useLocation();

  const [loading, setLoading] = React.useState(false);

  const start = React.useCallback(() => {
    setLoading(true);
  }, []);

  const stop = React.useCallback(() => {
    setLoading(false);
  }, []);

  React.useEffect(() => {
    stop();
  }, [location.pathname, location.search, location.hash, stop]);

  return (
    <ProgressContext.Provider value={{ start, stop }}>
      {loading && <TopBarProgress />}
      <Suspense fallback={<PageLoader />}>
        <ScrollRestoration />
        <Outlet />
      </Suspense>{' '}
    </ProgressContext.Provider>
  );
}

export const router = createBrowserRouter([
  {
    element: <RouterLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        element: <PublicRoute />,
        loader: publicRouteLoader,
        children: publicRoutes.map((route) => {
          const Comp = route.component;

          return {
            path: route.path,
            element: <Comp />,
          };
        }),
      },

      {
        element: <PrivateRoute />,
        loader: privateRouteLoader,
        children: [
          ...privateRoutes.map((route) => {
            const Comp = route.component;

            return {
              path: route.path,
              element: <Comp />,
            };
          }),

          {
            path: '*',
            element: <NotFound />,
          },
        ],
      },
    ],
  },
]);

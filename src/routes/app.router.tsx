import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from '../components/loaders';
import NotFound from '../components/notFound';
import { PrivateRoute } from './private/private.base';
import { privateRoutes } from './private/private.router';
import { PublicRoute } from './public/public.base';
import { publicRoutes } from './public/public.router';

export default function AppRouter() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PublicRoute />}>
          {publicRoutes.map((route) => {
            const Comp = route.component;
            return (
              <Route key={route.name} path={route.path} element={<Comp />} />
            );
          })}
        </Route>

        <Route element={<PrivateRoute />}>
          {privateRoutes.map((route) => {
            const Comp = route.component;
            return (
              <Route key={route.name} path={route.path} element={<Comp />} />
            );
          })}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

import { CookieKeys, RoutesConst } from '@/common/constants/constants';
import BaseLayout from '@/components/layouts/base';
import cookie from 'js-cookie';
import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // // Clear sessionStorage on page reload only
    const handleBeforeUnload = () => {
      sessionStorage.setItem(CookieKeys.VISITED, 'true');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const authToken = cookie.get(CookieKeys.AUTH_TOKEN);

  if (!authToken) {
    sessionStorage.setItem(CookieKeys.REDIRECT_ROUTE, pathname);
    return <Navigate to={RoutesConst.LOGIN} />;
  }

  return <BaseLayout />;
};

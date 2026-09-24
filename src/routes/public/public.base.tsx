import { CookieKeys, RoutesConst } from '@/common/constants/constants';
import cookie from 'js-cookie';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {
  const authToken = cookie.get(CookieKeys.AUTH_TOKEN);

  if (authToken) {
    return <Navigate to={RoutesConst.POSTS} />;
  }

  return <Outlet />;
};

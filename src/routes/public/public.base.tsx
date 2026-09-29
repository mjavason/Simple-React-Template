import cookie from 'js-cookie';
import { Navigate, Outlet } from 'react-router-dom';
import { CookieKeys } from '@/common/constants/keys.constants';
import { RoutesConst } from '@/common/constants/routes.constant';

export const PublicRoute = () => {
  const authToken = cookie.get(CookieKeys.AUTH_TOKEN);

  if (authToken) {
    return <Navigate to={RoutesConst.POSTS} />;
  }

  return <Outlet />;
};

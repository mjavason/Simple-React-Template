import cookie from 'js-cookie';
import { Outlet, redirect } from 'react-router-dom';
import { CookieKeys } from '@/common/constants/keys.constants';
import { RoutesConst } from '@/common/constants/routes.constant';

export function publicRouteLoader() {
  const authToken = cookie.get(CookieKeys.AUTH_TOKEN);

  if (authToken) {
    return redirect(RoutesConst.POSTS);
  }

  return null;
}

export const PublicRoute = () => {
  return <Outlet />;
};

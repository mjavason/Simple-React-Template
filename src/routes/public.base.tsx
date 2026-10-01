import { CookieKeys } from '@/common/constants/keys.constants';
import { RoutesConst } from '@/common/constants/routes.constant';
import { getCookie } from '@/helpers/cookie.helper';
import { Outlet, redirect } from 'react-router-dom';

export function publicRouteLoader() {
  const authToken = getCookie(CookieKeys.AUTH_TOKEN);

  if (authToken) {
    return redirect(RoutesConst.POSTS);
  }

  return null;
}

export const PublicRoute = () => {
  return <Outlet />;
};

import { Outlet, redirect } from 'react-router-dom';
import { CookieKeys } from '@/common/constants/keys.constants';
import { RoutesConst } from '@/common/constants/routes.constant';
import { getCookie } from '@/helpers/cookie.helper';

export function privateRouteLoader() {
  const authToken = getCookie(CookieKeys.AUTH_TOKEN);

  if (!authToken) {
    return redirect(RoutesConst.LOGIN);
  }

  return null;
}

export const PrivateRoute = () => {
  return <Outlet />;
};

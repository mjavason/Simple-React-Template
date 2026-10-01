import cookie from 'js-cookie';
import { Outlet, redirect } from 'react-router-dom';
import { CookieKeys } from '@/common/constants/keys.constants';
import { RoutesConst } from '@/common/constants/routes.constant';

export function privateRouteLoader() {
  const authToken = cookie.get(CookieKeys.AUTH_TOKEN);

  if (!authToken) {
    return redirect(RoutesConst.LOGIN);
  }

  return null;
}

export const PrivateRoute = () => {
  return <Outlet />;
};

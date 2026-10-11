import { CookieKeys } from '@/common/constants/keys.constants';
import { RoutesConst } from '@/common/constants/routes.constant';
import { getCookie } from '@/helpers/cookie.helper';
import { toast } from 'react-hot-toast';
import { Outlet, redirect } from 'react-router-dom';

export function privateRouteLoader() {
  const authToken = getCookie(CookieKeys.AUTH_TOKEN);

  if (!authToken) {
    toast.error('Please login', { duration: 1500 });
    return redirect(RoutesConst.LOGIN);
  }

  return null;
}

export const PrivateRoute = () => {
  return <Outlet />;
};

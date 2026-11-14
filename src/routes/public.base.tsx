import { CookieKeys } from '@/common/constants/keys.constants';
import { RoutesConst } from '@/common/constants/routes.constant';
import { getCookie } from '@/helpers/cookie.helper';
import { Outlet, redirect } from 'react-router-dom';

export function publicRouteLoader() {
  const authToken = getCookie(CookieKeys.AUTH_TOKEN);

  if (authToken) {
    // We're using events here because route loaders cannot access our global context
    setTimeout(() => {
      window.dispatchEvent(new Event('stop-progress'));
    }, 0);
    return redirect(RoutesConst.POSTS);
  }

  return null;
}

export const PublicRoute = () => {
  return <Outlet />;
};

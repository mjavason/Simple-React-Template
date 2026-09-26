import Cookie from 'js-cookie';
import { LoginResData } from '../pages/login';
import { CookieKeys } from './constants';

export const clearStorage = () => {
  Cookie.remove(CookieKeys.TOKEN);
  Cookie.remove(CookieKeys.USER);
  Cookie.remove(CookieKeys.REDIRECT_ROUTE);
  localStorage.clear();
  // sessionStorage.clear();
};

export const getAuthToken = () => Cookie.get(CookieKeys.TOKEN);

export const setAuthToken = (token: string) =>
  Cookie.set(CookieKeys.TOKEN, token);

export const getAuthUserData = () => {
  const res = localStorage.getItem(CookieKeys.USER);
  if (res) {
    return JSON.parse(res) as LoginResData;
  } else {
    return null;
  }
};
export const setAuthUserData = (data: LoginResData) =>
  localStorage.setItem(CookieKeys.USER, JSON.stringify(data));

export const setRedirectRoute = (pathname: string) =>
  sessionStorage.setItem(CookieKeys.REDIRECT_ROUTE, pathname);

export const getRedirectRoute = () => {
  const val = sessionStorage.getItem(CookieKeys.REDIRECT_ROUTE);

  return val;
};

export type GwaThemeType = 'eco' | 'tv' | 'spotlight' | 'gwh';

export const getGwaTheme = () => {
  return (Cookie.get(CookieKeys.THEME) as GwaThemeType) || 'eco';
};

export const setGwaTheme = (theme: GwaThemeType) =>
  Cookie.set(CookieKeys.THEME, theme);

import type { LinkProps } from '@tanstack/react-router';

type RoutePath = LinkProps['to'];
export const Routes: Record<string, RoutePath> = {
  HOME: '/',
  LOGIN: '/login',
  ABOUT: '/about',
  POSTS: '/posts',
};

export const API_BASE_URL = 'https://fpl-ultimate-team-pv6i.onrender.com';

export enum CookieKeys {
  AUTH_TOKEN = 'auth_token',
}

export enum ApiMethods {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export const RoutesConst = {
  HOME: '/',
  LOGIN: '/login',
  ABOUT: '/about',
  POSTS: '/posts',
  POST_CONTENT: (param?: string) => `/posts/${param ?? ':uuid'}`,
  SEARCH: '/posts/search/search',
};

export const API_BASE_URL = 'https://fpl-ultimate-team-pv6i.onrender.com';

export enum CookieKeys {
  VISITED = 'visited',
  AUTH_TOKEN = 'auth_token',
  REDIRECT_ROUTE = 'srt_redirect_route',
}

export enum ApiMethods {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export const HeaderTailwindClasses =
  'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight';

export const SubHeaderTailwindClasses =
  'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight';

export const ParagraphTailwindClasses =
  'text-sm sm:text-base md:text-md lg:text-lg leading-tight';

export const ButtonTailwindClasses =
  'text-sm sm:text-base lg:text-lg px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-lg';

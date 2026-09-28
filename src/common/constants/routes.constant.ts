export const RoutesConst = {
  HOME: '/',
  LOGIN: '/login',
  ABOUT: '/about',
  POSTS: '/posts',
  POST_CONTENT: (param?: string) => `/posts/${param ?? ':uuid'}`,
  SEARCH: '/posts/search/search',
};

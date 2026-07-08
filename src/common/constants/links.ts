import type { LinkProps } from '@tanstack/react-router'

type RoutePath = LinkProps['to']

export const Routes: { route: RoutePath; label: string }[] = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Login',
    route: '/login',
  },
  {
    label: 'About',
    route: '/about',
  },
  {
    label: 'Posts',
    route: '/posts/$postId',
  },
  {
    label: 'Post Detail',
    route: '/posts/$postId',
  },
]

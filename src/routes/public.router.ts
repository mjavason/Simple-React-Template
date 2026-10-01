import { lazy } from 'react';
import { RoutesConst } from '@/common/constants/routes.constant';

const HomePage = lazy(() => import('@/routes/public/home.page'));
const LoginPage = lazy(() => import('@/routes/public/auth/login.page'));
const AboutPage = lazy(() => import('@/routes/public/about.page'));
const SearchDemoPage = lazy(() => import('@/routes/public/search.page'));
const SandBoxPage = lazy(() => import('@/routes/public/sandbox.page'));

export const publicRoutes = [
  { name: 'Home', path: '/', component: HomePage },
  {
    name: 'Login',
    path: RoutesConst.LOGIN,
    component: LoginPage,
  },
  {
    name: 'About Page',
    path: RoutesConst.ABOUT,
    component: AboutPage,
  },
  {
    name: 'Search Demo Page',
    path: RoutesConst.SEARCH,
    component: SearchDemoPage,
  },
  {
    name: 'Sandbox Page',
    path: RoutesConst.SANDBOX,
    component: SandBoxPage,
  },
];

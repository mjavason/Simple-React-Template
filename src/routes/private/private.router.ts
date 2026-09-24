import { RoutesConst } from '@/common/constants/constants';
import { lazy } from 'react';

const PostsPage = lazy(() => import('@/routes/private/posts/posts.page'));
const PostContentPage = lazy(
  () => import('@/routes/private/posts/post-content.page'),
);

export const privateRoutes = [
  {
    name: 'Posts Page',
    path: RoutesConst.POSTS,
    component: PostsPage,
  },
  {
    name: 'Post Content Page',
    path: RoutesConst.POST_CONTENT(),
    component: PostContentPage,
  },
];

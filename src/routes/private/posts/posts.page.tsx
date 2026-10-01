import { Link } from 'react-router-dom';
import { CookieKeys } from '@/common/constants/keys.constants';
import { RoutesConst } from '@/common/constants/routes.constant';
import PageContainer from '@/components/page-container';
import { Button } from '@/components/ui/button';
import { useAppNavigate } from '@/hooks/use-app-navigate.hook';

export default function PostsPage() {
  const navigate = useAppNavigate();

  return (
    <PageContainer>
      <div>
        <div className="text-center">
          <h1>Posts</h1>
        </div>

        <ul>
          {[1, 2, 3].map((postId) => (
            <li key={postId} className="mb-2">
              <Link to={RoutesConst.POST_CONTENT(postId.toString())}>
                Post {postId}
              </Link>
            </li>
          ))}
        </ul>

        <Button
          variant={'destructive'}
          onClick={() => {
            cookieStore.delete(CookieKeys.AUTH_TOKEN);
            navigate(RoutesConst.HOME);
          }}
        >
          Logout
        </Button>
      </div>
    </PageContainer>
  );
}

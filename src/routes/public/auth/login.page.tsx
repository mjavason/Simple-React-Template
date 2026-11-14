import { CookieKeys } from '@/common/constants/keys.constants';
import { RoutesConst } from '@/common/constants/routes.constant';
import PageContainer from '@/components/page-container';
import { Button } from '@/components/ui/button';
import { setCookie } from '@/helpers/cookie.helper';
import { useAppNavigate } from '@/hooks/use-app-navigate.hook';

export default function LoginPage() {
  const navigate = useAppNavigate();

  return (
    <PageContainer>
      <div className="text-center">
        <h1>Login Page</h1>
        <Button
          variant={'default'}
          className={'bg-accent w-50'}
          onClick={() => {
            setCookie(CookieKeys.AUTH_TOKEN, 'test-auth-token');
            navigate(RoutesConst.POSTS);
          }}
        >
          Login
        </Button>
      </div>
    </PageContainer>
  );
}

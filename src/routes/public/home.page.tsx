import { toast } from 'react-hot-toast';
import { CookieKeys } from '@/common/constants/keys.constants';
import { RoutesConst } from '@/common/constants/routes.constant';
import { SkeletonLoader } from '@/components/loaders';
import PageContainer from '@/components/page-container';
import { Button } from '@/components/ui/button';
import { setCookie } from '@/helpers/cookie.helper';
import { useAppNavigate } from '@/hooks/use-app-navigate.hook';

function HomePage() {
  const navigate = useAppNavigate();

  return (
    <PageContainer>
      <div className="flex flex-col gap-8">
        <div>Hello</div>

        <Button
          variant={'default'}
          onClick={() => {
            toast.success('Hello world');
          }}
          className={'max-w-50'}
        >
          Show Toast
        </Button>

        <div className="flex items-center gap-4">
          <SkeletonLoader className={'h-25 w-25 rounded-full'} />
          <SkeletonLoader className="h-25 w-full" />
        </div>

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

        <div>
          <p className="sm:hidden">base</p>
          <p className="md:hidden">sm</p>
          <p className="lg:hidden">md</p>
          <p className="xl:hidden">lg</p>
          <p className="2xl:hidden">xl</p>
        </div>
      </div>
    </PageContainer>
  );
}

export default HomePage;

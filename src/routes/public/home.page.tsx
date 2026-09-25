import { SkeletonLoader } from '@/components/loaders';
import PageContainer from '@/components/PageContainer';
import { Button } from '@/components/ui/button';
import { toast } from 'react-hot-toast';

function HomePage() {
  return (
    <PageContainer title="Home">
      <div className="flex flex-col gap-8">
        <div>Hello</div>

        <Button
          variant={'default'}
          onClick={() => {
            toast.success('Hello world');
          }}
          className={'max-w-50'}
        >
          Click Me
        </Button>

        <div className="flex gap-4">
          <SkeletonLoader className={'w-25 h-25 rounded-full'} />
          <SkeletonLoader className="w-full h-25" />
        </div>

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

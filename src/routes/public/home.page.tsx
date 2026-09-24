import { SkeletonLoader } from '@/components/loaders';
import PageContainer from '@/components/PageContainer';
import { toast } from 'react-hot-toast';

function HomePage() {
  return (
    <PageContainer title="Home">
      <div className="flex flex-col gap-8">
        <div>Hello</div>
        <button
          className="bg-blue border-b-2"
          onClick={() => {
            toast.success('Hello world');
          }}
        >
          Toast Me!
        </button>

        <div className="flex gap-4">
          <SkeletonLoader
            width={{
              base: '100px',
            }}
            height={{
              base: '100px',
            }}
            isRound={true}
          />
          <SkeletonLoader
            width={{
              base: '210px',
              sm: '490px',
              md: '610px',
              lg: '870px',
              xl: '1120px'
            }}
            height={{
              base: '100px',
            }}
            isRound={false}
          />
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

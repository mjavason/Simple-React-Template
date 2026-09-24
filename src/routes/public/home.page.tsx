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

        <SkeletonLoader width="100%" height="10vh" />

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

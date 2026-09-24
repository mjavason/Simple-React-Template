import PageContainer from '@/components/PageContainer';
import { toast } from 'react-hot-toast';

function HomePage() {
  return (
    <PageContainer title="Home">
      <div>Hello</div>
      <button
        className="bg-blue border-b-2"
        onClick={() => {
          toast.success('Hello world');
        }}
      >
        Toast Me!
      </button>
    </PageContainer>
  );
}

export default HomePage;

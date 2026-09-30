import { useSearchParams } from 'react-router-dom';
import PageContainer from '@/components/page-container';

export default function SearchDemoPage() {
  const [SearchParams] = useSearchParams();
  const searchQuery = SearchParams.get('search');

  return (
    <PageContainer>
      <div>
        <strong>'search' query:</strong> {searchQuery}
      </div>
    </PageContainer>
  );
}

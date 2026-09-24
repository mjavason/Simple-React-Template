import PageContainer from '@/components/PageContainer';
import { useSearchParams } from 'react-router-dom';

export default function SearchDemoPage() {
  const [SearchParams] = useSearchParams();
  const searchQuery = SearchParams.get('search');

  return (
    <PageContainer title={'Search Params'}>
      <div>
        <strong>Search param:</strong> {searchQuery}
      </div>
    </PageContainer>
  );
}

import PageContainer from '@/components/PageContainer';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/posts_/$postId')({
  component: RouteComponent,
});

function RouteComponent() {
  const params = Route.useParams();

  return (
    <PageContainer>
      <h1 className="text-center text-9xl">Post {params.postId}</h1>
    </PageContainer>
  );
}

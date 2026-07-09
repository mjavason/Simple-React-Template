import PageContainer from '@/components/PageContainer';
import { WelcomeSteps } from '@/components/tutorial/steps';
import Tutorial from '@/components/tutorial/Tutorial';
import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/posts')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageContainer title={'Posts'}>
      <Tutorial isOpen={true} steps={WelcomeSteps} />
      <div>
        <div className="text-center">
          <h1>Posts</h1>
        </div>

        <ul>
          {[1, 2, 3].map((postId) => (
            <li key={postId} className="mb-2">
              <Link to="/posts/$postId" params={{ postId: String(postId) }}>
                Post {postId}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </PageContainer>
  );
}

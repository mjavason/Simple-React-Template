import PageContainer from '@/components/PageContainer';
import { Link } from 'react-router-dom';

export default function PostsPage() {
  return (
    <PageContainer title={'Posts'}>
      <div>
        <div className="text-center">
          <h1>Posts</h1>
        </div>

        <ul>
          {[1, 2, 3].map((postId) => (
            <li key={postId} className="mb-2">
              <Link to={`/posts/$postId/${postId}`}>Post {postId}</Link>
            </li>
          ))}
        </ul>
      </div>
    </PageContainer>
  );
}

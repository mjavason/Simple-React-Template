import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/posts')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <div className="text-center">
        <h1>Posts</h1>
      </div>

      <ul>
        <li>
          <Link to="/posts/$postId" params={{ postId: '1' }}>
            Post 1
          </Link>
        </li>
        <li>
          <Link to="/posts/$postId" params={{ postId: '2' }}>
            Post 2
          </Link>
        </li>
        <li>
          <Link to="/posts/$postId" params={{ postId: '3' }}>s
            Post 3
          </Link>
        </li>
      </ul>
    </div>
  )
}

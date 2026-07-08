import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts_/edit_/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/posts_/$postId/edit"!</div>
}

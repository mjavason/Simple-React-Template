import { Link } from '@tanstack/react-router'

export default function Header2() {
  return (
    <div className='p-4'>
      <ul style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/posts/$postId" params={{ postId: 'hello' }}>
            Posts
          </Link>
        </li>
        <li>
          <Link to="/playground">Playground</Link>
        </li>
      </ul>
    </div>
  )
}

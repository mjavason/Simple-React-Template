import { Link, useLocation, useResolvedPath } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import { useProgress } from '@/context/progress-context';

export function AppLink({ onClick, to, ...props }: LinkProps) {
  const { start } = useProgress();
  const location = useLocation();
  const resolvedPath = useResolvedPath(to);

  const isCurrentLocation =
    resolvedPath.pathname === location.pathname &&
    resolvedPath.search === location.search &&
    resolvedPath.hash === location.hash;

  return (
    <Link
      {...props}
      to={to}
      onClick={(event) => {
        onClick?.(event);

        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) {
          return;
        }

        if (!isCurrentLocation) {
          start();
        }
      }}
    />
  );
}

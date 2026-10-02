import { useProgress } from '@/common/context/progress-context';
import type { NavLinkProps } from 'react-router-dom';
import { NavLink, useLocation, useResolvedPath } from 'react-router-dom';

export function AppLink({ onClick, to, ...props }: NavLinkProps) {
  const { start } = useProgress();
  const location = useLocation();
  const resolvedPath = useResolvedPath(to);

  const isCurrentLocation =
    resolvedPath.pathname === location.pathname &&
    resolvedPath.search === location.search &&
    resolvedPath.hash === location.hash;

  return (
    <NavLink
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

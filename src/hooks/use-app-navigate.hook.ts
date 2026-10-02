import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import type { NavigateFunction } from 'react-router-dom';
import { useProgress } from '@/common/context/progress-context';

export function useAppNavigate(): NavigateFunction {
  const navigate = useNavigate();
  const { start } = useProgress();

  return useCallback(
    ((...args: Parameters<NavigateFunction>) => {
      start();
      return navigate(...args);
    }) as NavigateFunction,
    [navigate, start],
  );
}

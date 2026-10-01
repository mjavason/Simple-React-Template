import React from 'react';

export const ProgressContext = React.createContext<{
  start: () => void;
  stop: () => void;
} | null>(null);

export function useProgress() {
  const context = React.useContext(ProgressContext);

  if (!context) {
    throw new Error('useProgress must be used inside RouterLayout');
  }

  return context;
}

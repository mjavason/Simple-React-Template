import type { ReactNode } from 'react';

function Button({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export default Button;

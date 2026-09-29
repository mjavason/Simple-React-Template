import { cn } from 'cn';
import type { ReactNode } from 'react';

export const Loader = ({
  title = 'Please wait...',
  height = '90vh',
}: {
  title?: string | ReactNode;
  height?: string;
}) => {
  return (
    <div className="flex items-center justify-center" style={{ height }}>
      <p className="max-w-70 text-center font-semibold">{title}</p>
    </div>
  );
};

// Remember, text fontsize can also count as height.
// If a p tag is sized 16px you can size the skeleton to that same height and it'll match perfectly
export function SkeletonLoader({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const skeletonClass =
    'relative overflow-hidden bg-muted before:absolute before:inset-y-0 before:left-0 before:w-6/7 before:bg-gradient-to-r before:from-transparent before:via-accent/10 before:to-transparent before:animate-shimmer';

  return (
    <div
      className={cn(` ${skeletonClass} h-full w-full`, className, { ...props })}
    />
  );
}

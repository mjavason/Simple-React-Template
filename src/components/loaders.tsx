import { cn } from 'cn';
import { ReactNode } from 'react';

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

export function SkeletonLoader({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const skeletonClass =
    'relative overflow-hidden bg-gray-200 before:absolute before:inset-y-0 before:left-0 before:w-2/3 before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent before:animate-shimmer';

  return (
    <div
      className={cn('flex flex-col items-start gap-3', className)}
      {...props}
    >
      <div
        className={cn(`
          ${skeletonClass}
          w-full
          h-full
        `, className)}
      />
    </div>
  );
}

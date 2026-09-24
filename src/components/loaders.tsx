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

export const SkeletonLoader = ({
  width,
  height,
  isRound,
}: {
  width: string;
  height: string;
  isRound?: boolean;
}) => {
  const skeletonClass =
    'relative overflow-hidden bg-gray-200 before:absolute before:inset-0 before:w-1/2 before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent before:animate-shimmer';

  return (
    <div className="flex flex-col items-start gap-3">
      <div
        className={`${skeletonClass} ${
          isRound ? 'rounded-full' : 'rounded-none'
        }`}
        style={{ width, height }}
      />
    </div>
  );
};

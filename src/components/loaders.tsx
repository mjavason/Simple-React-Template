import { BreakpointsType } from '@/common/types/breakpoints.type';
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
  width: BreakpointsType;
  height: BreakpointsType;
  isRound?: boolean;
}) => {
  const skeletonClass =
    'relative overflow-hidden bg-gray-200 before:absolute before:inset-y-0 before:left-0 before:w-2/3 before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent before:animate-shimmer';

  return (
    <div className="flex flex-col items-start gap-3">
      <div
        className={`
          ${skeletonClass}
          ${isRound ? 'rounded-full' : 'rounded-none'}
          w-(--skeleton-width)
          h-(--skeleton-height)
          sm:w-(--skeleton-width-sm)
          sm:h-(--skeleton-height-sm)
          md:w-(--skeleton-width-md)
          md:h-(--skeleton-height-md)
          lg:w-(--skeleton-width-lg)
          lg:h-(--skeleton-height-lg)
          xl:w-(--skeleton-width-xl)
          xl:h-(--skeleton-height-xl)
        `}
        style={
          {
            '--skeleton-width': width.base,
            '--skeleton-width-sm': width.sm ?? width.base,
            '--skeleton-width-md': width.md ?? width.sm ?? width.base,
            '--skeleton-width-lg':
              width.lg ?? width.md ?? width.sm ?? width.base,
            '--skeleton-width-xl':
              width.xl ?? width.lg ?? width.md ?? width.sm ?? width.base,
            '--skeleton-height': height.base,
            '--skeleton-height-sm': height.sm ?? height.base,
            '--skeleton-height-md': height.md ?? height.sm ?? height.base,
            '--skeleton-height-lg':
              height.lg ?? height.md ?? height.sm ?? height.base,
            '--skeleton-height-xl':
              height.xl ?? height.lg ?? height.md ?? height.sm ?? height.base,
          } as React.CSSProperties
        }
      />
    </div>
  );
};

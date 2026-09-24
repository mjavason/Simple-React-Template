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
      <p className="max-w-70 text-center font-semibold text-[#944000]">
        {title}
      </p>
    </div>
  );
};

export const PageLoader = ({ squares }: { squares?: boolean }) => {
  return (
    <div
      className={`flex w-full flex-col items-start ${
        squares ? 'gap-3' : 'gap-2'
      }`}
    >
      <div
        className={`h-8 w-full animate-pulse bg-gray-200 ${
          squares ? 'rounded-lg' : 'rounded-none'
        }`}
      />

      <div
        className={`h-${squares ? '8' : '4'} animate-pulse bg-gray-200 ${
          squares ? 'w-full rounded-none' : 'w-[80%] rounded-none'
        }`}
      />

      <div
        className={`h-${squares ? '8' : '4'} animate-pulse bg-gray-200 ${
          squares ? 'w-full rounded-lg' : 'w-[60%] rounded-none'
        }`}
      />
    </div>
  );
};

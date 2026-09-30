import * as React from 'react';
import { SkeletonLoader } from './loaders';

type ImageProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  'loading' | 'decoding' | 'fetchPriority'
> & {
  loading?: 'eager' | 'lazy';
  decoding?: 'async' | 'sync' | 'auto';
  fetchPriority?: 'high' | 'low' | 'auto';
};

function BaseImage({ width, height, className = '', ...props }: ImageProps) {
  const [loaded, setLoaded] = React.useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <div className="relative overflow-hidden" style={{ width, height }}>
      {!loaded && <SkeletonLoader className="absolute inset-0 h-full w-full" />}

      <img
        {...props}
        width={width}
        height={height}
        onLoad={handleLoad}
        className={`block object-cover transition-opacity duration-200 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        style={{
          width,
          height,
          ...props.style,
        }}
      />
    </div>
  );
}

/**
 * For normal images that are not critical to the page.
 * Lazy-loaded and decoded asynchronously.
 */
export function SimpleImage(props: ImageProps) {
  return <BaseImage {...props} loading="lazy" decoding="async" />;
}

/**
 * For images that are important to the page but aren't
 * the primary LCP/hero image.
 */
export function ImportantImage(props: ImageProps) {
  return (
    <BaseImage
      {...props}
      loading="eager"
      decoding="async"
      fetchPriority="auto"
    />
  );
}

/**
 * For the primary/hero image or the image responsible
 * for the page's LCP.
 */
export function VeryImportantImage(props: ImageProps) {
  return (
    <BaseImage
      {...props}
      loading="eager"
      decoding="sync"
      fetchPriority="high"
    />
  );
}

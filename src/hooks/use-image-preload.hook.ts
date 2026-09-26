import { useEffect, useState } from 'react';

export function useImagePreload(images: string[]) {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preload = (src: string) =>
      new Promise<void>((resolve) => {
        const image = new window.Image();

        image.onload = () => resolve();
        image.onerror = () => resolve();
        image.src = src;
      });

    Promise.all(images.map(preload)).then(() => {
      setImagesLoaded(true);
    });
  }, [images]);

  return imagesLoaded;
}

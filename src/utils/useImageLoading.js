import { useEffect, useState } from 'react';

export const useImageLoading = (src) => {
  const [loading, setLoading] = useState(!!src);
  const [error, setError] = useState(false);
  const [originalSizes, setOriginalSizes] = useState(!!src);
  useEffect(() => {
    if (src) {
      const image = new Image();
      image.addEventListener("load", async () => {
        setLoading(false);
        setOriginalSizes({ width: image.width, height: image.height });
      });
      image.addEventListener("error", async () => {
        setLoading(false);
        setError(true);
      });
      image.src = src;
      setLoading(true);
    }
  }, [src]);
  return [loading, error, originalSizes];
};

import { useEffect, useRef, useState } from 'react';

const notDataURL = src => !/^data:/.test(src);

function useImagePreload({ imgs = [], onFinish, onError } = {}) {
  if (!imgs || !Array.isArray(imgs)) {
    throw new Error('imgs is required and should be array');
  }
  const imgsRef = useRef();
  useEffect(() => {
    if (!imgsRef.current) {
      imgsRef.current = imgs.filter(notDataURL);
    }
  }, [imgs]);

  const onFinishRef = useRef();
  const onErrorRef = useRef();

  useEffect(() => {
    onFinishRef.current = onFinish;
    onErrorRef.current = onError;
  });

  const [loaded, setLoaded] = useState(() => {
    return imgs.length - imgs.filter(notDataURL).length;
  });
  useEffect(() => {
    imgsRef.current.forEach(src => {
      let img = new Image();
      img.onload = () => {
        setLoaded(loaded => loaded + 1);
      };
      img.onerror = () => {
        onErrorRef.current &&
          onErrorRef.current(new Error(`load error: ${src}`));
      };
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (loaded === imgs.length) {
      setTimeout(() => {
        onFinishRef.current && onFinishRef.current();
      }, 0);
    }
  }, [loaded, imgs]);

  return {
    loaded,
    total: imgs.length
  };
}

export default useImagePreload;

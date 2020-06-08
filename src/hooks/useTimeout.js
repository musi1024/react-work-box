import { useEffect, useCallback, useRef } from 'react';

const useTimeout = (fn, milliseconds) => {
  const timeout = useRef();
  const callback = useRef(fn);

  const clear = useCallback(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      timeout.current = null;
    }
  }, []);

  useEffect(() => {
    if (typeof fn === 'function') {
      callback.current = fn;
    }
  }, [fn]);

  useEffect(() => {
    if (typeof milliseconds === 'number') {
      timeout.current = setTimeout(() => callback.current(), milliseconds);
    }
    return () => clear();
  }, [clear, milliseconds]);

  return clear;
};

export default useTimeout;

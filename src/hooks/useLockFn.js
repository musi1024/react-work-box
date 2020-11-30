import { useRef } from 'react';

function useLockFn(fn) {
  const lockRef = useRef(false);

  return async function (...args) {
    if (lockRef.current) return;
    lockRef.current = true;
    try {
      const ret = await fn(...args);
      lockRef.current = false;
      return ret;
    } catch (e) {
      lockRef.current = false;
      throw e;
    }
  };
}

export default useLockFn;

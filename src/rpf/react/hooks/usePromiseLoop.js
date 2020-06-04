import promiseLoop from '../../un/promiseLoop';
import { useEffect, useRef } from 'react';

// null or undefined
function isNil(x) {
  return x == null;
}

function usePromiseLoop(func, interval = 0, maxCall) {
  const funcRef = useRef();
  useEffect(() => {
    funcRef.current = func;
  });
  useEffect(() => {
    function loopFn() {
      return funcRef.current();
    }
    if (!isNil(interval)) {
      const loop = promiseLoop(loopFn, interval, maxCall);
      return () => {
        loop.stop();
      };
    }
  }, [interval, maxCall]);
}

export default usePromiseLoop;

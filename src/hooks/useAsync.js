import { useCallback, useEffect, useRef, useState } from 'react';

const useRefMounted = () => {
  const refMounted = useRef(false);

  useEffect(() => {
    refMounted.current = true;

    return () => {
      refMounted.current = false;
    };
  });

  return refMounted;
};

export const useAsyncFn = (fn, deps = []) => {
  const [state, setState] = useState({
    loading: false
  });

  const mounted = useRefMounted();

  const callback = useCallback(() => {
    setState({ loading: true });

    fn().then(
      value => {
        if (mounted.current) {
          setState({ value, loading: false });
        }
      },
      error => {
        if (mounted.current) {
          setState({ error, loading: false });
        }
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [state, callback];
};

export const useAsync = (fn, deps) => {
  const [state, callback] = useAsyncFn(fn, deps);

  useEffect(() => {
    callback();
  }, [callback]);

  return state;
};

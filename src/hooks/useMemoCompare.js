import { useRef, useEffect } from 'react';

function useMemoCompare(value, compare) {
  const previousRef = useRef();
  const previous = previousRef.current;
  const isEqual = compare(previous, value);
  useEffect(() => {
    if (!isEqual) {
      previousRef.current = value;
    }
  });
  return isEqual ? previous : value;
}

export default useMemoCompare;

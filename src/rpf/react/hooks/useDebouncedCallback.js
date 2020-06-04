import { useRef, useEffect, useMemo } from 'react';
import shallowEqual from '../../un/shallowEqual';
import debounce from 'lodash/debounce';

const toBeThrow = msg => {
  throw Error(msg);
};

const coerceOpt = options => {
  if (typeof options === 'number') {
    options = {
      ms: options
    };
  }
  if (typeof options !== 'object') {
    options = {};
  }
  return options;
};
/**
 * @param {Function} cb
 * @param {number|{ms:number,leading:boolean,trailing:boolean,maxWait:number}} _options
 * @description
 * https://lodash.com/docs/4.17.11#debounce
 */
export default function useDebouncedCallback(
  cb = toBeThrow(`useDebouncedCallback(): Missing argument \`cb\``),
  _options
) {
  const cbRef = useRef(cb);
  const optRef = useRef(void 0);
  if (!shallowEqual(optRef.current, _options)) {
    optRef.current = _options;
  }
  useEffect(() => {
    cbRef.current = cb;
  }, [cb]);
  const options = optRef.current;
  return useMemo(() => {
    const { ms = 0, ...rest } = coerceOpt(options);
    return debounce(() => cbRef.current(), ms, rest);
  }, [options]);
}

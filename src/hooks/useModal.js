import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const getKey = name => `modal_${name}`;

const useModal = (arr = []) => {
  if (!arr || !Array.isArray(arr)) {
    throw new Error('arr is required and should be array');
  }

  const arrRef = useRef([]);
  useEffect(() => {
    arrRef.current = arr;
  }, [arr]);
  useEffect(() => {}, []);

  const [modals, setModals] = useState([]);

  const excute = useCallback((...args) => {
    const shouldOpens = arrRef.current.map(async i => {
      if (i.once && sessionStorage.getItem(getKey(i.name))) return false;
      if (typeof i.shouldOpen === 'function') {
        const res = await i.shouldOpen(...args);
        return { ...i, shouldOpen: res };
      }
      return i;
    });
    Promise.all(shouldOpens)
      .then(arr => {
        setModals(arr.filter(i => i && i.shouldOpen));
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return useMemo(() => {
    const getModalName = () => {
      const target = modals[0];
      if (!target) return '';
      if (target.once) {
        sessionStorage.setItem(getKey(target.name), true);
      }
      if (typeof target.shouldOpen === 'string') return target.shouldOpen;
      return target.name;
    };

    return {
      modalName: getModalName(),
      nextModal: () => setModals(s => s.slice(1)),
      excute
    };
  }, [excute, modals]);
};

export default useModal;

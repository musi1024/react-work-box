import { useEffect, useState, useMemo, useRef } from 'react';

const APP_NAME = process.env.REACT_APP_NAME;
const useModalBox = arr => {
  const arrRef = useRef([]);
  useEffect(() => {
    arrRef.current = arr;
  }, [arr]);

  const [modals, setModals] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const shouldOpens = arrRef.current.map(i => {
      if (i.once) {
        if (sessionStorage.getItem(`${APP_NAME}${i.name}`))
          return { ...i, shouldOpen: false };
        sessionStorage.setItem(`${APP_NAME}-${i.name}`, true);
      }

      if (typeof i.shouldOpen !== 'function') return { ...i };

      return i.shouldOpen().then(res => {
        return { ...i, shouldOpen: res };
      });
    });

    Promise.all(shouldOpens).then(arr => {
      setModals(arr.filter(i => i.shouldOpen));
    });
  }, []);

  return useMemo(() => {
    return {
      modalName: modals[index]?.name,
      nextModal: () => setIndex(s => (s += 1))
    };
  }, [index, modals]);
};

export default useModalBox;

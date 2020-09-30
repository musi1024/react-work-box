import { useEffect, useState, useMemo, useRef } from 'react';

const APP_NAME = process.env.REACT_APP_NAME;

const stringName = name => {
  if (typeof name === 'object' && name !== null) {
    return JSON.stringify(name);
  }
  return name;
};

const useModalBox = (arr, { onError, wait }) => {
  const arrRef = useRef([]);
  useEffect(() => {
    arrRef.current = arr;
  }, [arr]);

  const errorRef = useRef();
  useEffect(() => {
    errorRef.current = onError;
  }, [onError]);

  const [modals, setModals] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const shouldOpens = arrRef.current.map(async i => {
      if (
        i.once &&
        sessionStorage.getItem(`${APP_NAME}-${stringName(i.name)}`)
      ) {
        return { ...i, shouldOpen: false };
      }

      if (typeof i.shouldOpen !== 'function') return { ...i };
      const res = await i.shouldOpen();
      return { ...i, shouldOpen: res };
    });

    Promise.all(shouldOpens)
      .then(arr => {
        setModals(arr.filter(i => i.shouldOpen));
      })
      .catch(error => {
        errorRef.current && errorRef.current(error);
      });
  }, []);

  return useMemo(() => {
    if (wait) return { modalName: '', nextModal: () => {} };
    const getName = () => {
      if (!modals[index]) return '';
      const { name, shouldOpen } = modals[index];
      if (typeof name === 'object' && name !== null) {
        return name[shouldOpen];
      } else {
        return name;
      }
    };
    return {
      modalName: getName(),
      nextModal: () => {
        if (modals[index] && modals[index].once) {
          sessionStorage.setItem(
            `${APP_NAME}-${stringName(modals[index].name)}`,
            true
          );
        }
        setIndex(s => (s += 1));
      }
    };
  }, [index, modals, wait]);
};

export default useModalBox;

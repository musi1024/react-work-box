import { useState, useEffect, useCallback, useRef } from 'react';
import { createContainer } from 'unstated-next';

const useStore = () => {
  const [userInfo, setUserInfo] = useState({});
  const setUserInfoByKey = useCallback((key, value) => {
    setUserInfo(state => {
      return { ...state, [key]: value };
    });
  }, []);

  const [isLogin, setIsLogin] = useState(false);

  const [error, setError] = useState();
  const idRef = useRef();
  useEffect(() => {
    idRef.current = userInfo.id;
  }, [userInfo.id]);
  const setErrorMsg = useCallback(msg => setError(idRef.current + msg), []);

  return {
    userInfo,
    setUserInfo,
    setUserInfoByKey,
    isLogin,
    setIsLogin,
    error,
    setErrorMsg
  };
};

export default createContainer(useStore);

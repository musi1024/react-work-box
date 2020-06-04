import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Store from 'Store';

const Home = () => {
  const history = useHistory();
  const { setErrorMsg, userInfo, setUserInfoByKey } = Store.useContainer();

  const updateUserInfo = useCallback(() => {
    setUserInfoByKey('id', 10000);
  }, [setUserInfoByKey]);

  const error = useCallback(() => {
    setErrorMsg('aaaa');
  }, [setErrorMsg]);

  return (
    <div>
      Home
      <br />
      <span>{userInfo.id}</span>
      <span>{userInfo.name}</span>
      <br />
      <button onClick={() => history.replace('/about')}>jump</button>
      <button onClick={updateUserInfo}>update</button>
      <button onClick={error}>error</button>
    </div>
  );
};

export default Home;

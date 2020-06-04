import './App.css';
import React, { useEffect } from 'react';
import Routes from 'Routes';
import Store from 'Store';

const wait = fn => new Promise(resolve => setTimeout(fn, 1000));
function App() {
  const { error, setUserInfo, setIsLogin } = Store.useContainer();
  useEffect(() => {
    function fetchData() {
      wait(() => {
        setUserInfo({ id: 1, name: 'abc' });
        setIsLogin(true);
      });
    }
    fetchData();
  }, [setIsLogin, setUserInfo]);

  return (
    <div className="App">
      <Routes />
      <div>{error}</div>
    </div>
  );
}

export default App;

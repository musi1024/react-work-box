import './App.css';
import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Routes from 'routes';

function App() {
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className="App">
      <Routes />
      <button onClick={() => history.replace('/')}>home</button>
      <button onClick={() => history.replace('/about?debug=1')}>about</button>
    </div>
  );
}

export default App;

import './App.css';
import React, { useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Home from 'views/Home';

const About = () => {
  return <div>About</div>;
};

function App() {
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
      <button onClick={() => history.replace('/')}>home</button>
      <button onClick={() => history.replace('/about?debug=1')}>about</button>
    </div>
  );
}

export default App;

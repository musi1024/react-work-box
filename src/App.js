import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components/macro';
import Home from 'pages/Home';
import About from 'pages/About';

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

function App() {
  return (
    <Wrap className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Wrap>
  );
}

export default App;

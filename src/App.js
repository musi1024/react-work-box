import React from 'react';
import styled from 'styled-components/macro';
import Routes from 'routes';

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
      <Routes />
    </Wrap>
  );
}

export default App;

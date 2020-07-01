import React from 'react';
import styled from 'styled-components/macro';

const Wrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: ${p => p.theme[p.color]};
`;

const Home = () => {
  return <Wrap color="red">Home</Wrap>;
};

export default Home;

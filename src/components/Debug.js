import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components/macro';
import vw from 'rpf/un/vw';
import Mask from 'components/Mask';

const Wrap = styled(Mask)`
  opacity: 0.4;
  width: 100%;
  height: ${vw(200)};
  bottom: 0;
  top: auto;
  color: rgba(255, 255, 255);
  pointer-events: none;
`;

const Debug = ({ children }) => {
  return ReactDom.createPortal(<Wrap>{children}</Wrap>, document.body);
};

export default Debug;

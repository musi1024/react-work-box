import React from 'react';
import styled from 'styled-components/macro';
import vw from 'rpf/un/vw';
import Mask from 'components/Mask';

const Wrap = styled(Mask)`
  opacity: 0.4;
  width: ${p => vw(p.width)};
  height: ${p => vw(p.height)};
  bottom: 0;
  top: auto;
  color: rgba(255, 255, 255);
  pointer-events: none;
`;

Wrap.defaultProps = {
  width: 400,
  height: 300
};

const Debug = ({ children, width, height }) => {
  return (
    <Wrap className="scrollable" width={width} height={height}>
      {children}
    </Wrap>
  );
};

export default Debug;

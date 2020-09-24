import React, { useMemo } from 'react';
import styled from 'styled-components/macro';
import { getHeightPercent } from 'utils';

const Wrap = styled.div`
  transform: scale(
    ${p => (p.scaleX > 1 ? 1 : p.scaleX)},
    ${p => (p.scaleY > 1 ? 1 : p.scaleY)}
  );
`;

function ScaleArea(props) {
  const scale = useMemo(() => getHeightPercent(props.minHPW), [props.minHPW]);
  return (
    <Wrap
      className={props.className}
      style={props.style}
      onClick={props.onClick}
      scaleX={props.scaleX ? scale : 1}
      scaleY={props.scaleY ? scale : 1}
    >
      {props.children}
    </Wrap>
  );
}

ScaleArea.defaultProps = {
  scaleX: true,
  scaleY: true
};

export default ScaleArea;

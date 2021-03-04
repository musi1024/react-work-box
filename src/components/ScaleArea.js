import React, { useMemo } from 'react';
import styled from 'styled-components/macro';

const HPW = window.innerHeight / window.innerWidth;
export const getHeightPercent = (tagHPW = 1206 / 750) => {
  const percent = HPW / tagHPW;
  return Math.max(1, percent);
};

const Wrap = styled.div`
  transform: scale(${p => p.scaleX} ${p => p.scaleY});
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

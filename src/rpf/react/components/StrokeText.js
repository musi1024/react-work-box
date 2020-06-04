import React from 'react';
import styled from 'styled-components/macro';

const Text = styled.div`
  display: inline-block;
  white-space: nowrap;
  position: relative;
  > span {
    position: relative;
    z-index: 2;
  }
  &:before {
    content: "${p => p.text}";
    position: absolute;
    -webkit-text-stroke: ${p => p.strokeWidth} ${p => p.stroke};
    z-index: 1;
  }
`;

Text.defaultProps = {
  text: '',
  stroke: '#000',
  strokeWidth: '5px'
};

const StrokeText = props => (
  <Text {...props}>
    <span>{props.text}</span>
  </Text>
);

export default StrokeText;

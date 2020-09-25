import React from 'react';
import styled, { keyframes } from 'styled-components/macro';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Svg = styled.svg`
  animation: ${rotate} 2s linear infinite;
`;

const dash = keyframes` 
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

const Circle = styled.circle`
  animation: ${dash} 1.5s ease-in-out infinite;
`;

const Loader = ({ size, color = '#000000' }) => {
  return (
    <Svg
      className="loader"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Circle cx="12" cy="12" r="10" />
    </Svg>
  );
};

export default Loader;

import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import vw from 'rpf/un/vw';
import styled from 'styled-components';
import Mask from './Mask';

const Main = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: ${vw(20)};
  min-width: ${vw(400)};
  min-height: ${vw(220)};
  width: fit-content;
  height: fit-content;
  background-color: rgba(0, 0, 0, 0.85);
  color: #ffffff;
  border-radius: ${vw(20)};
  line-height: 1.6;
  text-align: center;
`;

const Title = styled.div`
  font-size: ${vw(30)};
`;

const Desc = styled.div`
  font-size: ${vw(26)};
  white-space: pre-line;
`;

let timeout;
const Toast = ({ show, title, desc, onClose }) => {
  const onCloseRef = useRef();
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    if (show) {
      timeout = setTimeout(() => {
        onCloseRef.current && onCloseRef.current();
      }, 1000);
    }
    return () => {
      timeout && clearTimeout(timeout);
    };
  }, [show]);

  return (
    show &&
    ReactDOM.createPortal(
      <Mask opacity={0} zindex={10}>
        <Main>
          <Title>{title}</Title>
          <Desc>{desc}</Desc>
        </Main>
      </Mask>,
      document.body
    )
  );
};

export default Toast;

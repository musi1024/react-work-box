import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components/macro';
import Mask from './Mask';

const ModalMask = styled(Mask)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${p => p.align};
`;

const ModalWrap = ({ children, maskOpacity, align = 'center' }) => {
  return (
    <ModalMask opacity={maskOpacity} align={align}>
      {children}
    </ModalMask>
  );
};

const Modal = props => {
  const { open, portal = true } = props;
  return open ? (
    portal ? (
      ReactDOM.createPortal(<ModalWrap {...props} />, document.body)
    ) : (
      <ModalWrap {...props} />
    )
  ) : null;
};

export default Modal;

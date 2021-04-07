import React from 'react';
import styled from 'styled-components/macro';
import vw from 'rpf/un/vw';
import Modal from './Modal';

const Wrap = styled.div`
  width: ${vw(300)};
  height: ${vw(400)};
  background-color: blue;
`;

const ErrorModal = props => {
  return (
    <Modal open={props.show} portal={false}>
      <Wrap onClick={props.onClose}>{props.error}</Wrap>
    </Modal>
  );
};

export default ErrorModal;

import React from 'react';
import styled from 'styled-components/macro';
import vw from 'rpf/un/vw';
import Modal from './Modal';

const Wrap = styled.div`
  width: ${vw(300)};
  height: ${vw(400)};
  background-color: blue;
`;

const RuleModal = ({ children, open, onClose }) => {
  return (
    <Modal open={open}>
      <Wrap onClick={onClose}>{children}</Wrap>
    </Modal>
  );
};

export default RuleModal;

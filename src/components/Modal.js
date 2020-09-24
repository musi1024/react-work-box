import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components/macro';
import usePrevious from 'rpf/react/hooks/usePrevious';
import Mask from './Mask';

const MoMask = motion.custom(Mask);
const ModalMask = styled(MoMask)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${p => p.align};
`;

const ChildrenWrap = motion.custom(styled.div``);

const mask = {
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 0
  }
};
const child = {
  visible: {
    opacity: 1,
    y: 0
  },
  hidden: {
    opacity: 0,
    y: 200
  }
};

const duration = 0.26;

const ModalWrap = ({ controls, children, maskOpacity, align = 'center' }) => {
  return (
    <ModalMask
      initial="hidden"
      animate="visible"
      variants={mask}
      transition={{ duration }}
      opacity={maskOpacity}
      align={align}
    >
      <ChildrenWrap
        animate={controls}
        variants={child}
        transition={{ duration }}
      >
        {children}
      </ChildrenWrap>
    </ModalMask>
  );
};

const Modal = props => {
  const { open, portal = true } = props;
  const controls = useAnimation();
  const preOpen = usePrevious(open);
  const [show, setShow] = useState();
  useEffect(() => {
    if (Boolean(open) === Boolean(preOpen)) return;
    if (open) {
      setShow(true);
      controls.start('visible');
    } else {
      controls.start('hidden').then(() => setShow(false));
    }
  }, [controls, open, preOpen]);

  return show ? (
    portal ? (
      ReactDOM.createPortal(
        <ModalWrap {...props} controls={controls} />,
        document.body
      )
    ) : (
      <ModalWrap {...props} controls={controls} />
    )
  ) : null;
};

export default Modal;

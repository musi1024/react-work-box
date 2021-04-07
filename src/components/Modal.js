import React from 'react';
import ReactDOM from 'react-dom';
import Mask from './Mask';
import styled, { css, createGlobalStyle } from 'styled-components/macro';
import { CSSTransition } from 'react-transition-group';

const duration = 300;
const TransStyle = createGlobalStyle`
  .modal-enter {
    opacity: 0;
    > .modal_wrap {
      transform: translate3d(0, 100%, 0);
    }
  }
  .modal-enter-active {
    opacity: 1;
    transition: all ${duration}ms;
    > .modal_wrap {
      transform: translate3d(0, 0, 0);
      transition: all ${duration}ms;
    }
  }
  .modal-exit {
    opacity: 1;
    > .modal_wrap {
      transform: translate3d(0, 0, 0);
    }
  }
  .modal-exit-active {
    opacity: 0;
    transition: all ${duration}ms;
    > .modal_wrap {
      transform: translate3d(0, 100%, 0);
      transition: all ${duration}ms;
    }
  }
`;

const vertAlign = p => {
  if (p.align === 'center') {
    return css`
      justify-content: center;
    `;
  } else if (p.align === 'top') {
    return css`
      justify-content: flex-start;
    `;
  } else if (p.align === 'bottom') {
    return css`
      justify-content: flex-end;
    `;
  }
};

const ModalMask = styled(Mask)`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${p => vertAlign(p)}
`;

const ModalWrap = styled.div`
  position: relative;
`;

const Modal = props => {
  let { open, onOpen, im = false } = props;

  return ReactDOM.createPortal(
    <>
      <TransStyle />
      <CSSTransition
        onEntered={() => onOpen && onOpen()}
        in={Boolean(open)}
        timeout={duration}
        classNames={im ? 'null' : 'modal'}
        unmountOnExit
      >
        <ModalMask opacity={props.maskOpacity} align={props.align}>
          <ModalWrap className="modal_wrap">{props.children}</ModalWrap>
        </ModalMask>
      </CSSTransition>
    </>,
    document.body
  );
};

Modal.defaultProps = {
  align: 'center'
};

export default Modal;

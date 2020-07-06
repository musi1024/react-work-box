import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ErrorModal from './ErrorModal';

const store = {
  setState: () => {}
};

const modal = {
  open: (key, props) => {
    store.setState(s => {
      return {
        ...s,
        [key]: {
          show: true,
          ...props
        }
      };
    });
  },
  close: key => {
    store.setState(s => {
      return {
        ...s,
        [key]: {
          show: false
        }
      };
    });
  }
};

const ModalRoot = () => {
  const [state, setState] = useState({
    error: { show: false }
  });
  useEffect(() => {
    store.setState = setState;
  }, []);

  return (
    <>{<ErrorModal {...state.error} close={() => modal.close('error')} />}</>
  );
};

const $root = document.createElement('div');

document.body.appendChild($root);

ReactDOM.render(<ModalRoot />, $root);

export default modal;

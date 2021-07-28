import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ErrorModal from './ErrorModal';
import Toast from './Toast';

const store = {
  setState: () => {}
};

const modal = {
  open: (key, props) => {
    store.setState(s => {
      return {
        ...s,
        [key]: {
          open: true,
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
          open: false
        }
      };
    });
  }
};

const ModalRoot = () => {
  const [state, setState] = useState({
    // 这里增加的弹窗的状态，弹窗类型
    // 弹窗类型作为 key，value 默认的参数
    error: { open: false },
    toast: { open: false }
  });
  useEffect(() => {
    store.setState = setState;
  }, []);

  return (
    <>
      {/*
        这里引入所有的全局弹窗组件
       */}
      <ErrorModal {...state.error} />
      <Toast {...state.toast} onClose={() => modal.close('toast')} />
    </>
  );
};

const $root = document.createElement('div');

document.body.appendChild($root);

ReactDOM.render(<ModalRoot />, $root);

export default modal;

import React from 'react';
import PageWrap from 'components/PageWrap';
import modal from 'components/ModalRoot';

function App() {
  return (
    <PageWrap>
      <button
        onClick={() => {
          modal.open('toast', {
            title: 'aaa',
            onClose: () => {
              modal.close('toast');
            }
          });
        }}
      >
        按钮
      </button>
    </PageWrap>
  );
}

export default App;

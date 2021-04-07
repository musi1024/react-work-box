import React, { useState } from 'react';
import PageWrap from 'components/PageWrap';
import Modal from 'components/Modal';
import styled from 'styled-components';

const Test = styled.div`
  width: 50vw;
  height: 50vh;
  background-color: #ffffff;
`;

function App() {
  const [modal, setModal] = useState(false);
  return (
    <PageWrap>
      <div onClick={() => setModal(true)}>按钮</div>
      <Modal open={modal}>
        <Test />
      </Modal>
    </PageWrap>
  );
}

export default App;

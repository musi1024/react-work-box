import React from 'react';
import PageWrap from 'components/PageWrap';
import useModal from 'hooks/useModal';

const wait = (res, time) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(res);
    }, time);
  });
};

function App() {
  const { modalName, nextModal } = useModal([
    {
      name: 'a',
      shouldOpen: async () => {
        return await wait('aa', 200);
      }
    },
    {
      name: 'b',
      shouldOpen: async () => {
        return await wait('bb', 500);
      },
      once: true
    },
    {
      name: 'c',
      shouldOpen: async () => {
        await wait('bb', 500);
        return 0;
      }
    }
  ]);

  return (
    <PageWrap>
      {modalName}
      <button onClick={nextModal}>按钮</button>
    </PageWrap>
  );
}

export default App;

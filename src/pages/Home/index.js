import React from 'react';
import styled from 'styled-components/macro';
import RuleModal from 'components/RuleModal';
import RuleModal2 from 'components/RuleModal';
import useModalBox from 'hooks/useModalBox';

const Wrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const wait = props => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(props);
    }, 500);
  });
};

const Home = () => {
  const { modalName, nextModal } = useModalBox([
    {
      name: 'rule',
      shouldOpen: async () => {
        const data = await wait(true);
        return data;
      },
      once: true
    },
    {
      name: 'rule2',
      shouldOpen: true
    }
  ]);

  return (
    <Wrap>
      <RuleModal
        open={modalName === 'rule'}
        onClose={() => {
          nextModal();
        }}
      ></RuleModal>
      <RuleModal2
        open={modalName === 'rule2'}
        onClose={() => {
          nextModal();
        }}
      ></RuleModal2>
    </Wrap>
  );
};

export default Home;

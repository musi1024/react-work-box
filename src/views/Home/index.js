import React, { useCallback } from 'react';
import styled from 'styled-components/macro';
import useSWR from 'swr';
import api from 'api';
import useRouter from 'hooks/useRouter';
import RuleModal from 'components/RuleModal';
import modal from 'components/ModalRoot';
import { useState } from 'react';

const Wrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Home = () => {
  const { push } = useRouter();
  const { data, mutate } = useSWR(['getTest']);

  const onClick = useCallback(async () => {
    const newItem = { id: 4, name: 'test' };
    await api.postTest(newItem);
    mutate([...data, newItem]);
  }, [data, mutate]);

  const [openModal, setOpenModal] = useState(false);
  return (
    <Wrap>
      Home
      {data?.map((i, idx) => (
        <div key={idx}>{JSON.stringify(i, null, 2)}</div>
      ))}
      <div onClick={onClick}>buttom</div>
      <div onClick={() => push('/about')}>push</div>
      <div onClick={() => setOpenModal(true)}>modal</div>
      <div onClick={() => modal.open('error', { error: 'aaaa' })}>error</div>
      <RuleModal open={openModal} onClose={() => setOpenModal(false)} />
    </Wrap>
  );
};

export default Home;

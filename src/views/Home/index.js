import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import api from 'api';
import useRouter from 'hooks/useRouter';

const Wrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Home = () => {
  const { push } = useRouter();
  const [data, setDate] = useState([]);
  useEffect(() => {
    async function fetch() {
      const [err, res] = await api.getTest();
      if (err) return;
      setDate(res);
    }
    fetch();
  }, []);

  const onClick = () => {
    api.postTest({ id: 4, name: 'xxxx' });
  };
  return (
    <Wrap>
      Home
      {data.map((i, idx) => (
        <div key={idx}>{JSON.stringify(i, null, 2)}</div>
      ))}
      <div onClick={onClick}>button</div>
      <div onClick={() => push('/about')}>About</div>
    </Wrap>
  );
};

export default Home;

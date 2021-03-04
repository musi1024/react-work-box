import React, { useState } from 'react';
import { Btn, ItemWrap, ItemMain, Tips, Title, Input } from './Styles';

const ItemComps = {
  input: ({ value, setValue }) => (
    <Input value={value} onChange={e => setValue(e.target.value)} />
  )
};

const Item = ({ title, tips, type, fn }) => {
  const ItemComp = ItemComps[type];

  const [value, setValue] = useState('');

  return (
    <ItemWrap>
      <ItemMain>
        <Title>{title}</Title>
        <ItemComp value={value} setValue={setValue} />
        <Tips>{tips}</Tips>
      </ItemMain>
      <Btn onClick={fn}>设置</Btn>
    </ItemWrap>
  );
};

export default Item;

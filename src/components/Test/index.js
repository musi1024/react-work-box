import React, { useState } from 'react';
import filterQuery from 'rpf/un/filterQuery';
import Item from './Item';
import { Content, CloseBtn, Enter, ScrollWrap } from './Styles';

const testConfigs = [
  {
    type: 'input',
    title: '跳转到别的账号',
    tips: '输入openid，如：xxx'
  }
];

const Test = () => {
  const [open, setOpen] = useState(true);

  const handleReload = query => {
    window.localStorage.clear();
    window.sessionStorage.clear();
    window.location.replace(
      filterQuery(window.location.href, [], query || {}, '')
    );
  };

  return open ? (
    <Content>
      <CloseBtn onClick={() => setOpen(false)}>x</CloseBtn>
      <div>openid: </div>
      <div>userId: </div>
      <ScrollWrap>
        {testConfigs.map((item, index) => (
          <Item
            key={index}
            type={item.type}
            title={item.title}
            tips={item.tips}
            fn={() => {
              item.fn();
            }}
          />
        ))}
      </ScrollWrap>
    </Content>
  ) : (
    <Enter onClick={() => setOpen(s => !s)}>Test</Enter>
  );
};

export default Test;

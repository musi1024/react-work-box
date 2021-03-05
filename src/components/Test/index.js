import React, { useCallback, useEffect, useRef, useState } from 'react';
import filterQuery from 'rpf/un/filterQuery';
import Item from './Item';
import { Content, CloseBtn, Enter, ScrollWrap } from './Styles';

const Test = ({ states = {}, configs }) => {
  const [open, setOpen] = useState(false);

  const handleReload = useCallback(query => {
    window.localStorage.clear();
    window.sessionStorage.clear();
    window.location.replace(
      filterQuery(window.location.href, [], query || {}, '')
    );
  }, []);

  const statesRef = useRef();
  useEffect(() => {
    statesRef.current = states;
  });
  const handleFn = useCallback(
    (config, value) => {
      config?.fn({ value, states: statesRef.current, reloadFn: handleReload });
    },
    [handleReload]
  );

  return open ? (
    <Content>
      <CloseBtn onClick={() => setOpen(false)}>x</CloseBtn>
      {Object.keys(states).map((key, index) => (
        <div key={index}>
          {key}: {states[key]}
        </div>
      ))}
      <ScrollWrap>
        {configs.map((item, index) => (
          <Item
            key={index}
            type={item?.type}
            multiple={item?.multiple}
            title={item?.title}
            tips={item?.tips}
            radios={item?.radios}
            fn={value => handleFn(item, value)}
          />
        ))}
      </ScrollWrap>
    </Content>
  ) : (
    <Enter onClick={() => setOpen(s => !s)}>Test</Enter>
  );
};

export default Test;

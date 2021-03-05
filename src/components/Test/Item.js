import React, { useState } from 'react';
import {
  Btn,
  ItemWrap,
  ItemMain,
  Tips,
  Title,
  Input,
  Checkbox,
  Radio,
  RadioWrap,
  SmTitle,
  MultipleItemWrap
} from './Styles';

const ItemComps = {
  input: ({ value, setValue }) => (
    <Input value={value} onChange={e => setValue(e.target.value)} />
  ),
  checkbox: ({ value, setValue }) => (
    <Checkbox
      value={Boolean(value)}
      checked={Boolean(value)}
      onChange={() => setValue(Boolean(!value))}
    />
  ),
  radio: ({ title, setValue, radios }) =>
    Object.keys(radios).map((item, index) => (
      <RadioWrap key={index}>
        <Radio
          id={item}
          name={title}
          value={radios[item]}
          onChange={e => setValue(e.target.value)}
        />
        <label htmlFor={item}>{item}</label>
      </RadioWrap>
    )),
  empty: () => <></>
};

const ItemComp = props => {
  const Comp = ItemComps[props.type || 'empty'] || ItemComps['empty'];
  return <Comp {...props} />;
};

const Item = ({ title, tips, multiple, type, radios, fn }) => {
  const [value, setValue] = useState('');

  const [values, setValues] = useState(() => {
    let obj = {};
    multiple?.forEach(item => {
      obj[item?.key] = '';
    });
    return obj;
  });

  return (
    <ItemWrap>
      <ItemMain>
        <Title>{title}</Title>
        {multiple ? (
          multiple.map((item, index) => (
            <MultipleItemWrap key={index}>
              <SmTitle>{item.title}</SmTitle>
              <ItemComp
                key={item?.key}
                type={item?.type}
                value={values[item?.key]}
                setValue={value =>
                  setValues(s => {
                    return { ...s, [item.key]: value };
                  })
                }
                radios={item?.radios}
                title={title}
              />
            </MultipleItemWrap>
          ))
        ) : (
          <ItemComp
            type={type}
            value={value}
            setValue={setValue}
            radios={radios}
            title={title}
          />
        )}
        <Tips>{tips}</Tips>
      </ItemMain>
      <Btn onClick={() => (multiple?.length ? fn(values) : fn(value))}>
        设置
      </Btn>
    </ItemWrap>
  );
};

export default Item;

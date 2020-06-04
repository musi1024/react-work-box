import React from 'react';
import vw from '../../../un/vw';
import preval from 'preval.macro';
import styled from 'styled-components/macro';

const sizeMap = preval`
const fs = require('fs');
const path = require('path');
const imgSize = require('image-size');
const config = require('./_config');
const getAllFiles = require('./_getAllFiles');
function rmSlash(path) {
  return path.replace(/^\\/+/, '');
}
function getFileKey(str) {
  const imgAbsPath = path.resolve(process.cwd(), config.imagePath);
  return rmSlash(str.replace(imgAbsPath, '').replace(/\\\\/g, '/'));
}
const files = getAllFiles(config.imagePath, name =>
  /\\.(jpe?g|png)$/i.test(name)
);
const sizeMap = files.reduce((acc, item) => {
  acc[getFileKey(item)] = imgSize(item);
  return acc;
}, {});
module.exports = sizeMap;
`;

const Wrap = styled.div`
  background-image: ${p => `url('${p.img}')`};
  width: ${p => p.width};
  height: ${p => p.height};
  background-repeat: no-repeat;
  background-size: 100%;
`;

const imgReqPath = preval`
const getImgPath = require('./_getImgPath');
const imgPath = getImgPath();
module.exports = imgPath;
`;

function rmRelative(path) {
  return path
    .replace(/^@\//, '')
    .split('/')
    .filter(p => p && !/^[.]{1,2}/.test(p));
}

function maxCommonDir(a, b) {
  a = rmRelative(a);
  b = rmRelative(b);
  let maxIndex = 0;
  for (let i = 1; i < a.length + 1; i++) {
    const aSlice = a.slice(-i);
    const bSlice = b.slice(0, i);
    if (aSlice.join(',') === bSlice.join(',') && maxIndex < aSlice.length) {
      maxIndex = i;
    }
  }
  return maxIndex;
}

const AutoSprite = props => {
  const imgPath = rmRelative(props.img)
    .slice(maxCommonDir(imgReqPath, props.img))
    .join('/');
  const bgImg = require(preval`
  const getImgPath = require('./_getImgPath');
  module.exports = getImgPath();
  ` + imgPath);
  const size = sizeMap[imgPath];
  return (
    <Wrap
      className={props.className}
      style={props.style}
      img={bgImg}
      width={vw(size.width)}
      height={vw(size.height)}
    >
      {props.children}
    </Wrap>
  );
};

export default AutoSprite;

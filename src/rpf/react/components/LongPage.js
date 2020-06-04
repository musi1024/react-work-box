import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import Scrollbar from 'smooth-scrollbar';
import preventScroll from '../../un/preventScroll';

const Wrap = styled.div`
  -webkit-tap-highlight-color: transparent;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  position: absolute;
  &[data-scrollbar] {
    position: absolute;
  }
`;

const LongPage = props => {
  const wrapRef = useRef();
  const optionsRef = useRef();
  useEffect(() => {
    optionsRef.current = props.options;
  });
  useEffect(() => {
    const prevent = preventScroll();
    const scroll = Scrollbar.init(wrapRef.current, optionsRef.current);
    return () => {
      prevent.cancel();
      scroll.destroy();
    };
  }, []);
  return <Wrap ref={wrapRef} {...props} />;
};

LongPage.propTypes = {
  options: PropTypes.object
};

export default LongPage;

import React, { useState, useRef } from 'react';
import styled from 'styled-components/macro';
import { motion } from 'framer-motion';
import vw from 'rpf/un/vw';
import Debug from 'components/Debug';

const Wrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Block = styled(motion.div)`
  width: ${vw(100)};
  height: ${vw(100)};
  background-color: blue;
`;

const About = () => {
  const [pos, setPos] = useState({});
  const onDrag = (event, info) => {
    setPos(info.point);
  };

  const constraintsRef = useRef(null);

  return (
    <Wrap ref={constraintsRef}>
      <Block
        drag
        dragConstraints={constraintsRef}
        dragMomentum={false}
        dragElastic={0}
        onDrag={onDrag}
      />
      <Debug>
        x:{pos.x} <br />
        y:{pos.y}
      </Debug>
    </Wrap>
  );
};

export default About;

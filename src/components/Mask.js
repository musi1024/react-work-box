import styled from 'styled-components/macro';

const Mask = styled.div`
  position: fixed;
  background-color: ${p => `rgba(0, 0, 0, ${p.opacity})`};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${p => p.zindex};
`;

Mask.defaultProps = {
  opacity: 0.8,
  zindex: 99
};

export default Mask;

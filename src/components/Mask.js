import styled from 'styled-components/macro';

const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${p => `rgba(0, 0, 0, ${p.opacity})`};
  z-index: ${p => p.zindex};
`;

Mask.defaultProps = {
  opacity: 0.8,
  zindex: 9
};

export default Mask;

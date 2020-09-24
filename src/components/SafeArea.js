import styled from 'styled-components/macro';
import vw from 'rpf/un/vw';

const SafeArea = styled.div`
  position: relative;
  width: ${vw(750)};
  height: ${p => vw(p.maxHeight)};

  @media (min-aspect-ratio: 750 / ${p => p.maxHeight}) {
    height: 100%;
  }
`;

SafeArea.defaultProps = {
  maxHeight: 1206
};

export default SafeArea;

import styled from 'styled-components/macro';
import vw from '../../un/vw';

function isNum(x) {
  return typeof x === 'number';
}

const Sprite = styled.div`
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: ${p => (p.image ? `url('${p.image}')` : 'none')};
  display: block;
  width: ${p => (isNum(p.width) ? vw(p.width) : p.width)};
  height: ${p => (isNum(p.height) ? vw(p.height) : p.height)};
`;
Sprite.defaultProps = {
  width: 0,
  height: 0
};

export default Sprite;

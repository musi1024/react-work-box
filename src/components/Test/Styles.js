import styled from 'styled-components/macro';
import vw from 'rpf/un/vw';

export const Enter = styled.button`
  position: fixed;
  left: 0;
  top: 50%;
  z-index: 99;
`;

export const Content = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: ${vw(620)};
  height: 70%;
  padding: ${vw(20)} ${vw(20)};
  background-color: #eeeeee;
  border: 1px solid #dfdfdd;
  border-radius: ${vw(12)};
  text-align: start;
  z-index: 99;
  input {
    outline: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;

export const ScrollWrap = styled.div.attrs({ className: 'scrollable' })`
  width: 100%;
  height: 85%;
  margin: ${vw(20)} 0;
  padding: 0 ${vw(20)} 0 ${vw(10)};
  overflow-y: auto;
`;

export const CloseBtn = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: ${vw(60)};
  height: ${vw(60)};
  background-color: #000000;
  color: #ffffff;
  border-bottom-left-radius: 50%;
  border-top-right-radius: ${vw(12)};
  font-size: ${vw(40)};
  text-align: center;
`;

export const ItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${vw(30)};
`;

export const ItemMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

export const Btn = styled.div`
  min-width: ${vw(100)};
  height: ${vw(60)};
  margin-left: ${vw(90)};
  background-color: #000000;
  color: #ffffff;
  border-radius: ${vw(12)};
  font-size: ${vw(24)};
  line-height: ${vw(60)};
  text-align: center;
`;

export const Input = styled.input.attrs({ type: 'text' })`
  width: ${vw(340)};
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-top: ${vw(10)};
`;

export const RadioWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${vw(10)};
  font-size: ${vw(22)};
  line-height: 1.2;
`;

export const Radio = styled.input.attrs({ type: 'radio' })`
  margin-right: ${vw(10)};
`;

export const Title = styled.div`
  margin-bottom: ${vw(8)};
  font-size: ${vw(30)};
  font-weight: bold;
`;

export const SmTitle = styled.div`
  margin: ${vw(6)};
  font-size: ${vw(24)};
  font-weight: bold;
`;

export const Tips = styled.div`
  margin-top: ${vw(8)};
  font-size: ${vw(22)};
`;

export const MultipleItemWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${vw(10)};
  line-height: 1.2;
`;

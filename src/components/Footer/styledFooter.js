import styled from 'styled-components';

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 82px;
  border-radius: 10px;
`

export const AddContainer = styled.div`
  position: absolute;
  right: 30px;
  bottom: 18px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgb(39, 142, 165);
  box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    background-color: rgb(31, 66, 135);
  }
  h1 {
    text-align: center;
    line-height: 60px;
    font-size: 35px;
    color: white;
    cursor: pointer;
  }
`

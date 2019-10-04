import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 80%;
  position: absolute;
  top: 36%;
  left: 10%;
  padding: 10px;
  box-sizing: border-box;
  z-index: 200;
  background-color: rgb(229, 229, 229);
  box-shadow: 1px 1px 1px 1px rgba(31, 66, 135, 0.2);
  display: ${props => props.display === 'show' ? 'block' : 'none'};
`
export const Form = styled.div`

`
export const Error = styled.h5`
  color: red;
`
export const Close = styled.div`
  img {
    width: 20px;
    height: 20px;
    margin-left: 240px;
    cursor: pointer;
  }
`
export const FormInput = styled.input `
  width: 100%;
  padding: 10px 18px;
  margin: 6px 0;
  display: inline-block;
  border: ${props => props.type === 'button' ? 'none': '1px solid #ccc'};
  border-radius: 4px;
  box-sizing: border-box;
  background-color: ${props => props.type === 'button' ? 'rgb(39, 142, 165)' : 'white'};
  color: ${props => props.type === 'button' ? 'white': 'black'};
  cursor: ${props => props.type === 'button' ? 'pointer': 'auto'};
  :hover{
    background-color: ${props => props.type === 'button' ? 'rgb(31, 66, 135)' : 'white'};
  } 
`

export const Select = styled.select`
  width: 100%;
  padding: 10px 18px;
  margin: 6px 0;
  display: inline-block;
  border: '1px solid #ccc';
  border-radius: 4px;
  box-sizing: border-box;
  background-color: white
  color: ${props => props.type === 'button' ? 'white': 'black'}
`

export const Option = styled.option`

`
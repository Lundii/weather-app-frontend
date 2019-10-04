import styled from 'styled-components';

export const HeaderContainer = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 82px;
  padding: 0 10px;
  background-color: rgb(39, 142, 165);
  box-sizing: border-box;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
`
export const Top = styled.div`
  display: flex;
`

export const MenuIcon = styled.img`
  width: 35px;
  height: 30px;
  margin-top: 5px;
`

export const Heading1 = styled.h3`
 font-family: 'Questrial', sans-serif;
  text-align: center;
  color: white;
  font-weight: 100;
  font-size: 16px;
  line-height: 45px;
`

export const Date = styled(Heading1)`
  margin-left: 160px;
`
export const Heading2 = styled(Heading1)`
  
`
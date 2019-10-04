import styled from 'styled-components';

export const CardsContainer = styled.div`
  padding: 15px;
  box-sizing: border-box;
  max-height: 474px;
  overflow-y: scroll;
  filter: ${props => props.display === 'hide'? 'blur(0px)' : 'blur(2px)'};
  -webkit-filter: ${props => props.display === 'hide'? 'blur(0px)' : 'blur(3px)'};
  pointer-events:${props => props.display === 'hide'? 'all' : 'none'};
`

export const Card = styled.div`
  display: grid;
  grid-template-columns: 30% 40% 30%;
  width: 100%;
  height: 80px;
  margin: 0 auto;
  margin-top: 10px;
  background-color: rgb(31, 66, 135);
  border-radius: 10px;
  box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.2);
  :hover {
    margin-top: 8px;
  }
`

export const CardItems = styled.div`
`

export const HighTempContainer = styled.div `
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
    color: white;
    font-family: 'Barlow', sans-serif;
    font-weight: 100;
    font-size: 40px;
    line-height: 45px;

    sup {
      font-family: 'Barlow', sans-serif;
      font-weight: 100;
      font-size: 20px;
    }
  }
  h4 {
    text-align: center;
    color: white;
    font-family: 'Barlow', sans-serif;
    font-weight: 100;
    font-size: 12px;
    line-height: 25px;
  }
`
export const DescriptionContainer = styled.div `
  h2 {
    text-align: center;
    color: white;
    font-family: 'Barlow', sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 40px;
  }
  h3 {
    text-align: center;
    color: white;
    font-family: 'Barlow', sans-serif;
    font-weight: 100;
    font-size: 12px;
  }
`

export const LowTempContainer = styled.div `
  display: flex;
  flex-direction: column;
  
  h3 {
    text-align: center;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }

  h2 {
    text-align: center;
    color: white;
    font-family: 'Barlow', sans-serif;
    font-weight: 100;
    font-size: 30px;
    line-height: 25px;

    sup {
      font-family: 'Barlow', sans-serif;
      font-weight: 100;
      font-size: 20px;
    }
  }
  
  h4 {
    text-align: center;
    color: white;
    font-family: 'Barlow', sans-serif;
    font-weight: 100;
    font-size: 12px;
    line-height: 25px;
  }
`

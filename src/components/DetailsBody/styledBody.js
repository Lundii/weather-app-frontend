import styled from 'styled-components';

export const BodyContainer = styled.div`
  margin: 15px;
  height: 570px;
  background-color: rgb(31, 66, 135);
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 200px;
  margin: 0 auto;
`

export const Image = styled.div`
  width: 172px;
  height: 102px;
  margin: 0 auto;
  background-image: url("http://openweathermap.org/img/wn/${props => props.icon}@2x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const Location = styled.h3`
  text-align: center;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  margin-top: 10px;px;
`

export const MainWeather = styled.h3`
  text-align: center;
  color: white;
  font-family: 'Barlow', sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 50px;
`

export const Temperature = styled.div`
  text-align: center;
  color: white;
  font-family: 'Barlow', sans-serif;
  font-weight: 100;
  font-size: 100px;

    sup {
      font-family: 'Barlow', sans-serif;
      font-weight: 100;
      font-size: 40px;
    }
`

export const Description = styled.h3`
  text-align: center;
  color: white;
  font-family: 'Barlow', sans-serif;
  font-weight: 200;
  font-size: 18px;
`

export const ExtraDetail = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 10px;
  h3 {
    text-align: center;
    color: white;
    font-family: 'Barlow', sans-serif;
    font-weight: 100;
    font-size: 14px;
  }
`

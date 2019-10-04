import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { WeatherContext } from '../../context/weatherContext'
import { ModalContext } from '../../context/modalContext';
import { 
  CardsContainer, Card, CardItems, HighTempContainer, 
  DescriptionContainer, LowTempContainer,
} from './styledWeatherCards';

const WeatherCards = (props) => {

  const [weatherData] = useContext(WeatherContext);
  const [ modalState ] = useContext(ModalContext);

  const getCities = (cities) => {
    return cities.map((currentCity, index) => {
      const { id, highTemp, lowTemp, description, city, countryCode, mainWeather} = currentCity;

      return (
        <Link key={id} to={`/city/${index}`}>
          <Card>
            <CardItems>
              <HighTemp temp={highTemp} />
            </CardItems>
            <CardItems>
              <Description 
                desc={description}
                main={mainWeather}
              />
            </CardItems>
            <CardItems>
              <LowTemp 
                temp={lowTemp} 
                city={city}
                countryCode={countryCode}
              />
            </CardItems>
          </Card>
        </Link>
      )
    })
  } 

  const cities = getCities(weatherData);
  const { display } = modalState;

  return (
    <CardsContainer  display={display}>
      {cities}
    </CardsContainer>
  )
};

const HighTemp = ({temp}) => {
  return (
    <HighTempContainer>
      <h1>{temp}<sup>0</sup></h1>
      <h4>High</h4>
    </HighTempContainer>
  )
} 

const Description = ({desc, main}) => {
  return (
    <DescriptionContainer>
      <h2>{main}</h2>
      <h3>{desc}</h3>
    </DescriptionContainer>
  )
} 


const LowTemp = ({temp, city, countryCode}) => {
  return (
    <LowTempContainer>
      <h3>{city}, {countryCode}</h3>
      <h2>{temp}<sup>0</sup></h2>
      <h4>Low</h4>
    </LowTempContainer>
  )

} 

export default WeatherCards;

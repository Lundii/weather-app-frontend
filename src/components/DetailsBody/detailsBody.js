import React, { useContext } from 'react';
import { WeatherContext } from '../../context/weatherContext'
import { 
  BodyContainer, Details, Image, Location, MainWeather, Description,
  Temperature, ExtraDetail
} from './styledBody';

const DetailsBody = ({id}) => {
  const [weatherData] = useContext(WeatherContext);
  const { highTemp, lowTemp, description, city, countryCode, mainWeather, moreData, icon } = weatherData[id]
  const data = {
    "Max Temp": highTemp,
    "Min Temp": lowTemp,
    "Wind Speed": moreData.windSpeed,
    "Sunrise": moreData.sunrise,
    "Sunset": moreData.sunset,
    "Humidity": moreData.humidity,
    "Pressure": moreData.humidity,
  }

  const extraData = (data) => {

    const keys = Object.keys(data);
    const data1 = [];
    keys.forEach((key, index) => {
      const component = 
        <ExtraDetail key={index}>
          <h3>{key}</h3>
          <h3>{data[key]}</h3>
        </ExtraDetail>
        data1.push(component);
    })  
    return data1;
  }

  const extras = extraData(data);

  return (
    <BodyContainer>
      <Details>
      <Location>{city}, {countryCode}</Location>
      <MainWeather>{mainWeather}</MainWeather>
        <Image icon={icon} />
        <Temperature>{highTemp}<sup>0</sup></Temperature>
      <Description>{description}</Description>
        {extras}
      </Details>
    </BodyContainer>
  );
};

export default DetailsBody;

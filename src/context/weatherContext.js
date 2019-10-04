import React, { useState, createContext } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = (props) => {
  const [weatherData, updateWeatherData] = useState([]);

  return (
    <WeatherContext.Provider value={[weatherData, updateWeatherData]}>
      {props.children}
    </WeatherContext.Provider>
  )
}
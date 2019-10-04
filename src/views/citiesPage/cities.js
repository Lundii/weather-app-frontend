import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WeatherCards from '../../components/weatherCards';
import Modal from '../../components/modal';
import { Wrapper } from './styledCities';

const Cities = (props) => {
  const date = new Date();
  return (
    <Wrapper>
      <Header 
        date={date.toDateString()}
        desc1={"Cities"}
        desc2={"Weather Now"}
      />
      <Modal />
      <WeatherCards />
      <Footer />
    </Wrapper>
  )
}

export default Cities;
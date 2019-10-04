import React from 'react';
import Header from '../Header';
import DetailsBody from '../DetailsBody';
import { WeatherProvider } from '../../context/weatherContext';
import { ModalProvider } from '../../context/modalContext';
import { Wrapper } from './styledContainer';

const Container = (props) => {
  return (
    <WeatherProvider>
      <ModalProvider>
        <Wrapper>
          <Header />
          <DetailsBody />
        </Wrapper>
      </ModalProvider>
    </WeatherProvider>
  )
}

export default Container;
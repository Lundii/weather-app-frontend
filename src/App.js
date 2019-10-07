import React from 'react';
import { Switch, Route, HashRouter } from "react-router-dom";
import { RootContainer } from './styledApp';
import { WeatherProvider } from './context/weatherContext';
import { ModalProvider } from './context/modalContext';
import CityPage from './views/citiesPage';
import DetailsPage from './views/detailsPage'

function App() {
  return (
    <WeatherProvider>
      <ModalProvider>
        <RootContainer>
        <HashRouter basename="/">
          <Switch>
            <Route exact path="/" component={CityPage} />
            <Route path="/city/:id" component={DetailsPage} />
          </Switch>
        </HashRouter>
        </RootContainer>
      </ModalProvider>
    </WeatherProvider>
  );
}

export default App;

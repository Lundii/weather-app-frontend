import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
        <Router>
          <Switch>
            <Route exact path="/" component={CityPage} />
            <Route path="/city/:id" component={DetailsPage} />
          </Switch>
        </Router>
        </RootContainer>
      </ModalProvider>
    </WeatherProvider>
  );
}

export default App;

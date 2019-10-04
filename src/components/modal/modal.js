import React, { useEffect, useContext } from 'react';
import { ModalContainer, Form, FormInput, Close, Select, Option, Error } from './styledModal';
import { WeatherContext } from '../../context/weatherContext'
import { ModalContext } from '../../context/modalContext'
import closeIcon from '../../images/weatherimg4.png';

const Modal = () => {

  const [weatherData, updateWeatherData] = useContext(WeatherContext);
  const [modalState, updateModalState] = useContext(ModalContext);
  const { cityName, countryCode, countries } = modalState;

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch('https://weather-app-backend-123.herokuapp.com/api/v1/countries');
      const countries = await response.json();
      updateModalState(prevState => ({ ...prevState, countries: {...countries}}))
    }
    fetchCountries();
  }, []);

  const closeModal = () => {
    updateModalState(prevState => ({ ...prevState, display: 'hide', countryCode: '', cityName: '', error: ''}));
  };

  const updateForm = (e, field) => {
    e.persist();
    updateModalState(prevState => ({ ...prevState, [`${field}`]: e.target.value, error: '' }))
    e.preventDefault()
  }

  const addCity = async () => {

    const exitingLocation = weatherData.filter((data) => {
      return (data.countryCode.toLowerCase() === countryCode.toLowerCase() &&
        data.city.toLowerCase() === cityName.toLowerCase()
      ) 
    })

    if (!cityName || !countryCode ) {
      const error = "Please enter all fields";
      updateModalState(prevState => ({ ...prevState, error}))
      return;
    }
    if(exitingLocation.length) {
      const error = "Location already displayed";
      updateModalState(prevState => ({ ...prevState, error}))
      return;
    }

    const response = await fetch(`https://weather-app-backend-123.herokuapp.com/api/v1/current-weather?cityName=${cityName}&countryCode=${countryCode}`);
    const city = await response.json();
    if (response.status !== 200) {
      const error = "Error fetching data, Please confirm your city and/or country or Internet Connection";
      updateModalState(prevState => ({ ...prevState, error}))
      return;
    }
    updateWeatherData(prevState => [...prevState, city])
    updateModalState(prevState => ({ ...prevState, display: 'hide', countryCode: '', cityName: '', error: ''}))
  } 

  const getCountries = () => {
    const keys = Object.keys(countries);
    const options = [];
    keys.sort();
    keys.forEach((key, index) => {
        options.push(<Option key={index} value={key}>{ countries[`${key}`]}</Option>);
    })
    return options;
  }

  const countrylist = getCountries();

  return (
    <ModalContainer display={modalState.display}>
    <Close onClick={() => { closeModal() }}>
      <img src={closeIcon} alt="close" />
    </Close>
      <Form>
        <Error>{modalState.error}</Error>
        <FormInput type="text" placeholder="City name" value={cityName} onChange={(e) => {updateForm(e, 'cityName')}} />
        <Select  defaultValue="Select country" onChange={(e) => {updateForm(e, 'countryCode')}}>
          <Option disabled>Select country</Option>
          { countrylist }
        </Select>
        <FormInput type="button" value="Add" onClick={() => {addCity()}} />
      </Form>
    </ModalContainer>
  )
}

export default Modal;

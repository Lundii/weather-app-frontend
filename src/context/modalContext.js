import React, { useState, createContext } from 'react';

export const ModalContext = createContext();

export const ModalProvider = (props) => {
  const [modalState, updateModalState] = useState({
    error: '',
    display: 'hide',
    cityName: '',
    countryCode: '',
    countries: {}
  });

  return (
    <ModalContext.Provider value={[modalState, updateModalState]}>
      {props.children}
    </ModalContext.Provider>
  )
}
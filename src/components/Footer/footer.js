import React, { useContext } from 'react';
import { ModalContext } from '../../context/modalContext'
import { FooterContainer, AddContainer } from './styledFooter';

const Footer = (props) => {
  const [modalState, updateModalState] = useContext(ModalContext);

  const showModal = () => {
    updateModalState(prevState => ({ ...prevState, display: 'show'}));
  }

  return (
    <FooterContainer>
      <AddButton showModal={showModal} />
    </FooterContainer>
  )
}


const AddButton = ({showModal}) => {
  return (
    <AddContainer onClick={() => {showModal()}}>
      <h1>+</h1>
    </AddContainer>
  )
}
export default Footer;

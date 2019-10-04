import React from 'react';
import { Link } from "react-router-dom";
import { HeaderContainer, Top, MenuIcon, Date, Heading1, Heading2 } from './styledHeader';
import image from '../../images/weatherimg3.png';

const Header = (props) => {
  const { desc1, desc2, date} = props;
  return (
    <HeaderContainer>
      <Top>
        <Link to="/"><MenuIcon src={image} /></Link>
        <Heading1>{desc1}</Heading1>
        <Date>{date}</Date>
      </Top>
      <Heading2>{desc2}</Heading2>
    </HeaderContainer>
  );
};

export default Header;
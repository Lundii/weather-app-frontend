import React from 'react';
import Header from '../../components/Header';
import DetailsBody from '../../components/DetailsBody';
import { Wrapper } from './styledDetail';

const DetailsPage = (props) => {
  const { id } = props.match.params;
  const date = new Date();

  return (
    <Wrapper>
      <Header 
        date={date.toDateString()}
        desc1={"Deta"}
        desc2={"Weather Now"}
      />
      <DetailsBody id={id} />
    </Wrapper>
  )
}

export default DetailsPage;

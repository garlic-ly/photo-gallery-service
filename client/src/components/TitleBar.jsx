import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.div `
  font-family: Circular, Roboto, "Helvetica Neue", sans-serif;
  color: #222222;
  font-size: 26px;
  line-height: 30px;
`;
const ButtonReview = styled.button`
  background: transparent;
  font-family: Circular, Roboto, "Helvetica Neue", sans-serif;
  color: #717171;
  font-size: 14px;
  line-height: 20px;
`;

const ButtonSuperhost = styled.button`
  background: transparent;
  font-family: Circular, Roboto, "Helvetica Neue", sans-serif;
  color: #717171;
  font-size: 14px;
  line-height: 20px;
`;

const ButtonLocation = styled.button`
  background: transparent;
  font-family: Circular, Roboto, "Helvetica Neue", sans-serif;
  color: #717171;
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
  text-decoration: underline;

`;

const ButtonShareSave = styled.button`
  background: transparent;
  font-family: Circular, Roboto, "Helvetica Neue", sans-serif;
  color: #717171;
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
  text-decoration: underline;
`;

const TitleBar = ({data}) => {

  return (
    <div>
      <Title> {data.room_name}</Title>
      <ButtonReview>{data.average_review_point} ({data.number_of_reviews})</ButtonReview>
      <ButtonSuperhost> {data.average_review_point === 1 ? 'Superhost': 'NotASuperhost'} </ButtonSuperhost>
      <ButtonLocation> {data.location_city}, {data.location_country} </ButtonLocation>
      <ButtonShareSave> Share </ButtonShareSave>
      <ButtonShareSave> Save </ButtonShareSave>
    </div>
  )
};

TitleBar.propTypes= {
  data: PropTypes.object,
};

export default TitleBar;


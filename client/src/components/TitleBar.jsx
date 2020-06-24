import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import SaveSVG from '../icons/save.svg';
import ShareSVG from '../icons/share.svg';
import SuperhostSVG from '../icons/superhost.svg';


const Wrapper= styled.div`
  display: block;
  box-sizing: border-box;
  max-width: 1140px;
  margin: auto;
`;

const Title = styled.div `
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  color: #222222;
  font-size: 26px;
  line-height: 30px;
`;
const ButtonReview = styled.button`
  border: none;
  background: transparent;
  font-family: Circular, Roboto, "Helvetica Neue", sans-serif;
  color: #717171;
  font-size: 14px;
  line-height: 20px;
`;

const ButtonSuperhost = styled.button`
  border: none;
  background: transparent;
  font-family: Circular, Roboto, "Helvetica Neue", sans-serif;
  color: #717171;
  font-size: 14px;
  line-height: 20px;
`;

const ButtonLocation = styled.button`
  border: none;
  background: transparent;
  font-family: Circular, Roboto, "Helvetica Neue", sans-serif;
  color: #717171;
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
  text-decoration: underline;
`;

const ButtonShareSave = styled.button`
  border: none;
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
    <Wrapper>
      <Title> {data.room_name}</Title>
      <Row justifyContent={{ sm: "center", md: "flex-end" }} alignContent={{md:"flex-end" }} gutter="16px">
        <Col xs={3} md={6}>
        <ButtonReview>{data.average_review_point} ({data.number_of_reviews})</ButtonReview>
        <ButtonSuperhost> <img src={SuperhostSVG}/> {data.average_review_point === 1 ? 'Superhost': 'NotASuperhost'} </ButtonSuperhost>
        <ButtonLocation> {data.location_city}, {data.location_country} </ButtonLocation>

        </Col>
        <Col xs={3} md={6}>
          <ButtonShareSave> <img src={ShareSVG}/>  Share </ButtonShareSave>
          <ButtonShareSave> <img src={SaveSVG}/> Save </ButtonShareSave>
        </Col>
      </Row>
    </Wrapper>
  )
};

TitleBar.propTypes= {
  data: PropTypes.object,
};

export default TitleBar;


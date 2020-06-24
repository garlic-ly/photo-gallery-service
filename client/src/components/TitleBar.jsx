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
`;

const Section = styled.section`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  display: block;
  box-sizing: border-box;
  max-width: 1120px;
  margin: auto;
  height: 88px;
`;

const WrapperInner = styled.div`
  display:block;
  box-sizing: border-box;
  padding-top: 24px;
  margin-bottom:24px;
  position: relative
`;

const Title = styled.div `
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  box-sizing: border-box;
  margin-bottom: 4px;
  color: #222222;
  font-size: 26px;
  font-weight: 600;
  line-height: 30px;
  height: 30px;
`;
const ButtonReview = styled.button`
  border: none;
  background: transparent;
  color: #717171;
  font-size: 14px;
  line-height: 20px;
`;

const ButtonSuperhost = styled.button`
  border: none;
  background: transparent;
  color: #717171;
  font-size: 14px;
  line-height: 20px;
`;

const ButtonLocation = styled.button`
  border: none;
  background: transparent;
  color: #717171;
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
  text-decoration: underline;
`;

const ButtonShareSave = styled.button`
  border: none;
  background: transparent;
  color: #717171;
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
  text-decoration: underline;
`;

const TitleBar = ({data}) => {
  return (
    <Wrapper>
      <Section>
        <WrapperInner>
          <Title> {data.room_name.slice(0,1).toUpperCase() + data.room_name.slice(1)} </Title>

        </WrapperInner>
      </Section>
    </Wrapper>
  )
};

TitleBar.propTypes= {
  data: PropTypes.object,
};

export default TitleBar;

{/* <img src={SaveSVG}/> */}
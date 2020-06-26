import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

const WrapperOuter = styled.div`
  display: block;
  box-sizing: border-box;
`;

const WrapperInner = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  box-sizing: border-box;
  width: 1140px;
  margin: auto;
  position: relative;
`;

const Box1 = styled.div`
  flex: 2;
`;

const Box23 = styled.div`
  flex: 1;
`;

const Box45 = styled.div`
  flex: 1;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image1 = styled.img`
  cursor: pointer;
  display: block;
  height: 560px;
  width: 560px;
  object-fit: cover;
  border-radius: 12px 0px 0px 12px;
`;
const Image2 = styled.img`
  cursor: pointer;
  display: block;
  height: 272px;
  width: 270px;
  object-fit: cover;
  padding: 0px 5px 10px 5px;
`;
const Image3 = styled.img`
  cursor: pointer;
  display: block;
  width: 270px;
  height: 270px;
  object-fit: cover;
  padding: 5px 5px 0px 5px;
`;

const Image4 = styled.img`
  cursor: pointer;
  display: block;
  height: 272px;
  width: 270px;
  object-fit: cover;
  border-radius: 0px 12px 0px 0px;
  padding: 0px 0px 10px 5px;
`;
const Image5 = styled.img`
  cursor: pointer;
  display: block;
  width: 270px;
  height: 270px;
  object-fit: cover;
  border-radius: 0px 0px 12px 0px;
  padding: 5px 0px 0px 5px;
`;

const ShowAllPhotos = styled.div`
  display:block;
  position: absolute;
  align-items: baseline;
  bottom: 24px;
  right: 24px;
  z-index: 3;
  box-sizing: border-box;
`;

const ButtonShowAllPhotos = styled.div`
  cursor: pointer;
  display: inline-block;
  position: relative;
  text-align: center;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 14px;
  line-weight: 18px;
  font-weight: 600;
  padding: 7px 15px 7px 15px;
  border-radius: 8px;
  border: 1px solid #222222;
  background: #ffffff;
`;

const TextShowAllPhotos = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const ImagesList = ({ data, toggle }) => {
  return (
    <WrapperOuter>
      <WrapperInner>
        <Box1>
          <ImageContainer> <Image1 src={data.images[0]} onClick={() => { toggle() }} /> </ImageContainer>
        </Box1>
        <Box23>
          <ImageContainer> <Image2 src={data.images[1]} onClick={() => { toggle() }} /> </ImageContainer>
          <ImageContainer> <Image3 src={data.images[2]} onClick={() => { toggle() }} /> </ImageContainer>
        </Box23>
        <Box45>
          <ImageContainer> <Image4 src={data.images[3]} onClick={() => { toggle() }} /> </ImageContainer>
          <ImageContainer> <Image5 src={data.images[4]} onClick={() => { toggle() }} /> </ImageContainer>
          <ShowAllPhotos>
            <ButtonShowAllPhotos>
              <TextShowAllPhotos onClick={() => { toggle() }} >Show all photos</TextShowAllPhotos>
            </ButtonShowAllPhotos>
          </ShowAllPhotos>
        </Box45>
      </WrapperInner>
    </WrapperOuter>
  )
}

ImagesList.propTypes = {
  data: PropTypes.object,
  toggle: PropTypes.func,
};

export default ImagesList;

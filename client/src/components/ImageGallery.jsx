import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';

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

const Image1Container = styled.div`
  flex: 1;
`;

const Image2Container = styled.div`
  flex: 1;
`;

const Image3Container = styled.div`
  flex: 1;
`;

const Image4Container = styled.div`
  flex: 1;
`;

const Image5Container = styled.div`
  flex: 1;
`;

const Image1 = styled.img`
  display: block;
  height: 560px;
  width: 560px;
  object-fit: cover;
  border-radius: 12px 0px 0px 12px;
`
const Image2 = styled.img`
  display: block;
  height: 272px;
  width: 270px;
  object-fit: cover;
  padding: 0px 5px 10px 5px
`;
const Image3 = styled.img`
  display: block;
  width: 270px;
  height: 270px;
  object-fit: cover;
  padding: 5px 5px 0px 5px
`;

const Image4 = styled.img`
  display: block;
  height: 272px;
  width: 270px;
  object-fit: cover;
  border-radius: 0px 12px 0px 0px;
  padding: 0px 0px 10px 5px
`;
const Image5 = styled.img`
  display: block;
  width: 270px;
  height: 270px;
  object-fit: cover;
  border-radius: 0px 0px 12px 0px;
  padding: 5px 0px 0px 5px

`;

const ImagesList = ({data}) => {
  return (
    <WrapperOuter>
      <WrapperInner>
        <Box1>
          <Image1Container> <Image1 src={data.images[0]}/> </Image1Container>
        </Box1>
        <Box23>
          <Image2Container> <Image2 src={data.images[1]}/> </Image2Container>
          <Image3Container> <Image3 src={data.images[2]}/> </Image3Container>
        </Box23>
        <Box45>
          <Image4Container> <Image4 src={data.images[3]}/> </Image4Container>
          <Image5Container> <Image5 src={data.images[4]}/> </Image5Container>
        </Box45>
      </WrapperInner>
    </WrapperOuter>
  )
}

ImagesList.propTypes= {
  data: PropTypes.object,
};

export default ImagesList;

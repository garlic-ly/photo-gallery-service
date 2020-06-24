import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';

const Container = styled.div`
  display: flex;
  flex-wrap; wrap;
`;

const Box1 = styled.div`
  display: flex;
  flex: 2;
  flex-flow: row nowrap;
  align-items:center;
`;


const Box2 = styled.div`
  flex: 1;
  object-fit: cover;

`;

const ImagesList = ({data}) => {
    return (
      <Container>
        <Box1> box 1</Box1>
        <Box2> box 2</Box2>
        <Box2> box 2 </Box2>
      </Container>
    )
}

ImagesList.propTypes= {
  data: PropTypes.object,
};

export default ImagesList;

//      <Box>
      // <Row justifyContent={{ sm: "flex-start", lg: "flex-end" }} gutter="16px">
      //   <Col xs={3} md={6}> <img src={data.images[0]}></img>  </Col>
      //   <Col xs={3} md={6}>
      //     <Row>
      //       <Col> <img src={data.images[1]}></img> </Col>
      //       <Col> <img src={data.images[2]}></img> </Col>
      //     </Row>
      //     <Row>
      //       <Col><img src={data.images[3]}></img>  </Col>
      //       <Col> <img src={data.images[4]}></img> </Col>
      //     </Row>

      //   </Col>
      // </Row>
      // </Box>



// <Grid columns={4} gap="2px">
// <Cell height={2} width={2}> <img src={data.images[0]}></img> </Cell>
// <Cell> <img src={data.images[1]}></img> </Cell>
// <Cell> <img src={data.images[2]}></img> </Cell>
// <Cell> <img src={data.images[3]}></img> </Cell>
// <Cell> <img src={data.images[4]}></img> </Cell>
// </Grid>


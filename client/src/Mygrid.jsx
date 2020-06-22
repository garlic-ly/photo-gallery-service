import React from "react";
import { Grid, Cell } from "styled-css-grid";


const MyGrid = () => {
  return (
  <Grid columns={4} gap="2px" grid-template-columns="200px, 200px, 200px, 200px">
    <Cell height={2} width={2}> <img src='https://rooms-images-128.s3-us-west-1.amazonaws.com/image1.jpg'></img> </Cell>
    <Cell width="200px"><img src='https://rooms-images-128.s3-us-west-1.amazonaws.com/image2.jpg'></img></Cell>
    <Cell width="200px"><img src='https://rooms-images-128.s3-us-west-1.amazonaws.com/image3.jpg'></img></Cell>
    <Cell width="200px"><img src='https://rooms-images-128.s3-us-west-1.amazonaws.com/image4.jpg'></img></Cell>
    <Cell width="200px"><img src='https://rooms-images-128.s3-us-west-1.amazonaws.com/image5.jpg'></img></Cell>
  </Grid>

  )
};

export default MyGrid;
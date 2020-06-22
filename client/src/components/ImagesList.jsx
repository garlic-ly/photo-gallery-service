import React from 'react';
import { Grid, Cell } from "styled-css-grid";

const ImagesList = (props) => {
return (
  <Grid columns={4} gap="2px">
    <Cell height={2} width={2}> <img src={props.data.images[0]}></img> </Cell>
    <Cell> <img src={props.data.images[1]}></img> </Cell>
    <Cell> <img src={props.data.images[2]}></img> </Cell>
    <Cell> <img src={props.data.images[3]}></img> </Cell>
    <Cell> <img src={props.data.images[4]}></img> </Cell>
  </Grid>
  )
}

export default ImagesList;


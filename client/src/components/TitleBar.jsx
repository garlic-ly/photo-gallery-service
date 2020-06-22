
import React from 'react';
import Button from './Button.jsx';

const TitleBar = (props) => {

  return (
    <div>
      <h1> {props.data.room_name}</h1>
      <Button>{props.data.average_review_point}</Button>
      <Button> {props.data.number_of_reviews} </Button>
      <a> {props.data.location_city} ,  {props.data.location_country} </a>
      <Button> Share </Button>
      <Button> Save </Button>
    </div>
  )
};

export default TitleBar;


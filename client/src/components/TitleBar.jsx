
import React from 'react';
import Button from './Button.jsx';

const TitleBar = ({data}) => {

  return (
    <div>
      <h1> {data.room_name}</h1>
      <Button>{data.average_review_point}</Button>
      <Button> {data.number_of_reviews} </Button>
      <a> {data.location_city} ,  {data.location_country} </a>
      <Button> Share </Button>
      <Button> Save </Button>
    </div>
  )
};

export default TitleBar;


import React from 'react';
import TitleBar from './TitleBar.jsx';
import ImagesList from './ImagesList.jsx';

var mockData = {
  room_name: 'Modern Lounge Ultra clean',
  location_city: 'Santa Barbara',
  location_country: 'United States',
  average_review_point: '4.92',
  number_of_reviews: 843,
  is_superhost: true,
  images: [
    'https://rooms-images-128.s3-us-west-1.amazonaws.com/image1.jpg',
    'https://rooms-images-128.s3-us-west-1.amazonaws.com/image2.jpg',
    'https://rooms-images-128.s3-us-west-1.amazonaws.com/image3.jpg',
    'https://rooms-images-128.s3-us-west-1.amazonaws.com/image4.jpg',
    'https://rooms-images-128.s3-us-west-1.amazonaws.com/image5.jpg'
  ]
};

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: mockData,
    }
  }

  render () {
    return (
      <div className='container'>
        <TitleBar data={this.state.data}/>
        <ImagesList data={this.state.data}/>
      </div>
    )
  }
};

export default App;
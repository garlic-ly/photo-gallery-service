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

  getRoomData (id) {
    fetch(`/api/rooms/${id}`)
      .then(response => response.json())
      .then(result => {
        const imagesArr = []
        result.forEach(ele => {
          imagesArr.push(ele.image_url);
        });
        const data = {
          room_name: result[0].room_name,
          location_city: result[0].location_city,
          location_country: result[0].location_country,
          average_review_point: result[0].average_review_point,
          number_of_reviews: result[0].number_of_reviews,
          is_superhost: result[0].is_superhost,
          images: imagesArr
        };

        this.setState({
          data: data
        });
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }

  componentDidMount() {
    this.getRoomData(this.props.selectedRoom);
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
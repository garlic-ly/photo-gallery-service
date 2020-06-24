import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar.jsx';
import ImageGallery from './ImageGallery.jsx';
import axios from 'axios';
import styled from 'styled-components';

var initialState = {
  room_name: '',
  location_city: '',
  location_country: '',
  average_review_point: '',
  number_of_reviews: '',
  is_superhost: '',
  images: [
    '','', '', '', '']
};

const Body = styled.div `
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  background-color: #fff;
`

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      data: initialState,
    }
    this.getRoomData = this.getRoomData.bind(this);
  }

  getRoomData (id) {
    axios.get(`/api/rooms/${id}`)
      .then(result => {
        const data = result.data;
        const imagesArr = [];
        data.forEach(ele => {
          imagesArr.push(ele.image_url);
        });
        const oneRoom = {
          room_name: data[0].room_name,
          location_city: data[0].location_city,
          location_country: data[0].location_country,
          average_review_point: data[0].average_review_point,
          number_of_reviews: data[0].number_of_reviews,
          is_superhost: data[0].is_superhost,
          images: imagesArr
        };

        this.setState({
          isLoaded: true,
          data: oneRoom,
        });
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error
        })
      });
  }

  componentDidMount() {
    const id = window.location.pathname.split('/')[2];
    this.getRoomData(id);
  }

  render () {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <Text>Error: {error.message}</Text>;
    } else if (!isLoaded) {
      return <Text> Loading... </Text>
    } else {
      return (
        <Body className='container'>
          <TitleBar data={this.state.data}/>
          <ImageGallery data={this.state.data}/>
        </Body>
      )
    }
  }
}

export default App;
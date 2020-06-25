import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar.jsx';
import ImageGallery from './ImageGallery.jsx';
import ImageList from './ImageList.jsx';

var initialState = {
  room_name: '',
  location_city: '',
  location_country: '',
  average_review_point: '',
  number_of_reviews: '',
  is_superhost: '',
  images: [
    '', '', '', '', '']
};

const Body = styled.div`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  background-color: #fff;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      data: initialState,
      imageList: false,
    }
    this.getRoomData = this.getRoomData.bind(this);
    this.toggleMainAndPhotoList = this.toggleMainAndPhotoList.bind(this);
  }

  toggleMainAndPhotoList() {
    this.setState({
      imageList: !this.state.imageList,
    })
  }

  getRoomData(id) {
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

  renderView() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <Body>Error: {error.message}</Body>;
    } else if (!isLoaded) {
      return <Body> Loading... </Body>
    } else if (this.state.imageList) {
      return <ImageList images={this.state.data.images} toggle={this.toggleMainAndPhotoList} />
    } else {
      return (
        <Body className='container'>
          <TitleBar data={this.state.data} />
          <ImageGallery data={this.state.data} toggle={this.toggleMainAndPhotoList} />
        </Body>
      )
    }
  }

  render() {
    return this.renderView();
  }
}

export default App;
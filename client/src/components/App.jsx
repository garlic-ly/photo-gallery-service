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
  is_favorite: '',
  images: [
    '', '', '', '', ''],
  image_desc: [
    '', '', '', '', ''],
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
      clickedPhoto: 0,
      is_favorite: 0,
    }
    this.getRoomData = this.getRoomData.bind(this);
    this.toggleMainAndPhotoList = this.toggleMainAndPhotoList.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.updateFavorite = this.updateFavorite.bind(this);
  }

  toggleMainAndPhotoList(clickedPhoto) {
    this.setState({
      clickedPhoto: clickedPhoto,
      imageList: !this.state.imageList,
    })
  }

  toggleFavorite() {
    this.setState({
      is_favorite: !this.state.is_favorite,
    })
    this.updateFavorite();
  }

  getRoomData(id) {
    axios.get(`/api/rooms/${id}`)
      .then(result => {
        const data = result.data;
        const imagesArr = [];
        const descArr = [];
        data.forEach(ele => {
          imagesArr.push(ele.image_url);
          descArr.push(ele.image_description);
        });
        const oneRoom = {
          room_name: data[0].room_name,
          location_city: data[0].location_city,
          location_country: data[0].location_country,
          average_review_point: data[0].average_review_point,
          number_of_reviews: data[0].number_of_reviews,
          is_superhost: data[0].is_superhost,
          is_favorite: data[0].is_favorite,
          images: imagesArr,
          image_description: descArr,
        };

        this.setState({
          isLoaded: true,
          data: oneRoom,
          is_favorite: oneRoom.is_favorite,
        });
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error
        })
      });
  }

  updateFavorite() {
    const id = window.location.pathname.split('/')[2];
    axios({
      method: 'patch',
      url: `/api/rooms/${id}`,
      data: {
        is_favorite: !this.state.is_favorite,
      }
    })
    .then(() => {
      this.getRoomData(id);
    })
    .catch((err) => {
      this.setState({
        error
      })
    })
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
      return <ImageList images={this.state.data.images} image_desc={this.state.data.image_description} clickedPhoto={this.state.clickedPhoto} isFavorite={this.state.data.is_favorite} toggle={this.toggleMainAndPhotoList} toggleFavorite={this.toggleFavorite} />
    } else {
      return (
        <Body className='container'>
          <TitleBar data={this.state.data} toggleFavorite={this.toggleFavorite} />
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

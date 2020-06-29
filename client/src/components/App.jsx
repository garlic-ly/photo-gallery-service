import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TitleBar from './TitleBar.jsx';
import ImageGallery from './ImageGallery.jsx';
import ImageList from './ImageList.jsx';

const initialState = {
  roomName: '',
  locationCity: '',
  locationCountry: '',
  averageReviewPoint: '',
  numberOfReviews: '',
  isSuperhost: '',
  isFavorite: '',
  images: [
    '', '', '', '', ''],
  imageDescription: [
    '', '', '', '', ''],
};

const Body = styled.div`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  background-color: #fff;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      data: initialState,
      imageList: false,
      clickedPhoto: 0,
      isFavorite: 0,
    };
    this.toggleMainAndPhotoList = this.toggleMainAndPhotoList.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.getRoomData = this.getRoomData.bind(this);
    this.updateFavorite = this.updateFavorite.bind(this);
  }

  componentDidMount() {
    const id = window.location.pathname.split('/')[2];
    this.getRoomData(id);
  }

  getRoomData(id) {
    axios.get(`/api/rooms/${id}`)
      .then((result) => {
        const { data } = result;
        const imagesArr = [];
        const descArr = [];
        data.forEach((ele) => {
          imagesArr.push(ele.image_url);
          descArr.push(ele.image_description);
        });
        const oneRoom = {
          roomName: data[0].room_name,
          locationCity: data[0].location_city,
          locationCountry: data[0].location_country,
          averageReviewPoint: data[0].average_review_point,
          numberOfReviews: data[0].number_of_reviews,
          isSuperhost: data[0].is_superhost,
          isFavorite: data[0].is_favorite,
          images: imagesArr,
          imageDescription: descArr,
        };

        this.setState({
          isLoaded: true,
          data: oneRoom,
          isFavorite: oneRoom.isFavorite,
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      });
  }

  toggleFavorite() {
    const { isFavorite } = this.state;
    this.setState({
      isFavorite: !isFavorite,
    });
    this.updateFavorite();
  }

  toggleMainAndPhotoList(clickedPhoto) {
    const { imageList } = this.state;
    this.setState({
      clickedPhoto,
      imageList: !imageList,
    });
  }

  updateFavorite() {
    const id = window.location.pathname.split('/')[2];
    const { isFavorite } = this.state;
    axios({
      method: 'patch',
      url: `/api/rooms/${id}`,
      data: {
        isFavorite: !isFavorite,
      },
    })
      .then(() => {
        this.getRoomData(id);
      })
      .catch((error) => {
        this.setState({
          error,
        });
      });
  }

  renderView() {
    const {
      error, isLoaded, imageList, data, clickedPhoto,
    } = this.state;
    const { images, imageDescription, isFavorite } = data;

    if (error) {
      return (
        <Body>
          Error:
          {error.message}
        </Body>
      );
    }
    if (!isLoaded) {
      return (
        <Body>
          Loading...
        </Body>
      );
    }
    if (imageList) {
      return (
        <ImageList
          images={images}
          imageDesc={imageDescription}
          clickedPhoto={clickedPhoto}
          isFavorite={isFavorite}
          toggle={this.toggleMainAndPhotoList}
          toggleFavorite={this.toggleFavorite}
        />
      );
    }
    return (
      <Body className="container">
        <TitleBar data={data} toggleFavorite={this.toggleFavorite} />
        <ImageGallery data={data} toggle={this.toggleMainAndPhotoList} />
      </Body>
    );
  }

  render() {
    return this.renderView();
  }
}

export default App;

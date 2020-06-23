import React from 'react';
import TitleBar from './TitleBar.jsx';
import ImagesList from './ImagesList.jsx';

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

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      data: initialState,
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
          isLoaded: true,
          data
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
    this.getRoomData(this.props.selectedRoom);
  }

  render () {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div> Loading... </div>
    } else {
      return (
        <div className='container'>
          <TitleBar data={this.state.data}/>
          <ImagesList data={this.state.data}/>
        </div>
      )
    }
  }
};

export default App;
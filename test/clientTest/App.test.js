import React from 'react';
import Enzyme from 'enzyme';
import {shallow, configure, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../client/src/components/App.jsx';
import ImagesList from '../../client/src/components/ImagesList.jsx';
import TitleBar from '../../client/src/components/TitleBar.jsx';
import axios from 'axios';

Enzyme.configure({ adapter: new Adapter()});

describe('A suite for App component', () => {
  it('should render without throwing an error', done => {
    expect(shallow(<App />).exists()).toBe(true);
    done();
  });

  it('should render div with className "container"', done => {
    const wrapper = mount(<App/>);
    expect(wrapper.exists('.container')).toEqual(true);
    expect(wrapper.find('.not-a-container').exists()).toEqual(false);
    done();
  });

  it('should render <TitleBar/> component', done => {
    const wrapper = mount(<App/>);
    expect(wrapper.find(TitleBar).exists()).toEqual(true);
    done();
  });

  it('should render <ImagesList/> component', done => {
    const wrapper = mount(<App/>);
    expect(wrapper.find(ImagesList).exists()).toEqual(true);
    done();
  });

  // TODO: fix this async test
  xit('should call getRoomData during componentDidMount', done => {
    const methodNameFake = jest.spyOn(App.prototype, 'getRoomData');
    const wrapper = mount(<App {...props} />);
    expect(methodNameFake).toHaveBeenCalledTimes(1);
    done();
  });

  //TODO: fix this async test
  xit('fetches data from server when server returns a successful response', done => { // 1
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
    const mockFetchPromise = Promise.resolve({ // 3
    json: () => mockJsonPromise,
    });

    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    const wrapper = shallow(<App />); // 5

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('/api/rooms/10');

    process.nextTick(() => { // 6
      expect(wrapper.state()[0]).toEqual({
        "id": 95,
        "room_name": "aut id dolores nulla qui",
        "location_city": "Sashaburgh",
        "location_country": "Tokelau",
        "average_review_point": "3.62",
        "number_of_reviews": 38,
        "is_superhost": 1,
        "image_url": "https://rooms-images-128.s3-us-west-1.amazonaws.com/image44.jpg",
        "room_id": 10
      });
    });
  });
});




// });


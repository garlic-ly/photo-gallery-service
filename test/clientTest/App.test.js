import React from 'react';
import Enzyme from 'enzyme';
import {shallow, configure, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../client/src/components/App.jsx';
import ImagesList from '../../client/src/components/ImagesList.jsx';
import TitleBar from '../../client/src/components/TitleBar.jsx';


Enzyme.configure({ adapter: new Adapter()});

const mockData = {

}


describe('A suite for App component', () => {
  const fetch = jest.fn(() => Promise.resolve());

  test('should render without throwing an error', () => {
    expect(shallow(<App />).exists()).toBe(true);
  });

  xit('should render div with className "container"', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.exists('.container')).toEqual(true);
    expect(wrapper.find('.not-a-container').exists()).toEqual(false);
  });

  xit('should render <TitleBar/> component', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find(TitleBar).exists()).toEqual(true);
  });

  xit('should render <ImagesList/> component', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find(ImagesList).exists()).toEqual(true);
  });

  // test('should call getRoomData during componentDidMount', () => {
  //   const methodNameFake = jest.spyOn(App.prototype, 'getRoomData');
  //   const wrapper = mount(<App {...props} />);
  //   expect(methodNameFake).toHaveBeenCalledTimes(1);
});


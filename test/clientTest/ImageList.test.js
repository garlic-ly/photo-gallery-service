import React from 'react';
import Enzyme from 'enzyme';
import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../client/src/components/App.jsx';
import ImagesList from '../../client/src/components/ImagesList.jsx';


Enzyme.configure({ adapter: new Adapter()});

describe('A suite for ImagesList', () => {
  it('should render without throwing an error', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find(ImagesList).exists()).toEqual(true);
  });

  // grid from styled-css-grid renders with class Grid__Grid
  it('should contain Grid', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find('Grid__Grid').exists()).toEqual(true);
  });

  // cell from styled-css-grid renders with class Cell__Cell
  it('should contain 5 Cells', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find('Cell__Cell')).toHaveLength(5);
  });

  it('should render 5 images as default', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find('img')).toHaveLength(5);
  });

})
import React from 'react';
import Enzyme from 'enzyme';
import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../client/src/components/App.jsx';
import TitleBar from '../../client/src/components/TitleBar.jsx';


Enzyme.configure({ adapter: new Adapter()});

describe('A suite for TitleBar component', () => {
  it('should render TitleBar component without throwing an error', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find(TitleBar).exists()).toEqual(true);
  });

  it('should render title for the Room item', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find('h1').exists()).toEqual(true);
  });

  it('should render location of city and country', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find('a')).toHaveLength(1);
  });

  it('should render a button', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find('button').exists()).toEqual(true);
  });

  it('should render 4 buttons for average review, number of reviews, share, save',
    () => {
    const wrapper = mount(<App/>);
    expect(wrapper.find('button')).toHaveLength(4);
  });

})
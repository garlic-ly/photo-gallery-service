import React from 'react';
import Enzyme from 'enzyme';
import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../client/src/components/App.jsx';
import TitleBar from '../../client/src/components/TitleBar.jsx';


Enzyme.configure({ adapter: new Adapter()});

describe('A suite for TitleBar component', () => {
  it('should render TitleBar component without throwing an error', done => {
    const wrapper = mount(<App/>);
    expect(wrapper.find(TitleBar).exists()).toEqual(true);
    done();
  });

  it('should render title for the Room item', done => {
    const wrapper = mount(<App/>);
    expect(wrapper.find('h1').exists()).toEqual(true);
    done();
  });

  it('should render location of city and country', done => {
    const wrapper = mount(<App/>);
    expect(wrapper.find('a')).toHaveLength(1);
    done();
  });

  it('should render a button', done => {
    const wrapper = mount(<App/>);
    expect(wrapper.find('button').exists()).toEqual(true);
    done()
  });

  it('should render 4 buttons for average review, number of reviews, share, save',
    done => {
    const wrapper = mount(<App/>);
    expect(wrapper.find('button')).toHaveLength(4);
    done();
  });

})
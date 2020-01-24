import React from 'react';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ForecastList from './ForecastList';
import ForecastItem from '../ForecastItem/ForecastItem';
import { forecasts } from '../../assets/test-data';

const props = {
  forecasts,
};

configure({ adapter: new Adapter() });

describe('<ForecastList/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ForecastList forecasts={[]} />);
  });

  it('should render 5 items of <ForecastItem>', () => {
    wrapper.setProps({
      ...props,
    });
    expect(wrapper.find(ForecastItem)).toHaveLength(5);
  });

  it('should render text "No forecasts available" if no forecasts are injected', () => {
    expect(wrapper.contains(<h1>No forecasts available</h1>)).toEqual(true);
  });
});

import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { forecasts, weather } from '../assets/test-data';
import epochConverter from '../common/utils';
import WeatherContainer from './WeatherContainer';
import CurrentWeatherWidget from './CurrentWeatherWidget/CurrentWeatherWidget';
import ForecastList from './ForecastList/ForecastList';

configure({ adapter: new Adapter() });

const weatherProps = {
  icon: weather.weather[0].icon.slice(0, -1),
  name: weather.name,
  temp: weather.main.temp,
  time: epochConverter(weather.dt),
};

const forecastProps = {
  forecasts,
};

describe('<WeatherContainer/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<WeatherContainer />);
  });

  it('should render <CurrentWeatherWidget/>', () => {
    wrapper.setState({
      icon: weather.weather[0].icon.slice(0, -1),
      name: weather.name,
      temp: weather.main.temp,
      time: epochConverter(weather.dt),
    }, () => {
      expect(wrapper.contains(<CurrentWeatherWidget {...weatherProps} />)).toEqual(true);
    });
  });

  it('should render <ForecastList/>', () => {
    wrapper.setState({
      forecasts,
    }, () => {
      expect(wrapper.contains(<ForecastList {...forecastProps} />)).toEqual(true);
    });
  });
});

import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CurrentWeatherWidget from './CurrentWeatherWidget';
import styles from './CurrentWeatherWidget.module.css';

configure({ adapter: new Adapter() });

const props = {
  name: 'Espoo',
  temp: 3,
  time: '19:00',
  icon: '10',
};

describe('<CurrentWeatherWidget />', () => {
  it('should render name, temp and time of the city and weather icon', () => {
    const wrapper = shallow(<CurrentWeatherWidget {...props} />);
    expect(wrapper.find(`.${styles.name}`).children().text()).toEqual(props.name);
    expect(wrapper.find(`.${styles.temp}`).children().text()).toEqual(`${props.temp}°C`);
    expect(wrapper.find(`.${styles.time}`).children().text()).toEqual(props.time);
    expect(wrapper.find(`.${styles.weather}`).children().prop('src')).toEqual(`/img/${props.icon}.svg`);
  });
});

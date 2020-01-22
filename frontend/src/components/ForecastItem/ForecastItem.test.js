import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ForecastItem from './ForecastItem';
import styles from './ForecastItem.module.css'

configure({ adapter: new Adapter() });

const props = {
    temp: 3,
    time: "19:00",
    icon: "10"
}

describe('<ForecastItem />', () => {
    it('should render temp and time of the city and weather icon', () => {
        const wrapper = shallow(<ForecastItem {...props} />);
        expect(wrapper.find('h2').text()).toEqual(props.time);
        expect(wrapper.find('h3').text()).toEqual(props.temp + '°C');
        expect(wrapper.find(`.${styles.weatherIcon}`).prop('src')).toEqual(`/img/${props.icon}.svg`);
    });
});
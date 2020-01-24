import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from '../ForecastItem/ForecastItem';
import epochConverter from '../../common/utils';

import './ForecastList.module.css';

export default function ForecastList(props) {
  const { forecasts } = props;

  const View = () => {
    if (forecasts.length <= 0) {
      return (
        <h1>No forecasts available</h1>
      );
    }

    return (
      <ul>
        {forecasts.map((forecast) => (
          <li key={forecast.dt}>
            <ForecastItem
              time={epochConverter(forecast.dt)}
              temp={forecast.main.temp}
              icon={forecast.weather[0].icon.slice(0, -1)}
            />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <View />
  );
}

ForecastList.propTypes = {
  forecasts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

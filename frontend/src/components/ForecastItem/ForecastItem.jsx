import React from 'react';
import PropTypes from 'prop-types';
import styles from './ForecastItem.module.css';

export default function ForecastItem(props) {
  const { icon, time, temp } = props;
  return (
    <div className={styles.forecastBlock}>
      <img className={styles.weatherIcon} src={`/img/${icon}.svg`} alt="" />
      <h2>{time}</h2>
      <h3>
        {temp}
        °C
      </h3>
    </div>
  );
}

ForecastItem.propTypes = {
  temp: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

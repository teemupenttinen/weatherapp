import React from 'react';
import PropTypes from 'prop-types';
import styles from './CurrentWeatherWidget.module.css';

export default function CurrentWeatherWidget(props) {
  const {
    name, temp, icon, time,
  } = props;
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.name}>
          <h1>{name}</h1>
        </div>
        <div className={styles.temp}>
          <h2>
            {temp}°C
          </h2>
        </div>
        <div className={styles.time}>
          <h2>{time}</h2>
        </div>
      </div>
      <div className={styles.weather}>
        {icon && <img className={styles.weatherIcon} src={`/img/${icon}.svg`} alt="" />}
      </div>
    </div>
  );
}

CurrentWeatherWidget.propTypes = {
  name: PropTypes.string.isRequired,
  temp: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  icon: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

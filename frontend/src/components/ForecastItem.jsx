import React from 'react';
import styles from './ForecastItem.module.css';

export default function ForecastItem(props) {
    return (
        <div className={styles.forecastBlock}>
            <img className={styles.weatherIcon} src={`/img/${props.icon}.svg`}></img>
            <h2>{props.time}</h2>
            <h3>{props.temp}°C</h3>
        </div>
    )
}
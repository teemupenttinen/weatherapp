import React from 'react';
import styles from './CurrentWeatherWidget.module.css';

export default function CurrentWeatherWidget(props) {
    return (
        <div className={styles.container}>
            <div className={styles.details}>
                <div className={styles.name}>
                    <h1>{props.name}</h1>
                </div>
                <div className={styles.temp}>
                    <h2>{props.temp}°C</h2>
                </div>
                <div className={styles.time}>
                    <h2>{props.time}</h2>
                </div>
            </div>
            <div className={styles.weather}>
                {props.icon && <img className={styles.weatherIcon} src={`/img/${props.icon}.svg`} />}
            </div>
        </div>
    )
}
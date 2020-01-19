import React, { useState, useEffect } from 'react';
import ForecastItem from './ForecastItem';
import { epochConverter } from '../common/utils';
import { getForecastFromApi, getForecastFromApiWithLocation } from '../common/api';

import './ForecastList.module.css'

export default function ForecastList(props) {

    const [forecasts, setForecasts] = useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (location) => {
            getForecastFromApiWithLocation(location).then((response) => {              
                if (response.list) {
                    setForecasts([...response.list.splice(0, 5)]);
                }
            });

        }, async (error) => {
            console.log(error);
            getForecastFromApi().then((response) => {
                if (response.list) {
                    setForecasts([...response.list.splice(0, 5)]);
                }
            });
        });

    }, []);

    const View = () => {

        if (forecasts.length <= 0) {
            return (
                <h1>No forecasts available</h1>
            )
        }

        return (
            <ul>
                {forecasts.map((forecast, idx) =>
                    <li key={idx}>
                        <ForecastItem
                            time={epochConverter(forecast.dt)}
                            temp={forecast.main.temp}
                            icon={forecast.weather[0].icon.slice(0, -1)}
                        />
                    </li>
                )}
            </ul>
        )
    }
    
    return (
        <View />
    )
}
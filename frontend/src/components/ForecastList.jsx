import React, { useState, useEffect } from 'react';
import ForecastItem from './ForecastItem';
import { epochConverter } from '../common/utils';

import './ForecastList.module.css'

const baseURL = process.env.ENDPOINT;

export default function ForecastList(props) {

    const [forecasts, setForecasts] = useState([]);

    const getForecastFromApi = async () => {
        try {
            const response = await fetch(`${baseURL}/forecast`);
            return response.json();
        } catch (error) {
            console.error(error);
        }

        return [];
    };

    useEffect(() => {
        getForecastFromApi().then((response) => {
            if (response.list) {
                setForecasts([...response.list.splice(0, 5)]);
            }
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
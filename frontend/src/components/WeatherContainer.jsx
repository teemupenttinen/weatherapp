import React from 'react';
import CurrentWeatherWidget from './CurrentWeatherWidget/CurrentWeatherWidget';
import ForecastList from './ForecastList/ForecastList';
import epochConverter from '../common/utils';
import { getWeatherFromApi, getWeatherFromApiWithLocation, getForecastFromApiWithLocation } from '../common/api';

export default class WeatherContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            icon: '',
            name: '',
            temp: '',
            time: '',
            forecasts: []
        };
    }

    async componentDidMount() {
        if(!navigator.geolocation){
            return;
        }
        navigator.geolocation.getCurrentPosition(async (location) => {
            const weatherResponse = await getWeatherFromApiWithLocation(location);
            this.setWeatherResponse(weatherResponse);
            const forecastResponse = await getForecastFromApiWithLocation(location);
            this.setForecastResponse(forecastResponse);
        }, async () => {
            // In case the user decides not to allow location, get weather from backend's location.
            const weatherResponse = await getWeatherFromApi();
            this.setWeatherResponse(weatherResponse);
            const forecastResponse = await getForecastFromApi();
            this.setForecastResponse(forecastResponse);
        });
    }

    setWeatherResponse(weatherResponse) {
        this.setState({
            ...this.state,
            icon: weatherResponse.weather[0].icon.slice(0, -1),
            name: weatherResponse.name,
            temp: weatherResponse.main.temp,
            time: epochConverter(weatherResponse.dt),
        });
    }

    setForecastResponse(forecasts) {
        this.setState({
            ...this.state,
            forecasts: [...forecasts.list.splice(0, 5)]
        })
    }

    render() {
        const {
            icon, name, temp, time, forecasts
        } = this.state;

        return (
            <div className="wrapper">
                <div className="content">
                    <CurrentWeatherWidget
                        icon={icon}
                        name={name}
                        temp={temp}
                        time={time}
                    />
                    <ForecastList forecasts={forecasts} />
                </div>
            </div>
        );
    }
}

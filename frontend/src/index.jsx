import React from 'react';
import ReactDOM from 'react-dom';
import CurrentWeatherWidget from './components/CurrentWeatherWidget';
import ForecastList from './components/ForecastList';
import { epochConverter } from './common/utils';
import { getWeatherFromApi, getWeatherFromApiWithLocation } from './common/api';

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: "",
      name: "",
      temp: "",
      time: ""
    };
  }

  setWeatherResponse(weatherResponse) {
    this.setState({
      icon: weatherResponse.weather[0].icon.slice(0, -1),
      name: weatherResponse.name,
      temp: weatherResponse.main.temp,
      time: epochConverter(weatherResponse.dt)
    });
  }

  async componentWillMount() {
    navigator.geolocation.getCurrentPosition(async (location) => {
      const weatherResponse = await getWeatherFromApiWithLocation(location);
      this.setWeatherResponse(weatherResponse);
    }, async (error) => {
      console.log(error);
      const weatherResponse = await getWeatherFromApi();
      this.setWeatherResponse(weatherResponse);
    });
  }

  render() {
    const { icon, name, temp, time } = this.state;

    return (
      <div className="wrapper">
        <div className="content">
          <CurrentWeatherWidget
            icon={icon}
            name={name}
            temp={temp}
            time={time}
          />
          <ForecastList />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Weather />,
  document.getElementById('app')
);

import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import WeatherContainer from './components/WeatherContainer';
export class Weather extends React.Component {
  render() {
    return (
      <WeatherContainer/>
    );
  }
}

ReactDOM.render(
  <Weather />,
  document.getElementById('app'),
);

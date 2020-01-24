import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import WeatherContainer from './components/WeatherContainer';

function Weather() {
  return (
    <WeatherContainer />
  );
}

ReactDOM.render(
  <Weather />,
  document.getElementById('app'),
);

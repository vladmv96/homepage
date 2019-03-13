import React, { Component } from 'react';
import './Weather.css';
import classNames from 'classnames';

class Weather extends Component {

  render() {

    const {temperatura, city, weatherView, handleWeatherClick} = this.props;

    const weatherClassNames = classNames(
        'weather-container',
        {'weather-container-opened': (weatherView === 'opened')},
        {'weather-container-closed': (weatherView === 'closed')}
      )

    return (
      <div className={weatherClassNames} onClick={handleWeatherClick}>
        <div className="current-weather">
          <h1 className="weather-temperatura">{temperatura} &#176;С</h1>
          <h2 className="weather-location">{city}</h2>
        </div>
      </div>
    );
  }
}

export default Weather;
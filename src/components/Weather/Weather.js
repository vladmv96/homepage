import React, { Component } from 'react';
import './Weather.css';

class Weather extends Component {

  render() {

    return (
      <div className="weather-container">
        <h1 className="weather-temperatura">-10 &#176;С</h1>
        <h2 className="weather-location">Moscow</h2>
      </div>
    );
  }
}

export default Weather;
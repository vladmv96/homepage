import React, { Component } from 'react';
import Weather from '../../components/Weather/Weather';

class WeatherContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
          temperatura: '-10',
          city: 'Moscow',
      }
  }

  render() {
    
    const {temperatura, city} = this.state;
    const {weatherView, handleWeatherClick} = this.props;

    return (
      <div>
        <Weather
            temperatura={temperatura}
            city={city}
            weatherView={weatherView}
            handleWeatherClick={handleWeatherClick}
        />
      </div>
    );
  }
}

export default WeatherContainer;
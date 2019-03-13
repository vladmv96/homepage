import React, { Component } from 'react';
import Weather from '../../components/Weather/Weather';

class WeatherContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {

      }
  }

  render() {
      
    return (
      <div>
        <Weather
        />
      </div>
    );
  }
}

export default WeatherContainer;
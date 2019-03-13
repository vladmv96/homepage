import React, { Component } from 'react';
import ClockContainer from '../ClockContainer/ClockContainer';
import WeatherContainer from '../WeatherContainer/WeatherContainer';

class Layout extends Component {
  constructor(props) {
      super(props);
      this.state = {
        clockPosition: 'center',
        weatherView: 'closed',
      }
  }

  handleClockClick = () => {
    this.changeClockPosition();
  }

  handleWeatherClick = () => {
    this.changeWeatherView();
  }

  changeClockPosition = () => {
    const {clockPosition} = this.state;
    if (clockPosition === 'center') {
      this.setState({clockPosition: 'back'});
    } else {
      this.setState({clockPosition: 'center'});
    }
  }

  changeWeatherView = () => {
    const {weatherView} = this.state;
    if (weatherView === 'opened') {
      this.setState({weatherView: 'closed'});
    } else {
      this.setState({weatherView: 'opened'});
    }
  }

  render() {

    const {clockPosition, weatherView} = this.state;
      
    return (
      <div>
        <ClockContainer
          handleClockClick={this.handleClockClick}
          clockPosition={clockPosition}
        />
        <WeatherContainer
          handleWeatherClick={this.handleWeatherClick}
          weatherView={weatherView}
        />
      </div>
    );
  }
}

export default Layout;
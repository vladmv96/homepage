import React, { Component } from 'react';
import ClockContainer from '../ClockContainer/ClockContainer';
import WeatherContainer from '../WeatherContainer/WeatherContainer';

class Layout extends Component {
  constructor(props) {
      super(props);
      this.state = {
        clockPosition: 'center',
      }
  }

  handleClockClick = () => {
    this.changeClockPosition();
  }

  changeClockPosition = () => {
    const {clockPosition} = this.state;
    if (clockPosition === 'center') {
      this.setState({clockPosition: 'back'});
    } else {
      this.setState({clockPosition: 'center'});
    }
  }

  render() {

    const {clockPosition} = this.state;
      
    return (
      <div>
        <ClockContainer
          handleClockClick={this.handleClockClick}
          clockPosition={clockPosition}
        />
        <WeatherContainer
        />
      </div>
    );
  }
}

export default Layout;
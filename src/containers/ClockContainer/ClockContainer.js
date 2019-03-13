import React, { Component } from 'react';
import Clock from '../../components/Clock/Clock';

class ClockContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
        hours: '00',
        minutes: '00',
        seconds: '00',
      }
  }

  componentDidMount = () => {
    this.getActualTime();
    setInterval(this.getActualTime, 1000);
  }

  getActualTime = () => {
    const time = new Date();
    const hours = this.addZeroToTimeString(time.getHours());
    const minutes = this.addZeroToTimeString(time.getMinutes());
    const seconds = this.addZeroToTimeString(time.getSeconds());
    this.setState({
      hours,
      minutes,
      seconds
    });
  }

  addZeroToTimeString = (time) => {
      if (time.toString().length === 1) {
          return "0" + time;
      } else {
          return time;
      }
  }


  render() {
    const {hours, minutes, seconds} = this.state;
    const {handleClockClick, clockPosition} = this.props;
      
    return (
      <div>
        <Clock 
          clockPosition={clockPosition}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          handleClockClick={handleClockClick}
        />
      </div>
    );
  }
}

export default ClockContainer;
import React, { Component } from 'react';
import './Clock.css';
import classNames from 'classnames';

class Clock extends Component {

  render() {

    const {clockPosition, hours, minutes, seconds, handleClockClick} = this.props;

    const clockClassNames = classNames(
      'clock-container',
      {'clock-container-center': (clockPosition === 'center')},
      {'clock-container-back': (clockPosition === 'back')}
    )

    return (
      <div onClick={handleClockClick} className={clockClassNames}>
        <h1 className="clock-time">{hours}:{minutes}:{seconds}</h1>
      </div>
    );
  }
}

export default Clock;
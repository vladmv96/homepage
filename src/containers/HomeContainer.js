import React, { Component } from 'react';
import RegistrationFormContainer from './RegistrationFormContainer';
import HomepageSliderContainer from './HomepageSliderContainer';
import '../styles/homeContainer.css';

class HomeContainer extends Component {

  render() {

    return (
      <div className="home-container">
        <HomepageSliderContainer />
        <RegistrationFormContainer />
      </div>
    );
  }
}


export default HomeContainer;
import React, { Component } from 'react';

import './HomePage.css';
import Context from '../../../Context';

import Hero from './Hero/Hero';
import LandingDetails from './LandingDetails/LandingDetails';
import SuccessStories from './SuccessStories/SuccessStories';

export class HomePage extends Component {
  static contextType = Context;
  
  render() {
    const { hero } = this.context;
    const { landingDetails } = this.context;

    return (
      <content id="landingSection">
        <Hero
          info={hero}
        />

        <div>
          <LandingDetails
            id={landingDetails[0].id}
            key={landingDetails[0].id}
            info={landingDetails[0]}
          />  
          <svg />
        </div>

        <div>
          <LandingDetails
            id={landingDetails[1].id}
            key={landingDetails[1].id}
            info={landingDetails[1]}
          />
          <svg />
        </div>
        
        <div>
          <LandingDetails
            id={landingDetails[2].id}
            key={landingDetails[2].id}
            info={landingDetails[2]}
          />  
          <svg />
        </div>

        <SuccessStories />
      </content>
    );
  }
}

export default HomePage;
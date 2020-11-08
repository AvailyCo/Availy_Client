import React, { Component } from 'react';

import './LandingDetails.css';

export class LandingDetails extends Component {
  static defaultProps = {
    info: {
      header: "",
      details: "",
      imgURL: ""
    }
  }
  
  render() {
    const info = this.props.info;

    return (
      <section id={"step" + info.id} class="landingDetails">
        <div class="textSegment">
          <h3 class="text-seg-header">
            {info.header}
          </h3>
          <p class="text-seg-info">
            {info.details}
          </p>
        </div>
        <img
          src={info.imgURL}
          class="landingImg"
        />
      </section>
    )
  }
}

export default LandingDetails

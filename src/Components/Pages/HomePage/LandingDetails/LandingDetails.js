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
      <section id={"step" + info.id} className="landingDetails">
        <div className="textSegment">
          <h3 className="text-seg-header">
            {info.header}
          </h3>
          <p className="text-seg-info">
            {info.details}
          </p>
        </div>
        <img
          src={info.imgURL}
          className="landingImg"
        />
      </section>
    )
  }
}

export default LandingDetails

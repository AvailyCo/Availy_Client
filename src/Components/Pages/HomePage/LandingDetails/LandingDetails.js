import React, { Component } from 'react';

import './LandingDetails.css';

//import { ReactComponent as Landing2 } from '../../../../Assets/landing2.svg';
/* import { ReactComponent as Landing2 } from './Assets/landing2.svg';
import { ReactComponent as Landing2 } from './Assets/landing2.svg';
 */



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



        {/*  <Landing2 /> */}
        <img src={info.imgURL} className="landingImg" alt="landing step" />
      </section>
    )
  }
}

export default LandingDetails

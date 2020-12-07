import React, { Component } from 'react';

export class Hero extends Component {
  render() {

    const info = this.props.info;

    return (
      <section id="hero">
        <div className="textSegment">
          <h3 className="text-seg-header">
            {info.header}
          </h3>
          <p className="text-seg-info" >
            {info.details}
          </p>
          <br />
          <br />
          <a href="#step1" className="text-seg-btn">
            Get Started
          </a>
        </div>

      </section>
    )
  }
}

export default Hero

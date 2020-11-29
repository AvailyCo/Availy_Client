import React, { Component } from 'react';
import hill from '../../../../Assets/orangehill.png';
import { ReactComponent as CalendarImage } from '../../../../Assets/calendar.svg';
import PeopleImage from '../../../../Assets/people.svg';

import './Hero.css';

export class Hero extends Component {
  static defaultProps = {
    info: {
      header: "",
      imgURL: "",
      details: "",
    }
  }

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
        <div id="hero-image-section">
          {/* <img
            id="heroImg"
            src={info.imgURL}
            alt=""
          /> */}
          <div className="calendar-box">
            <CalendarImage />
          </div>
          <img id="hill-image" src={hill} alt="" />
          <img id="people-image" src={PeopleImage} alt="" />

        </div>


        {/* <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%"> 
              <stop offset="0%" style="stop-color:rgba(255, 162, 98, 0);stop-opacity:1" />
              <stop offset="30%" style="stop-color:rgb(255, 162, 98);stop-opacity:1" />
              <stop offset="100%" style="stop-color:rgb(255, 115, 88);stop-opacity:1" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
            style="
              stroke: none;
              fill: url(#grad1)">
          </path>
        </svg> */}
      </section>
    )
  }
}

export default Hero

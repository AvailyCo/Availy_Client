import React, { Component } from 'react';

import './SuccessStories.css';

import Context from '../../../../Context';
import UserStory from './UserStory/UserStory';

export class SuccessStories extends Component {
  static contextType = Context;

  render() {

    const { successStories } = this.context;

    return (
      <div id="successStories">
        <h3>People who love Availy</h3>
        <ul>
          {successStories.map(s => {
            return (
              <UserStory
                id={s.id}
                key={s.id}
                story={s} 
              />
            )
          })}
        </ul>
        
        {/* <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%"> 
              <stop offset="0%" style="stop-color:rgb(255, 162, 98);stop-opacity:1" />
              <stop offset="100%" style="stop-color:rgb(255, 115, 88);stop-opacity:1" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
            style="
              stroke: none;
              fill: url(#grad2)">
          </path>
        </svg> */}
      </div>
    )
  }
}

export default SuccessStories;

import React, { Component } from 'react'

import './ContentDisplay.css';
import Context from '../../../../Context';

export class ContentDisplay extends Component {
  static contextType = Context;

  render() {

    const { activeDashPage } = this.context;
    return (
      <div id="contentDisplay">
        <h3>{ activeDashPage }</h3>
      </div>
    )
  }
}

export default ContentDisplay


import React, { Component } from 'react';

import './NotFoundPage.css';
import { Link } from 'react-router-dom';

export class NotFoundPage extends Component {
  render() {
    return (
      <div id="notFoundPage">
        <div id="spacer">
          <div id="errorCode">
            <h3>404 Error</h3>
            <hr />
            <p>Page Not found</p>
          </div>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    )
  }
}

export default NotFoundPage

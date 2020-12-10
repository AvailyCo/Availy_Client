import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './Footer.css';

import logo from './../../Assets/Availy_Logo1.png';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footerBrand">
          <Link to="/">
            <img
              id="footerIcon"
              src={logo}
              alt="Availy Icon"
            />
          </Link>
          <Link to="/">
            <h2 id="footerName">Availy</h2>
          </Link>
        </div>
        <ul id="footerLinksBox">
          <li>
            <Link to="/privacy">
              <p>Privacy Policy</p>
            </Link>
          </li>
          <li>
            <Link to="/terms">
              <p>Terms & Conditions</p>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <p>Contact Us</p>
            </Link>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
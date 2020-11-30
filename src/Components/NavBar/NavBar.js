import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';
import Context from '../../Context';

import logo from './../../Assets/Availy_Logo1.png';
//import TokenService from '../../Services/token-service';

export class NavBar extends Component {
  static contextType = Context;


  menuToggle() {
    const linksbox = document.querySelector('.links-box');
    const burger = document.querySelector('.burger');

    linksbox.classList.toggle('flexshow');
    burger.classList.toggle('toggle');

  }

  renderUnauthNav() {
    return (
      <>
        <div id="navBrand">
          <Link to="/" >
            <img
              id="navIcon"
              src={logo}
              alt="Availy Icon"
            />
          </Link>
          <Link to="/">
            <h2 id="navLogo">Availy</h2>
          </Link>
        </div>

        <div className="links-box">
          <div id="accessAcct">
            <Link to="/login" id="login">Log In</Link>
            <Link to="/signup" id="signUp">Sign Up</Link>
          </div>
        </div>

        <div className="burger" onClick={this.menuToggle}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </>
    )
  }

  renderAuthNav() {
    return (
      <>
        <div id="navBrand">
          <Link to="/" >
            <img
              id="navIcon"
              src={logo}
              alt="Availy Icon"
            />
          </Link>
          <Link to="/">
            <h2 id="navLogo">Availy</h2>
          </Link>
        </div>

        <div id="navSpacer" />

        <div id="accessAcct">
          <Link to="/accountSettings" id="account">Account</Link>
          <Link to="/dashboard" id="dashboard">Dashboard</Link>
          <Link to="/" id="logout"
            onClick={() => this.context.login()}
          >
            Log Out
          </Link>
        </div>
      </>
    )
  }


  render() {
    let { loggedIn } = this.context;

    return (
      <nav id="navBar">
        {loggedIn ? this.renderAuthNav() : this.renderUnauthNav()}
      </nav>
    );
  }
}

export default NavBar;
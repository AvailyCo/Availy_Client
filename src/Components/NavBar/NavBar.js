import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';
import Context from '../../Context';

import { MenuItems } from './MenuItems';

import logo from './../../Assets/Availy_Logo1.png';

export class NavBar extends Component {
  static contextType = Context;
  state = {
    showMenu: false
  };

  menuToggle = () => {
    this.setState({ showMenu: !this.state.showMenu });
  }

  renderUnauthNav() {
    return (
      <>
        <div id="navBrand">
          <Link to="/" >
            <img id="navIcon" src={logo} alt="Availy Icon" />
          </Link>
          <Link to="/">
            <h2 id="navName">Availy</h2>
          </Link>
        </div>

        <div id="burgerIcon" onClick={this.menuToggle} className={this.state.showMenu ? 'toggle' : 'burger'}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div >

        <ul id="navLinksBox" className={this.state.showMenu ? 'show' : 'hide'}>
          {MenuItems.map((item, index) => {
            return (
              <li className='.navbutton' key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>




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

        <div id="navSpacer"></div>

        <div id="accessAcct">
          <Link to="/accountSettings" id="account">Account</Link>
          <Link to="/dashboard" id="dashboard">Dashboard</Link>
          <Link to="/" id="logout" onClick={() => this.context.login()}>
            Log Out
          </Link>
        </div>

        <div className="burger" onClick={this.menuToggle}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </>
    )
  }

  render() {
    /*   const { show } = this.state; */
    let { loggedIn } = this.context;

    return (
      <nav>
        {loggedIn ? this.renderAuthNav() : this.renderUnauthNav()}
      </nav>
    );
  }
}

export default NavBar;
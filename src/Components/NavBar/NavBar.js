import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';
import Context from '../../Context';

import { MenuItems, loggedInMenuItems } from './MenuItems';

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

        <ul id="navLinksBoxLoggedIn" className={this.state.showMenu ? 'show' : 'hide'}>
          <li className='welcomebox'>
            Welcome
            <span className="username"> {localStorage.getItem('username')}
            </span>!
          </li>
          {loggedInMenuItems.map((item, index) => {
            return (
              <li className='navbutton' key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* <Link to="/" id="logout" onClick={() => this.context.login()}> Log Out </Link> */}
      </>
    )
  }

  render() {
    let { loggedIn } = this.context;



    /*change this later*/
    localStorage.setItem('username', 'Temp User')



    return (
      <nav>
        {loggedIn ? this.renderAuthNav() : this.renderUnauthNav()}
        {/* {loggedIn ? this.renderUnauthNav() : this.renderAuthNav()} */}
      </nav>
    );
  }
}

export default NavBar;
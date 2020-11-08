import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './DashNav.css';
import Context from './../../../../Context';

export class DashNav extends Component {
  static contextType = Context;

  loadAvailability() {
    console.log('Load My Availability');
  }
  loadGroups() {
    console.log('Load Groups');
  }
  loadPolls() {
    console.log('Load Groups');
  }
  loadHistory() {
    console.log('Load History');
  }

  renderDesktopNav(){
    return(
      <div id="sideNav">
        <ul id="sideNavMenu">
          <li>
            <button className="sideNavButton"
              onClick={() => this.context.setActiveDashPage('My Calendar') }
            >
              My Calendar
            </button>
          </li>
          <li>
            <button className="sideNavButton"
              onClick={() => this.context.setActiveDashPage('Availability') }
            >
              Availability
            </button>
          </li>
          <li>
            <button className="sideNavButton"
              onClick={() => this.context.setActiveDashPage('Groups') }
            >
              Groups
            </button>
          </li>
          <li>
            <button className="sideNavButton"
              onClick={() => this.context.setActiveDashPage('Polls') }
            >
              Polls
            </button>
          </li>
          <li>
            <button className="sideNavButton"
              onClick={() => this.context.setActiveDashPage('History') }
            >
              History
            </button>
          </li>
        </ul>
      </div>
    )
  }
  renderMobileNav(){
    return(
      <form id="topNav">
        <div id="dashOptions">
          <select>
            <option>My Calendar</option>
            <option>Availability</option>
            <option>Groups</option>
            <option>Polls</option>
            <option>Event History</option>
          </select>
          <select>
            <option>Option1</option>
            <option>Option2</option>
            <option>Option3</option>
          </select>
        </div>
        <div id="searchBar">
          <input type="text" name="search" />
          <button>?</button>
        </div>
      </form>
    )
  }
  render() {
    let { isMobile } = this.props;
    
    return(
      <div id="dashNav">
        <h3>Dashboard</h3>
        <button id="newMeetingBtn">New Meeting</button>
        
        { isMobile ? this.renderMobileNav() : this.renderDesktopNav() }
        {/* {this.renderDesktopNav()} */}
        {/* { isMobile ? this.renderMobileNav() : this.renderDesktopNav()}  */}
      </div>
    )
  }
}

export default DashNav

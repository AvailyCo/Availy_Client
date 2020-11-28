import React, { Component } from 'react';

import './DashboardPage.css';
import Context from '../../../Context';

import DashNav from './DashNav/DashNav';
import ContentDisplay from './ContentDisplay/ContentDisplay';


export class DashboardPage extends Component {
  static contextType = Context;
  
  state = {
    isMobile: false
  }

  onWindowResize = () => {
    this.setState({
      isMobile: window.innerWidth < 720
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
    this.context.setActiveDashPage('My Calendar');
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  renderMobile(isMobile) {
    return (
      <div className="mobileView">
        <DashNav
          isMobile = { isMobile }
        />
        <ContentDisplay />
      </div>
    )
  }
  renderDesktop(isMobile) {
    return (
      <div className="desktopView">
        <DashNav
          isMobile = { isMobile }
        />
        <ContentDisplay />
      </div>
    )
  }

  render() {
    const { isMobile } = this.state;

    return (
      <div id="dashboardPage">
        { isMobile ? this.renderMobile(isMobile) : this.renderDesktop(isMobile) }
      </div>
    )
  }
}

export default DashboardPage

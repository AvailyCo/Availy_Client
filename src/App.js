import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import './App.css';
//import Config from './Config';
/* import SAMPLE from './SAMPLE'; */
import Context from './Context';
//import PrivateRoute from './Utils/PrivateRoute';
import PublicOnlyRoute from './Utils/PublicOnlyRoute';

import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import LoginPage from './Components/Pages/LoginPage/LoginPage';
import AccountSettings from './Components/Pages/AccountSettingsPage/AccountSettings';
import SignUpPage from './Components/Pages/SignUpPage/SignUpPage';
import ContactUsPage from './Components/Pages/ContactUsPage/ContactUsPage';
import PrivacyPolicyPage from './Components/Pages/PrivacyPolicyPage/PrivacyPolicyPage.js';
import TermsConditionsPage from './Components/Pages/TermsConditionsPage/TermsConditionsPage';
import NotFoundPage from './Components/Pages/NotFoundPage/NotFoundPage';
import DashboardPage from './Components/Pages/DashboardPage/DashboardPage';
import NewEventPage from './Components/Pages/NewEventPage/NewEventPage';

import LandingPage from './Routes/LandingPage/LandingPage';

export class App extends Component {
  state = {
    loggedIn: false,
    activeDashPage: "",
  }

  componentDidMount() {
  }

  login = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    });
  }

  setActiveDashPage = (activeDashPage) => {
    this.setState({
      activeDashPage
    });
  }

  render() {
    const contextValue = {
      loggedIn: this.state.loggedIn,
      login: this.login,
      activeDashPage: this.state.activeDashPage,
      setActiveDashPage: this.setActiveDashPage,
    }
    return (
      <Context.Provider value={contextValue}>

        <main>
          <NavBar />

          <Switch /* id="content" */>
            <Route  // <-- change to private route when auth set up
              exact
              path="/dashboard"
              component={DashboardPage}
            />
            <Route
              exact
              path="/new-event"
              component={NewEventPage}
            />
            <PublicOnlyRoute
              path='/login'
              component={LoginPage}
            />
            <PublicOnlyRoute
              path='/signup'
              component={SignUpPage}
            />
            <PublicOnlyRoute
              path='/accountsettings'
              component={AccountSettings}
            />
            <Route
              exact
              path="/contact"
              component={ContactUsPage}
            />
            <Route
              exact
              path="/privacy"
              component={PrivacyPolicyPage}
            />
            <Route
              exact
              path="/terms"
              component={TermsConditionsPage}
            />




            <Route exact path="/" component={LandingPage} />





            <Route path='*' component={NotFoundPage} />
          </Switch>

          <Footer />
        </main>
      </Context.Provider>
    );
  }
}

export default App;
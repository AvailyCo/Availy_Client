import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import './App.css';
import Config from './Config';
import SAMPLE from './SAMPLE';
import Context from './Context';
import PrivateRoute from './Utils/PrivateRoute';
import PublicOnlyRoute from './Utils/PublicOnlyRoute';

import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/Pages/HomePage/HomePage';
import LoginPage from './Components/Pages/LoginPage/LoginPage';
import SignUpPage from './Components/Pages/SignUpPage/SignUpPage';
import ContactUsPage from './Components/Pages/ContactUsPage/ContactUsPage';
import PrivacyPolicyPage from './Components/Pages/PrivacyPolicyPage/PrivacyPolicyPage.js';
import TermsConditionsPage from './Components/Pages/TermsConditionsPage/TermsConditionsPage';
import NotFoundPage from './Components/Pages/NotFoundPage/NotFoundPage';

export class App extends Component {
  state = {
    hero: {},
    landingDetails: [],
    successStories: [],
  }

  componentDidMount() {
    const hero = SAMPLE.hero;
    this.setState({
      hero
    });

    const landingDetails = SAMPLE.landingDetails;
    this.setState({
      landingDetails
    });

    const successStories = SAMPLE.successStories;
    this.setState({
      successStories
    });
  }

  render () {
    const contextValue = {
      hero: this.state.hero,
      landingDetails: this.state.landingDetails,
      successStories: this.state.successStories
    }
    return (
      <Context.Provider
        value={ contextValue }
      >
        <main id="App">
          <NavBar />

          <Switch id="content">
            <PublicOnlyRoute
              path='/login'
              component={ LoginPage }
            />
            <PublicOnlyRoute
              path='/signup'
              component={ SignUpPage }
            />
            <Route 
              exact
              path="/contact"
              comoponent={ ContactUsPage }
            />
            <Route 
              exact
              path="/privacy"
              comoponent={ PrivacyPolicyPage }
            />
            <Route 
              exact
              path="/terms"
              comoponent={ TermsConditionsPage }
            />
            <Route
              exact
              path="/"
              component={ HomePage }
            />
            <Route
              component={ NotFoundPage }
            />
          </Switch>

          <Footer />
        </main>
      </Context.Provider>
    );
  }
}

export default App;
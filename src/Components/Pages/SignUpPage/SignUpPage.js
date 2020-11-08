import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './SignUpPage.css';

export class SignUpPage extends Component {
  render() {
    return (
      <div id="signUpContent">
      <form id="accountForm">
        <h3 className="formHeader">Sign up for an account!</h3>

        <section className="loginInfo">
          <div>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" type="text" name="firstName" />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" type="text" name="lastName" />
            </div>

          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">Password <span>(8 character minimum)</span></label>
            <input id="password" type="password" name="password" />
          </div>
        </section>

        <div className="formAccess">
          <div>
            <label htmlFor="keepID">Keep me signed in</label>
            <input id="keepID" type="checkbox" name="keepID" />
          </div>
          <a href="#">Reset Password</a>
        </div>

        <div className="formButtons">
          <button>Create Account</button>
          <hr />
          <button className="fbButton">Continue with Facebook</button>
          <button className="googButton">Continue with Google</button>
        </div>
        <p className="altAcct">Already have an account? <Link to="/login">Log In!</Link></p>
      </form>
    </div>
    )
  }
}

export default SignUpPage

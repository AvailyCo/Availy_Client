import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AccountSettings.css';
import userPic from '../../../Assets/User3.jpeg';
import cameraIcon from '../../../Assets/cameraIcon.png';

export class AccountSettings extends Component {
    render() {
        return (
            <div id="accountSettings">
        <section className="accountSettingSection" id="accountSettingHeader">
            <div className="accountSettingUserPic">
                <img id="userPic" src={userPic}></img>
                <button id="changePicButton"><img id="changePic"
                src={cameraIcon}></img></button>
            </div>
            <h1 id="userFullName">Jane Doe</h1>
        </section>
        <section className="accountSettingSection">
            <h3>Your account</h3>
        </section>
        <section className="accountSettingSection" id="accountSettingName">
            <label className="accountSettingLabel">Name</label>
            <div className="infoEdit">
            <p className="currentInfo">Jane Doe</p>
            <button className="editButton" >Edit</button>
            </div>
        </section>
        <section className="accountSettingSection" id="accountSettingEmail">
            <label className="accountSettingLabel">Email</label>
            <div className="infoEdit">
            <p className="currentInfo">janedoe@gmail.com</p>
            <button className="editButton">Edit</button>
            </div>
        </section>
        <section className="accountSettingSection" id="accountSettingPassword">
            <label className="accountSettingLabel">Password</label>
            <div className="infoEdit">
            <p className="currentInfo">password</p>
            <button className="editButton">Edit</button>
            </div>
        </section>
        <section className="accountSettingSection" id="accountSettingFacebook">
            <img id="facebookIcon" src="facebookIcon.png"></img>
            <button className="editButton">Continue with Facebook</button>
        </section>
        <section className="accountSettingSection" id="accountSettingDelete">
            <button className="deleteAccountButton">Delete Account</button>
        </section>
    </div>
        )
    }

}

export default AccountSettings;
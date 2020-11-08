import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AccountSettings.css';
import EditName from './AccountSettingEditName';
import EditEmail from './AccountSettingEditEmail';
import EditPassword from './AccountSettingsEditPassword'
import userPic from '../../../Assets/User3.jpeg';
import cameraIcon from '../../../Assets/cameraIcon.png';
import facebookIcon from '../../../Assets/facebookIcon.png';

export class AccountSettings extends Component {
    state = {
        editName: false,
        editEmail: false,
        editPassword: false,
    };

    editNameToggle = () => {
        this.setState({
            editName: !this.state.editName
        })
    }

    editEmailToggle = () => {
        this.setState({
            editEmail: !this.state.editEmail
        })
    }

    editPasswordToggle = () => {
        this.setState({
            editPassword: !this.state.editPassword
        })
    }

    render() {
        return (
        <div id="accountSettings">
        <div id="accountSettingsform">
        <section className="accountSettingSection" id="accountSettingHeader">
            <div className="accountSettingUserPic">
                <img id="userPic" src={userPic}></img>
                <button id="changePicButton"><img id="changePic"
                src={cameraIcon}></img></button>
            </div>
            <h1 id="userFullName">Jane Doe</h1>
        </section>
        <section className="accountSettingSection" id="yourAccountHeader">
            <h3>Your account</h3>
        </section>
        <section className="accountSettingSection" id="accountSettingName">
            <label className="accountSettingLabel">Name</label>
            <div className="infoEdit">
            <p className="currentInfo">Jane Doe</p>
            <button className="editButton" onClick={e => this.editNameToggle(e)}>Edit</button>
            </div>
        </section>
        {this.state.editName ? <EditName /> : <div></div>}
        <section className="accountSettingSection" id="accountSettingEmail">
            <label className="accountSettingLabel">Email</label>
            <div className="infoEdit">
            <p className="currentInfo">janedoe@gmail.com</p>
            <button className="editButton" onClick={e => this.editEmailToggle(e)}>Edit</button>
            </div>
        </section>
        {this.state.editEmail ? <EditEmail /> : <div></div>}
        <section className="accountSettingSection" id="accountSettingPassword">
            <label className="accountSettingLabel">Password</label>
            <div className="infoEdit">
            <p className="currentInfo">password</p>
            <button className="editButton" onClick={e => this.editPasswordToggle(e)}>Edit</button>
            </div>
        </section>
        {this.state.editPassword ? <EditPassword /> : <div></div>}
        <section className="accountSettingSection" id="accountSettingFacebook">
            <img id="facebookIcon" src={facebookIcon}></img>
            <button className="editButton">Continue with Facebook</button>
        </section>
        <section className="accountSettingSection" id="accountSettingDelete">
            <button className="deleteAccountButton">Delete Account</button>
        </section>
    </div></div>
        )
    }

}

export default AccountSettings;
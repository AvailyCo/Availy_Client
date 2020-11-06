import React, { Component } from 'react';
import './AccountSettings.css';

export class EditPassword extends Component {
    render (){
        return (
            <section className="editSetting" id="accountSettingPasswordOn">
            <form id="editPasswordForm">
                <label className="inputLabel" htmlFor="currentPassword">Current Password</label>
                <input id="currentPassword" />
                <label className="inputLabel" htmlFor="newPassword">New Password</label>
                <input id="newPassword" />
                <label className="inputLabel" htmlFor="confirmPassword">Confirm Password</label>
                <input id="confirmPassword" />
                <div className="buttonDiv">
                <button className="updateButton">Update Password</button>
                <button className="cancelButton">Cancel</button>
            </div>
            </form>
        </section>
        )
    }
}

export default EditPassword;
import React, { Component } from 'react';
import './AccountSettings.css';

export class EditEmail extends Component {
    render () {
        return (
            <section className="editSetting" id="accountSettingEmailOn">
            <form id="editEmailForm">
                <label className="inputLabel" htmlFor="newEmail">New Email</label>
                <input id="newEmail" />
                <label className="inputLabel" htmlFor="confirmNewEmail">Confirm New Email</label>
                <input id="confirmNewEmail" />
                <label className="inputLabel" htmlFor="currentPassword">Current Password</label>
                <input id="currentPassword" />
                <div className="buttonDiv">
                <button className="updateButton">Update Email</button>
                <button className="cancelButton" onClick={e => this.editEmailToggle(e)}>Cancel</button>
            </div>
            </form>
        </section>
        )
    }
}

export default EditEmail;
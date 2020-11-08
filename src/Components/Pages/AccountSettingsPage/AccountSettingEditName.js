import React, { Component } from 'react';
import './AccountSettings.css';

export class EditName extends Component {
    render () {
        return (
            <section className="editSetting collapse" id="accountSettingNameOn">
            <form id="editNameForm">
                <label className="inputLabel" htmlFor="fullName">Full Name</label>
                <input id="fullName" />
                <label className="inputLabel" htmlFor="currentPassword">Current Password</label>
                <input id="currentPassword" />
                <div className="buttonDiv">
                <button className="updateButton">Update Name</button>
                <button className="cancelButton"
                onClick={e => this.editNameToggle(e)}>Cancel</button>
            </div>
            </form>
        </section>
        )
    }
}

export default EditName;
import React, { Component } from 'react';

import './NewEventPage.css';
import NewEventCalendar from './NewEventCalendar/NewEventCalendar';

export class NewEventPage extends Component {

  toggleEventCalendar = (e) => {
    e.preventDefault();

    document.getElementById("newEventCalendar").toggleAttribute("hidden");
  }

  render() {
    return (
      <div id="newEventPage">
        <NewEventCalendar
          toggle={this.toggleEventCalendar}
        />
        <form id="newEventCreateForm">
          <fieldset id="newEventHeader">
            <h2>Plan Event</h2>
            <button>Quick Poll</button>
          </fieldset>
          <fieldset id="newEventTimezoneSelect">
            <label htmlFor="newEventTimezone">Time Zone</label>
              <select id="newEventTimezone" name="newEventTimezone">
                <option>My Timezone</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
          </fieldset>
          <fieldset id="newEventDetails">
            <div>
              <label htmlFor="newEventName">Event Name</label>
              <input id="newEventName" name="newEventName" type="text" />
            </div>
            <div>
              <label htmlFor="newEventDesc">Event Description</label>
              <textarea id="newEventDesc" name="newEventDesc" />
            </div>
            <div>
              <label htmlFor="newEventLocation">Location</label>
              <input id="newEventLocation" name="newEventLocation" type="text" />
            </div>
            <div>
              <label htmlFor="newEventLink">Meeting Link</label>
              <input id="newEventLink" name="newEventLink" type="text" />
            </div>
            <div>
              <label htmlFor="newEventGuests">Add Guests (Email Addresses)</label>
              <input id="newEventGuests" name="newEventGuests" type="text" />
            </div>
            <div>
              <label htmlFor="newEventMessage">Personal Message</label>
              <textarea id="newEventMessage" name="newEventMessage" />
            </div>
            <button
              onClick={e => this.toggleEventCalendar(e)}
            >Create Event Calendar</button>
          </fieldset>
          <fieldset id="newEventSubmission">
            <button>Send Invites</button>
            <button>Cancel</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default NewEventPage

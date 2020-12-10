import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NewEventCalendar.css';
import MonthlyCalendar from './MonthlyCalendar/MonthlyCalendar';
import DailyCalendar from './DailyCalendar/DailyCalendar';

export class NewEventCalendar extends Component {

  render() {
    return (
      <div 
        id="newEventCalendar"
        // class="hidden"
      >
        <form id="newEventCalendarForm">
          <fieldset id="newEventCalendarHeader">
            <h2>Event Name</h2>
            <p>by Auth User</p>
          </fieldset>
          <ul id="newEventCalendarDetails">
            {/* need to troubleshoot loading fontawesome icons */}
            <li><span className="fas fa-map-marker-alt" /> Location Details</li>
            <li><span className="fa fa-quote-left" /> Description</li>
            <li><span className="fas fa-user-friends" /> 0 out or 10 votes</li>
            <li><span className="fas fa-comment-dots" /> Message: Please select all dates and times that work for you in the event calendar</li>
          </ul>
          <fieldset id="newEventCalendarRange">
            <div>
              <label htmlFor="newCalendarFormTZ">Time Zone</label>
              <select name="newCalendarFormTZ" id="newCalendarFormTZ">
                <option>--select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div id="setDateRange">
              <label htmlFor="newCalendarFormSetDate">Set Date</label>
              <select id="newCalendarFormSetDate" name="newCalendarFormSetDate">
                <option>null</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <label htmlFor="newCalendarFormEndDate">to</label>
              <select id="newCalendarFormEndDate" name="newCalendarFormEndDate">
                <option>null</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div id="setTimeRange">
              <label htmlFor="newCalendarFormSetTime">Set Time</label>
              <select id="newCalendarFormSetTime" name="newCalendarFormSetTime">
                <option>null</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <label htmlFor="newCalendarFormEndTime">to</label>
              <select id="newCalendarFormEndTime" name="newCalendarFormEndTime">
                <option>null</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <Link to="/accountSettings">
              Edit Availability
            </Link>
          </fieldset>
          <fieldset id="newEventCalendarPoll">
            <MonthlyCalendar />
            <DailyCalendar />
          </fieldset>
          <fieldset id="newEventCalendarSubmission">
            <button>Save</button>
            <button
              onClick={e => this.props.toggle(e)}
            >
              Cancel
            </button>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default NewEventCalendar

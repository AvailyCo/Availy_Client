import React, { Component } from 'react';

import './DailyCalendar.css';

export class DailyCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeOptions: [
        { id: 1, start: "12AM", end: "1AM", available: true, attending: false },
        { id: 2, start: "1AM", end: "2AM", available: true, attending: true },
        { id: 3, start: "2AM", end: "3AM", available: true, attending: true },
        { id: 4, start: "3AM", end: "4AM", available: false, attending: false },
        { id: 5, start: "4AM", end: "5AM", available: false, attending: false },
        { id: 5, start: "5AM", end: "6AM", available: true, attending: false },
        { id: 5, start: "6AM", end: "7AM", available: true, attending: false },
        { id: 5, start: "7AM", end: "8AM", available: false, attending: false },
      ]
    }
  }

  renderTableHeader() {
    let header = Object.keys(this.state.timeOptions[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  renderTableData() {
    return this.state.timeOptions.map((option, index) => {
      const { id, start, end, available, attending } = option;
      return (
        <tr key={id}>
          {available ?
          <td className="timeSlot">
            <span>{start}</span>
            |
            <span>{end}</span>
          </td> :
          <td className="timeSlot notAvailable">
            <span>{start}</span>
            |
            <span>{end}</span>
          </td>
          }
          
          {available ?
          <td>
            <input
              type="checkbox"
              id={"attending" + id}
              name={"attending" + id}
              value={attending}
            />
            {attending}
          </td> :
          <td className="notAvailable">Not Available</td>
          }

          {available ?
          <td>sum</td> :
          <td className="notAvailable"></td>
          }
        </tr>
      )
    })
  }
  renderSubmission() {
    return (
      <tf>
        <input type="text" id="guestName" name="guestName" />
        <button>Save</button>
      </tf>
    )
  }

  render() {
    return (
      <form id="dailyCalendar">
        <header>
          <button>
            <span className="fa fa-angle-double-left" />
          </button>
          <h3>Dec 1, 2020</h3>
          <button>
            <span className="fa fa-angle-double-right" />
          </button>
        </header>
        <table cellSpacing="0">
          <tbody>
            <tr>
              <th>Time</th>
              <th>Available</th>
              <th>Responses</th>
            </tr>
            {this.renderTableData()}
          </tbody>
        </table>
        <section id="eventCalendarFooter">
          <input type="text" id="eventCalendarGuest" name="eventCalendarGuest" />
          <button>Save</button>
        </section>
      </form>
    )
  }
}

export default DailyCalendar
